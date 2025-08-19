---
type: gist
title: gRPC Stream to Channel
description: Put gRPC stream values in a channel for a `select` statement
comments: true
---

```go {title="stream.go" lineNos=true}
package stream

import (
	"context"
	"errors"
	"io"
	"strings"

	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type StreamValueReceiver[Recv any] interface {
	Recv() (*Recv, error)
}

// stream to chan discussion: https://github.com/grpc/grpc-go/issues/847
type StreamValueListener[Recv any] struct {
	log     *zap.Logger
	recv    chan *Recv
	err     chan error
	running bool
	label   string
}

func CreateStreamValueListener[Recv any](log *zap.Logger, r StreamValueReceiver[Recv], label string) *StreamValueListener[Recv] {
	o := &StreamValueListener[Recv]{
		log:     log,
		recv:    make(chan *Recv),
		err:     make(chan error),
		running: false,
		label:   label,
	}
	o.start(r)
	return o
}

func (o *StreamValueListener[Recv]) start(r StreamValueReceiver[Recv]) {
	if r == nil {
		o.err <- errors.New("output receiver is nil")
		return
	}
	if o.running {
		return
	}
	go func() {
		o.running = true
		for {
			o.log.Debug("Waiting for message from stream.")
			resp, err := r.Recv()
			if err != nil {
				if err == io.EOF {
					o.log.Debug("End of stream.")
					o.running = false
					return
				}

				st, ok := status.FromError(err)
				if (ok && st.Code() == codes.Canceled) || errors.Is(err, context.Canceled) || errors.Is(err, context.DeadlineExceeded) {
					o.log.Debug("Stream disconnected by client.")
					o.running = false
					return
				}

				if strings.Contains(err.Error(), "EOF") && strings.Contains(err.Error(), "NO_ERROR") {
					o.log.Warn("Stream disconnected by server.")
					o.running = false
					return
				}

				o.log.Debug("Failed to receive message from stream.")
				o.err <- err
				o.running = false
				return
			}
			o.log.Debug("Received message from stream.")
			o.recv <- resp
		}
	}()
}

func (o StreamValueListener[Recv]) ListenRecv() chan *Recv {
	return o.recv
}

func (o StreamValueListener[Recv]) ListenErr() chan error {
	return o.err
}
```

```go {title="watch.go" lineNos=true}
package stream

import (
	"context"

	"go.uber.org/zap"
	"google.golang.org/grpc"
)

func watchStream(ctx context.Context, log *zap.Logger, stream pb.MyRPCStream, handle func(context.Context, *pb.Response) error) {
	o := CreateStreamValueListener(log, stream)
	go func() {
		for {
			select {
			case <-ctx.Done():
				log.Debug("Context for stream cancelled.", zap.Error(ctx.Err()))
				return
			case <-sctx.Done():
				log.Debug("Stream context cancelled.", zap.Error(sctx.Err()))
				return
			case err := <-o.ListenErr():
				log.Error("Failed to receive message from stream.", zap.Error(err))
				return
			case resp := <-o.ListenRecv():
				if resp != nil {
					log.Debug("Received response from stream.")
					if err := handle(ctx, resp); err != nil {
						log.Error("Failed to handle response from stream.", zap.Error(err))
					}
				} else {
					log.Warn("Received nil response from stream.")
				}
			}
		}
	}()
}
```

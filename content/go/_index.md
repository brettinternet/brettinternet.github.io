---
type: post
title: Go
publishDate: 2025-01-27
description: The Go programming language
hide_image: true
resources:
  - src: discussion.png
    params:
      alt: three people talking in group, one man pointing back with a thumb
comments: true
draft: true
---

I like Go. The language has become a "practical pragmatist" of modern languages. I like Go for its simplicity, garbage collection, green threads, compilation speed and effective standard library, but I understand how some might feel it's limited by deliberate design choices.

I encountered a [Hacker News comment](https://news.ycombinator.com/item?id=44392307) that summarizes my appreciation for Go:

> I guess Google's years of experience led to the conclusion that, for software development to scale, a simple type system, GC, and wicked fast compilation speed are more important than raw runtime throughput and semantic correctness. Given the amount of networking and large - scale infrastructure software written in Go, I think they absolutely nailed it.

Go optimizes for problems Google encountered early on:

- Infrastructure, HTTP and glue code
- Fast compilation over runtime optimization
- Large teams with high turnover
- Prioritizes readability over expressiveness

In my enterprise experience, these are common problems in the business software world that Go can solve.

### What Works

Go has an excellent developer experience.

For CI/CD pipelines and scaling product teams with merge queues, fast compilation is necessary. The barrier to entry in Go code is much lower because of the primitive typing system and memory management with garbage collection. Go syntax is easy to understand and it's easy to predict what happens next by emphasizing readability. Rust might be considered "safer" than Go because of its memory management and compile-time guarantees, but Go is my favorite balance of safety, fun, concurrency, expressiveness, and speed (both runtime and compilation).

Go shines with networking and server development for multicore hardware with comprehensive tooling for profiling and testing. The open source ecosystem for Go is one of the healthiest I've witnessed on GitHub. You can find very sophisticated, cloud native Go services from top performing companies (e.g. [Temporal](https://github.com/temporalio/temporal), [NATS](https://github.com/nats-io/nats-server), Kubernetes, and Docker). This makes Go an excellent fit for enterprise SaaS platforms because it's proven to be efficient at large scale programming.

### Limitations

The typing system just just works despite some common compl

- Not optimized for large, long-lived object heaps
- Works best with short-lived objects
  The proliferation of codegen tools for Go is a testament of its limited expressive power. There are limited type-level features compared to modern languages.

The most common criticism of Go is its repetitive error handling patterns:

```go
func workWithError() (*R2, error) {
    r1, err := DoWork()
    if err != nil {
        return r1, err
    }
    if r2, err := r1.MoreWork(); err != nil {
        return nil, err
    } else {
        return r2, nil
    }
}
```

Go does force architectural compromises for performance-critical systems. While Go makes good HTTP services, it's obviously not the right choice for a hardware driver.

Design Philosophy Constraints

Go is deliberately simple but sometimes oversimplified. Enums types are a common feature request.

- Lacks advanced type safety features
- Channel complexity despite being a core feature

### Conclusions

Go's compilation speed, performance, concurrency and simplicity make it excellent for rapid development and large teams. To some, its deliberate limitations may create some frustration. To me, Go is best in class for server-side tasks. For most software that I write, fast iteration matters more than peak performance and simplicity and readability matter more than the safety and correctness of a language like Rust.

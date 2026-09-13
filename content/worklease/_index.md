---
type: post
title: Worklease
publishDate: 2026-07-13
description:
    Time-limited local ownership for people and agents sharing a machine
comments: false
card_image: demo.gif
hide_image: true
resources:
    - src: demo.gif
      params:
          alt: Worklease coordinating a local resource lease
---

[Worklease](https://github.com/brettinternet/worklease) coordinates cooperating
coding agents working in separate local worktrees.

The backlog or provider remains authoritative. Worklease prevents local agent
loops from duplicating work by assigning temporary ownership with leases,
expiry, waiting, status, history, guarded commands, and recovery.

![Two workers coordinating ownership of the same task with Worklease](demo.gif)

```mermaid
sequenceDiagram
    participant A as Worker A
    participant W as Worklease
    participant B as Worker B
    A->>W: acquire task:demo
    W-->>A: claim granted
    B->>W: acquire task:demo
    W-->>B: already claimed
    A->>W: release
    B->>W: acquire task:demo
    W-->>B: claim granted
```

A lockfile protects a critical section for one process or file. Worklease
coordinates work across agents and supports ownership safely over time.

{{< card
title="brettinternet/worklease"
description="Go CLI and portable agent workflow"
href="https://github.com/brettinternet/worklease" >}}

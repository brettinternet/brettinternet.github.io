---
type: post
title: Worklease
publishDate: 2026-07-13
description: Time-limited ownership for people and agents across machines
comments: false
card_image: demo.gif
hide_image: true
resources:
    - src: demo.gif
      params:
          alt: Worklease coordinating a resource lease
    - src: remote-demo.gif
      params:
          alt: Worklease coordinating workers across machines
---

[Worklease](https://github.com/brettinternet/worklease) coordinates cooperating
coding agents across separate worktrees and distributed environments.

The backlog or provider remains authoritative. Worklease prevents agent loops
from duplicating work by assigning temporary ownership with leases, expiry,
waiting, status, history, guarded commands, and recovery.

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
coordinates work across agents and supports ownership safely over time. Its
server coordinates workers across machines.

![Two workers coordinating remotely with Worklease](remote-demo.gif)

{{< card
title="brettinternet/worklease"
description="Go CLI and portable agent workflow"
href="https://github.com/brettinternet/worklease" >}}

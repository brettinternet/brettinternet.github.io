---
type: post
title: hum
publishDate: 2026-09-07
description: Stop pasting stdout into your prompt like a meat proxy
comments: false
card_image: demo.gif
resources:
    - src: demo.gif
      params:
          alt: hum supervising local project processes
---

[hum](https://github.com/brettinternet/hum) keeps local project processes
running between commands for humans and coding agents. It provides bounded logs,
readiness checks, dependencies, JSON/MCP output, and controlled TTY input so
humans and agents can watch the same stdin/stdout.

Use it to keep dev servers alive across commands, start local stacks in
dependency order, and let coding agents inspect logs or interact with running
processes.

{{< card
title="brettinternet/hum"
description="Keep local project processes running."
href="https://github.com/brettinternet/hum" >}}

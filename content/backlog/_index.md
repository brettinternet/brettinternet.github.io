---
type: post
title: Backlog
publishDate: 2026-10-26
description: Keyboard-first terminal backlog for people and coding agents
hide_title: true
hide_date: true
hide_image: true
comments: false
card_image: demo.gif
resources:
    - src: app-icon.png
      params:
          alt: Backlog app icon
    - src: demo.gif
      params:
          alt: Backlog TUI demo
---

{{< raw >}}

<div class="flex justify-center">
  <img width="128" height="128" loading="lazy" decoding="async" src="./app-icon.png" alt="Backlog app icon" class="my-3 rounded-xl" />
</div>

<h1 align="center">Backlog</h1>
{{< /raw >}}

[`bl`](https://github.com/brettinternet/backlog) is a keyboard-first terminal
backlog for people and coding agents. Tasks are Markdown files in Git, and every
worktree shares one live queue.

![Backlog TUI demo](demo.gif)

## Features

- TUI with filtering, keymap help, and quick task creation
- `--json` on every command, plus an MCP server for agents
- Query language with readiness and ranking via `bl next`
- Hooks, actions, and an event stream
- Optional claims through [Worklease](/worklease/) so agents never pick up the
  same item

## Backends

- Native Markdown files
- [Backlog.md](https://github.com/MrLesk/Backlog.md)
- [Beads](https://github.com/steveyegge/beads)
- GitHub Issues and Projects v2
- Linear
- Jira Cloud
- External adapters over JSON-RPC

{{< card
title="brettinternet/backlog"
description="Go CLI and TUI"
href="https://github.com/brettinternet/backlog" >}}

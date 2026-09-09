---
type: post
title: AI
description: Coding harnesses for the rodeo
card_video: agents.webm
publishDate: 2025-07-04
lastmod: 2026-09-05
---

How I use AI has evolved dramatically over the last year. [Pi](https://pi.dev)
has become my favorite agent harness. It's small, composable, and easy to shape
with extensions. [Herdr](https://herdr.dev) is the terminal multiplexer around
it, keeping agent and terminal processes alive across disconnects. Like all good
tooling, both have incredible interfaces to extend the tools.

{{< card
title="AI configuration"
description="Shared configuration and agent setup"
href="https://github.com/brettinternet/dotfiles/tree/main/ai" >}}

My setup routes distinct roles to different models and effort levels: explore,
executor, verifier, reviewer, oracle, writer, and PR watcher. It also uses
reusable skills and centralizes shared configuration across Pi, OMP, OpenCode,
Claude Code, Codex, and Amp.

{{< card
title="Pi extensions"
description="Small quality-of-life extensions for Pi"
href="https://github.com/brettinternet/pi-extensions" >}}

Useful Pi integrations include subagents, LSP, web, MCP and browser access,
conversation recall, and a guard for destructive commands. I've created some for
live voice, better herdr integration, title and progress management and looping.

{{< card
title="Herdr plugins"
description="Plugins for shaping the Herdr workspace"
href="https://github.com/brettinternet/herdr-plugins" >}}

Herdr adds worktrees, a command palette and workspace picker, pane titles and
navigation and layout helpers, plus a workbench where agents can open files in
Neovim diffs in LazyGit and run observable jobs. I can run this all from a live
Codex voice conversation in the terminal. It's fun. 🙂

I keep exploring new tools and shape them for engineering tasks as the industry
is transformed by AI.

---
type: post
title: Goodbye $HOME
publishDate: 2026-09-08
description: My first Pi subagent deleted most of my home directory
comments: true
hide_image: true
resources:
    - src: incident.png
      params:
          alt:
              Pi reporting that a subagent recursively deleted my home directory
          card_position: 50% 30%
---

## I deleted my home directory

This was my first time using subagents with Pi. What I did not know was that, at
the time, pi-subagents did not inherit global context and instructions the way
parent agents did.

A subagent executed this Bash as my user:

```sh
HOME=$(mktemp -d) node ...
status=$?
rm -rf /tmp/lifecycle-smoke.test.ts "$HOME"
exit $status
```

The inline `HOME` applied only to `node`. During cleanup, `"$HOME"` resolved to
`/Users/brett`, so `rm -rf` recursively deleted my home directory. 💀

{{< image
src="incident.png"
alt="Pi reporting that a subagent recursively deleted my home directory"
caption="The parent agent blaming it on the subagent" class="border-none" >}}

The damage included private keys, dotfiles, repositories, Documents and most of
Downloads. Without my global instructions to use Trash over `rm`, the subagent
obliterated quite a bit on my machine.

It took me a moment to realize what was happening. I tried steering the agent
instead of killing it because I had misdiagnosed the missing worktree. I didn't
interrupt the process until about 10 minutes later by killing the command's
descendants.

```sh
pkill -KILL -f '[r]m -rf .*Users/brett'
ps -axo pid,ppid,etime,command | grep -E '[r]m .*Users/brett'
```

Fortunately, just about everything on my machine is either clone-able or backed
up.

## What changed

First, I configured subagents to inherit the global instructions. I narrowed
their roles and tool access. My Pi configuration now has policies to
[block](https://github.com/Dicklesworthstone/destructive_command_guard) `rm`,
variable-derived deletion, protected paths, malformed Bash, and some attempts to
escape the project root. A second fail-closed check provides defense in depth
along with interactive Trash checks.

These protections block the original configured Pi path.
[Real sandboxing](https://github.com/brettinternet/pi-extensions/tree/92aef9e848ee2ed98acdb9351cfb7cc949ab3515/extensions/colima-sandbox),
restricted mounts, and process-group termination are better containment options,
but not quite the right fit for what I work on.

Clearly none of this is Pi's fault. I love how configurable it is and I've had a
blast [making it my own](https://github.com/brettinternet/pi-extensions). But
this experience has been a good wake up call for security.

Maybe being willing to say goodbye to `$HOME` is also useful. 🫡

<!-- https://x.com/brettinternet/status/2095711086704222280 -->

{{< x user="brettinternet" id="2095711086704222280" >}}

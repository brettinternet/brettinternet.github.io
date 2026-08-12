---
type: post
title: Dotfiles
publishDate: 2021-10-27
description: Config files for X11, i3wm, Sway, macOS, Arch Linux, zsh and bash
card_image: thinkpad.png
post_image: i3.png
resources:
    - src: i3.png
      params:
          alt: X11 with i3 window manager screenshot
    - src: thinkpad.png
      params:
          alt: ThinkPad laptop on person's lap with terminal open
comments: true
---

My [dotfiles](https://github.com/brettinternet/dotfiles) are easy to set up for
both desktop consoles and headless servers. I use Make, Bash scripts, and
[dotbot](https://github.com/anishathalye/dotbot), an idempotent Python script
that configures directories, creates symlinks, and runs scripts for Linux and
macOS. I've broken the dotbot configuration out into multiple modules to select
features suited for different environments.

I've simplified my Neovim and Emacs configurations by using AstroNvim and Doom,
respectively. While I love [i3](https://i3wm.org/), I'm in the process of
configuring [Sway](https://swaywm.org/) to see if I can match my productivity on
Wayland.

{{< card
title="Dotfiles"
description="macOS & Linux environments"
href="https://github.com/brettinternet/dotfiles" >}}

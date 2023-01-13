---
type: post
title: Dotfiles
publishDate: 2021-10-27
description: Config files for X11, i3wm, sway, macOS, Arch Linux, zsh and bash
resources:
  - src: i3.png
    params:
      alt: X11 with i3 windows manager screenshot
comments: true
---

My [dotfiles](https://github.com/brettinternet/dotfiles) are easy to setup for
both desktop consoles and headless servers. I use Make, bash scripts and
[dotbot](https://github.com/anishathalye/dotbot), an idempotent python script
which configures directories, creates symlinks and run postscripts for Linux and
macOS. I've broken the dotbot configuration out into multiple modules to select
features suited for different environments.

I've simplifed my nvim and emacs configurations by just using Astronvim and Doom
respectively. While I love [i3](https://i3wm.org/), I'm in the process of
configuring [Sway](https://swaywm.org/) to see if I can match my productivity on
Wayland.

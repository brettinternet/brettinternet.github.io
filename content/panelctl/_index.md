---
type: post
title: PanelCtl
publishDate: 2026-07-24
description: An experiment in controlling OLED monitors on macOS
hide_title: true
hide_date: true
hide_image: true
hide_card_image: true
comments: false
resources:
    - src: app-icon.png
      params:
          alt: PanelCtl app icon
---

{{< raw >}}

<div class="flex justify-center">
  <img width="128" src="./app-icon.png" alt="PanelCtl app icon" class="my-3 rounded-xl" />
</div>

<h1 align="center">PanelCtl</h1>
{{< /raw >}}

[PanelCtl](https://github.com/brettinternet/panelctl) started as an experiment
to see what macOS safely detail and control with external monitors.

The end result is a pure-black window on selected displays. An idle timeout
intervenes to protect OLED monitors with a black screen when I step aware from
my workspace or I'm on a call and don't need my screens. That is useful when a
long video call leaves static pixels on a side monitor, or when I step away from
the desk in the middle of a long day.

```sh
# Black out one display after five idle minutes, then keep watching.
panelctl blackout --display DISPLAY_UUID --idle-after 5m --watch

# Black out every display after idle, then sleep them after 30 minutes.
panelctl blackout --all --idle-after 5m --sleep-after 30m --keep-displays-awake
```

It grew into a macOS CLI and menu-bar app for display inventory, OLED blackouts,
display sleep, configurable idle and restore timers, and experimental DDC
brightness control.

{{< image src="panelctl-settings.png" alt="PanelCtl preferences" class="border-0" >}}

A blackout minimizes OLED pixel emission. However, it does not power down
display electronics or guarantee a panel compensation cycle. For a long
unattended stretch, all-display sleep is still the better option.

{{< card
title="brettinternet/panelctl"
description="macOS display controls for OLED blackouts and sleep"
href="https://github.com/brettinternet/panelctl" >}}

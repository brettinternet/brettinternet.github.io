---
type: post
title: DisplayPanel
publishDate: 2026-07-24
description: An experiment in controlling OLED monitors on macOS
aliases:
    - /panelctl/
hide_title: true
hide_date: true
hide_image: true
hide_card_image: true
comments: false
resources:
    - src: app-icon.png
      params:
          alt: DisplayPanel app icon
---

{{< raw >}}

<div class="flex justify-center">
  <img width="128" height="128" loading="lazy" decoding="async" src="./app-icon.png" alt="DisplayPanel app icon" class="my-3 rounded-xl" />
</div>

<h1 align="center">DisplayPanel</h1>
{{< /raw >}}

[DisplayPanel](https://github.com/brettinternet/DisplayPanel) started as an
experiment to learn what macOS could safely detect and control on external
monitors.

The result is a pure-black window on selected displays. An idle timeout shows it
when I step away from my workspace or am on a call and don't need every screen.
This helps protect OLED monitors when a long video call would otherwise leave
static content on a side display.

```sh
# Black out one display after five idle minutes, then keep watching.
dp blackout --display DISPLAY_UUID --idle-after 5m --watch

# Black out every display after idle, then sleep them after 30 minutes.
dp blackout --all --idle-after 5m --sleep-after 30m --keep-displays-awake
```

It grew into a macOS CLI and menu-bar app for per-display Hide/Show, idle
blackout, click-through dimming, display sleep and experimental monitor
controls.

{{< image src="displaypanel-settings.png" alt="DisplayPanel settings" class="border-0" >}}

A blackout minimizes OLED pixel emission. However, it does not power down
display electronics or guarantee a panel compensation cycle. For a long
unattended stretch, all-display sleep is still the better option.

{{< card
title="brettinternet/DisplayPanel"
description="macOS display controls for OLED blackouts and sleep"
href="https://github.com/brettinternet/DisplayPanel" >}}

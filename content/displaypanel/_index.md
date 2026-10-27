---
type: post
title: DisplayPanel
publishDate: 2026-07-24
description: Control macOS displays from an app, CLI and automations
aliases: [/panelctl/]
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
monitors. Now it's become a tool I use daily to hide/show displays to switch
inputs, idle blackout for OLED protection, display sleep automation and other
experimental monitor controls.

```sh
# Black out one display after five idle minutes, then keep watching.
dp blackout --display DISPLAY_UUID --idle-after 5m --watch

# Black out every display after idle, then sleep them after 30 minutes.
dp blackout --all --idle-after 5m --sleep-after 30m --keep-displays-awake
```

{{< image src="displaypanel-settings.png" alt="DisplayPanel settings" class="border-0" >}}

{{< card
title="brettinternet/DisplayPanel"
description="macOS display controls for OLED blackouts and sleep"
href="https://github.com/brettinternet/DisplayPanel" >}}

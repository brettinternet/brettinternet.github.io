---
type: post
title: Appresize
publishDate: 2025-07-25
description: Resize & move apps from anywhere on the window
hide_image: true
hide_date: true
hide_title: true
comments: false
card_image: demo.gif
resources:
  - src: demo.gif
    params:
      alt: resize & move apps from anywhere on the window
---

{{< raw >}}

<div class="flex justify-center">
  <img width="128" src="./icon.png" alt="resize" class="my-3" />
</div>

<h1 align="center">Appresize</h1>
{{< /raw >}}

[Appresize](https://github.com/brettinternet/Appresize) is a utility to resize and move apps from anywhere on the window with custom modifiers and other preferences.

{{< caption caption="Although not captured by the screen recorder, the cursor does follow window" class="flex flex-col justify-center items-center" >}}
<img src="./demo.gif" alt="move and resize window from anywhere" />
{{< /caption >}}

{{< caption caption="Custom modifiers & other behaviors" class="flex flex-col justify-center items-center" >}}
<img src="./screenshot.png" alt="window preferences" />
{{< /caption >}}

One of my favorite abandonware apps on macOS was an old closed-source Objective C application called [Hyperdock](https://bahoom.com/hyperdock) that had a small secondary feature to resize and move windows by a modifier from anywhere on the window.

There are various window utilities on Mac, but none of them satisfied my very specific expectation. Now, this demand lives on with Swift in a small utility [here](https://github.com/brettinternet/Appresize).

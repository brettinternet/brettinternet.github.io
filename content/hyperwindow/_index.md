---
type: post
title: HyperWindow
publishDate: 2025-07-25
description: Resize and move windows from anywhere
hide_image: true
hide_date: true
hide_title: true
comments: false
card_image: demo.gif
resources:
    - src: demo.gif
      params:
          alt: resize and move windows from anywhere
---

{{< raw >}}

<div class="flex justify-center">
  <img width="128" height="128" loading="lazy" decoding="async" src="./icon.png" alt="HyperWindow app icon" class="my-3" />
</div>

<h1 align="center">HyperWindow</h1>
{{< /raw >}}

[HyperWindow](https://github.com/brettinternet/HyperWindow) is a macOS utility
for resizing and moving windows from anywhere with custom modifiers and other
preferences.

{{< image src="demo.gif" alt="Resize and move windows from anywhere" caption="Although not captured by the screen recorder, the cursor does follow the window" >}}

{{< image src="screenshot.png" alt="HyperWindow settings" caption="Custom modifiers & other behaviors" class="border-0" >}}

One of my favorite abandonware apps on macOS was an old closed-source
Objective-C application called [Hyperdock](https://bahoom.com/hyperdock) that
had a small secondary feature to resize and move windows with a modifier from
anywhere on the window.

There are various window utilities on Mac, but none of them satisfied my very
specific expectation. Now, this demand lives on with Swift in a small utility
[here](https://github.com/brettinternet/HyperWindow).

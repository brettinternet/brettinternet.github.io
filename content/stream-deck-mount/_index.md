---
type: post
title: Magnetic Stream Deck mount for 1/4-inch screw
description: Magnetic mount for 1/4"-20 threaded insert
publishDate: 2024-12-18
post_image: streamdeck.jpg
resources:
    - src: mount.gif
      params:
          alt: Stream Deck mount 3D printing
    - src: streamdeck.jpg
      params:
          alt: mounted Stream Deck suspended over desk
comments: false
---

The Stream Deck is an excellent tool for invoking shortcuts. Check out
[my Hammerspoon config](https://github.com/brettinternet/dotfiles/blob/10ca81a59c4363c27f6796a80781188e6fe7032d/darwin/.hammerspoon/http.lua),
which I use to extend the Stream Deck scripting capabilities.

## Build

Pause before the enclosure's last layer and place twelve 6×3 mm round magnets
before continuing the print.

{{< video autoplay="true" loop="true" src="print.mp4" >}}

When the print is complete, heat the threaded insert with a soldering iron and
press it into the center hole. I've included a smaller practice print with the
same hole.

{{< card
title="MakerWorld 3D model"
description="STL/CAD files and instructions"
href="https://makerworld.com/en/models/1724207-magnetic-streamdeck-mount" >}}

## Result

{{< image src="mount.jpg" alt="mounted Stream Deck" >}}

---
type: post
title: Magnetic Stream Deck mount for 1/4-inch screw
description: Magnetic mount for 1/4"-20 threaded insert
publishDate: 2024-12-18
post_image: streamdeck.jpg
resources:
  - src: mount.gif
    params:
      alt: stream deck mount 3D printing
  - src: streamdeck.jpg
    params:
      alt: mounted stream deck suspended over desk
comments: false
---

The Stream Deck is an excellent tool to invoke shortcuts. Check out [my Hammerspoon config](https://github.com/brettinternet/dotfiles/blob/10ca81a59c4363c27f6796a80781188e6fe7032d/darwin/.hammerspoon/http.lua) which I use to extend the Stream Deck scripting capabilities.

## Build

Add a pause to the layer to add the magnetics just before the last layer of the enclosure. Add 12 of the 6x3mm round magnets into place before continuing the print.

{{< video autoplay="true" loop="true" src="print.mp4" >}}

When the print is complete, use a soldering iron to heat the threaded insert and melt into the center hole. I've included a smaller print with the hole to practice putting in the threaded insert.

{{< card
title="MakerWorld 3D model"
description="STL/CAD files and instructions"
href="https://makerworld.com/en/models/1724207-magnetic-streamdeck-mount" >}}

## Result

{{< image src="mount.jpg" alt="mounted stream deck" >}}

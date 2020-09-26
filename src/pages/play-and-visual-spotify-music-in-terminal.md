---
layout: post
title: Play and visualize Spotify music in terminal with mopidy and ncmpcpp
date: 2016-06-07
description: ''
categories:
  - archive
tags:
  - music
  - cli
---

Like Winamp, ncmpcpp is timeless classic for music applications. As I've picked up my work and slowly moved into the command-line space, I've found ncmpcpp very easy to use. [Ncmpcpp](https://wiki.archlinux.org/index.php/ncmpcpp) is an mpd client and coupled with Mopidy I can browse Spotify playlists, search for artists, and play top tracks.

```bash
brew install ncmpcpp
```

My latest endeavor with managing my music on the CLI has been to use a visualizer like [cli-visualizer](https://github.com/dpayne/cli-visualizer) or even ncmpcpp's native visualization. It's a fairly simple setup that's been around for a while with a standard mpd and mpd client like ncmpcpp. However, to use an mpd client with a streaming service like Spotify or Soundcloud, you have to use a service like Mopidy.

## Without Spotify

If you don't stream music, you're able to stick with a normal [mpd](https://wiki.archlinux.org/index.php/Music_Player_Daemon) setup.

```bash
brew install mpd
```

Using a Music Player Daemon to serve audio has been around for a while, so I won't get into this. Make sure you setup the entire config correctly, however, I'll highlight a key element here: the two audio outputs. The visualizers both in ncmpcpp and in cli-visualizer need the `fifo` audio output to work:

```bash
audio_output {
  type                  "fifo"
  name                  "my_fifo"
  path                  "/tmp/mpd.fifo"
  format                "44100:16:2"
}
```

And macOS uses CoreAudio for it's sound hardware output, so we'll add another output:

```bash
audio_output {
  type                  "osx"
  name                  "CoreAudio"
  mixer_type            "software"
}
```

## With Spotify

Install [Mopidy](https://github.com/mopidy) and Mopidy-Spotify. They have additional plugins for other streaming services.

```
brew install mopidy mopidy-spotify
```

Run `mopidy` once so the default config files are created. On macOS the config is `~/.config/mopidy/mopidy.conf`. Check out [my config here](https://github.com/brettinternet/dotfiles/blob/master/.config/mopidy/mopidy.conf). The key component I wrestled with here was the split audio output.

```bash
[audio]
output = tee name=t t. ! queue ! autoaudiosink t. ! queue ! audioresample ! audioconvert ! audio/x-raw,rate=44100,channels=2,format=S16LE ! wavenc ! filesink location=/tmp/mpd.fifo
```

Using a tee gstreamer element, we're able to use two audio outputs. Check out Mopidy's documentation for [advanced audio setups](https://docs.mopidy.com/en/latest/audio/) for more details.

You may have also noticed `spotify_tunigo` in the `mopidy.conf` below the Spotify options. [Spotify Tunigo](https://github.com/trygveaa/mopidy-spotify-tunigo) let's you browser Spotify's curated playlists and checkout new music.

Install Spotify Tunigo:

```bash
pip install Mopidy-Spotify-Tunigo
```

It's also important to note the Spotify settings in `mopidy.conf`. Storing passwords in plaintext is bad. There's a current work-around with python and [an open issue](https://github.com/mopidy/mopidy/issues/116#issuecomment-18026012) to improve this. Of course, it's always best practice to use unique passwords for everything.

Now let's run `mopidy` to make sure you don't get any errors. When I set up mine on macOS, I had a python error about a missing libspotify framework in `/Library/Frameworks`. If you get this error, simply run `brew info libspotify` to see where homebrew has installed your libspotify package. Create a folder in `/Library/Frameworks` called `libspotify.framework`, then create a symlink in `/Library/Frameworks/libspotify.framework` with:

```bash
ln -s /usr/local/Cellar/libspotify/12.1.51/lib/libspotify /Library/Frameworks/libspotify.framework/libspotify
```

Once you've confirmed there aren't any runtime errors, you can now run mopidy as a service.

```bash
brew services start mopidy
```

Now let's run `ncmpcpp`. Jump to the music browser with `2` and pick some Spotify tracks to play on the current playlist queue. `8` will take you to ncmpcpp's visualizer. If you've install [cli-visualizer](https://github.com/dpayne/cli-visualizer) you can run it with `vis`. Here are some of my preferred settings in `./config/vis/config`:

```bash
visualizer.spectrum.top.margin=0.30
audio.stereo.enabled=false
```

Some problems I'm working through with this setup: I noticed that when I change tracks or pause/stop and then resume playback in ncmpcpp, the cli-visualizer won't resume animation.

My next task is to get the cli-visualizer output to work on my mac's desktop as an [Ubersicht](http://tracesof.net/uebersicht/) widget.

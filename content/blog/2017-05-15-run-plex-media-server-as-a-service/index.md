---
title: "Run Plex Media Server as a Service"
date: 2017-05-15 00:00:00 -0600
description: ""
tags:
  - media
  - homelab
---

I have my Plex Media Server running on a headless media server running Windows 10 Pro—unfortunately.
Using Windows comes at a very inconvenient cost with all the unexpected, forced updates.
Just recently with the Creator's Update version 1703, the update prevented my remote login because it had restarted with that same initial settings options that Windows prompts you with when you first set up the OS.
The primary benefit of running an app as a service is that services will start when the PC starts without having to login as a user first.

![windows update](/images/windows1.png)

###### Sneaky Windows updates at the worst times

There are a few options for setting up Plex as a service: [NSSM](https://nssm.cc/), [PMS as a service](https://forums.plex.tv/discussion/93994/pms-as-a-service)—written specifically for Plex—and [SRVSTART](http://www.rozanski.org.uk/services#srvstart). NSSM seems to be the de facto solution for lots of folks, and in my experience is has been a very trustworthy tool on PC. I use NSSM for a few other apps on my media server like PlexPy, Sonarr and Plex Requests.

### NSSM

[NSSM](https://nssm.cc/download) is the non-sucking service manager. I use [Chocolately](https://chocolatey.org/) to install NSSM.

```
choco install -y nssm
```

Open an elevated command prompt as administrator. If you'd like to use the NSSM GUI, simply use:

```
nssm install
```

This will open up the NSSM GUI. Otherwise, like myself, you may just prefer a few commands on the CLI.

The steps are simple, and they've been outlined [here](https://www.jecal22.com/how-to-run-plex-media-server-as-a-windows-service-2/comment-page-1/).

Here are some of my notes on additional [NSSM commands](https://github.com/brettinternet/public-notes/blob/master/devops/nssm.md).

### PMS as a Service

PMS as a Service is created by a Plex community member. It's an incredibly simple [install](https://github.com/cjmurph/PmsService/releases). You'll have to enter your user credentials since the app needs an elevated status to manage a service.

### Automatic Updates

If you're a Plex subscriber, there are frequent Plex updates. And if you've elected to use PMS as a service, then you can also use this handy little piece of software, [PlexServerAutoUpdater](https://github.com/TechieGuy12/PlexServerAutoUpdater), which will stop your PMS service, update Plex automatically on your command and restart the service afterwards. You do have to configure Plex to `Automatically download updates`, this can be done in the server settings. According to the developer, PlexServiceAutoUpdater:

> 1. Stops the Plex service.
> 2. Stops any Plex processes that are running.
> 3. Installs the latest update.
> 4. Deletes the Run keys from the registry to prevent Plex from running outside of the service.
> 5. Stops any Plex processes that are running after the update.
> 6. Restarts the Plex service.

These steps are critical with Plex running as a service, because you don't want multiple instances of Plex running. You can read more about this software and how to use Task Scheduler to schedule your updates [on the author's blog](http://technicallyeasy.net/update-plex-automatically-running-plex-service/).

While I frequently remote into my servers to see what's going on, and I have [Telegraf](https://github.com/influxdata/telegraf) collecting status info on my servers, I'll still occasionally find my media server down without my knowing - typically because of some Windows update that required an abrupt restart.
Clearly Windows 10 is not a server OS.
If you have the cash💰, Windows Server comes with some measures to prevent this. Eventually, I'll set up all my media server apps on a linux box or run them in docker containers. Until then, running Plex Media Server as a service is exactly what I need.

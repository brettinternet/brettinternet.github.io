---
title: "Use pfSense as a Developer - Part 2"
date: 2017-07-22 00:00:00 -0600
description: ""
tags:
  - network
  - homelab
  - pfsense
---

I went over [setting up pfSense]({% post_url 2017-07-14-configure-pfsense-as-a-developer %}) earlier.
I also discussed some reasons why a feature-packed firewall is relevant to developer operations.

Now that you've finished the initial pfSense firewall setup, let's checkout some useful packages and tools you can explore. From the menu you can access `System` > `Package Manager`.

Some packages I use:

- **acme**: Let's Encrypt automated certificate renewal
- **haproxy**: reverse proxy and load balancer
- **iftop**: interface monitor
- **open-vpn-client-export**: makes preparing your openVPN config for devices very easy
- **pfBlockerNG**: reputation management and block lists like the [easylist](https://github.com/easylist/easylist)
- **Status_Traffic_Totals**: a fancy graph and statistics measuring your traffic (pictured below)

![censors](/images/pfsense4.png)

###### I use the internet a lot.

Since pfSense runs on FreeBSD, anything that works with FreeBSD can be installed via the command line. There are other great packages that handle common networking tasks like `nmap` and `darkstat`.

### Reverse Proxy

There are couple packaged options available to run a reverse proxy to your servers. I run a few different websites out of my home network for private use.
For example, I run a [Plex Request portal](https://github.com/tidusjar/Ombi) and a couple of portfolio projects.
Google will only give me one public IP, so I use a reverse proxy on my firewall to route web traffic to the right server and port.
You can also install nginx on FreeBSD via the CLI.

I first tried Squid Reverse Proxy but the setup wasn't as straightforward as Haproxy. Both are excellent options but Haproxy's load balancer is very mature.

### VPN

The setup wizard for OpenVPN will walk you through creating a self-signed certificate. If there's a router further up your firewall's WAN, then you may need to forward port 1194.

OpenVPN defaults to use the SHA1 hashing algorithm. Side note: did you hear about the [first anticipated collision](https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html) with SHA1? This isn't a big deal yet, but you may consider changing this to SHA3 or SHA5.

### Firewall

Besides the easylists available on pfBlockerNG, you can find [other lists](https://www.iblocklist.com/lists) to block depending on the needs of your network.

---

After a couple years of using pfSense, I've only scratched the surface.
Many of these tools aren't exclusive to pfSense, but the firewall sure does make it easy to setup with an attractive GUI.

Once you're comfortable here, your next task is to set up [2FA with pfSense](https://forum.pfsense.org/index.php?topic=95210.0), [mOTP](https://doc.pfsense.org/index.php/Mobile_One-time_Passwords_with_FreeRADIUS) or use the traffic shaper to optimize your VoIP's bandwidth.

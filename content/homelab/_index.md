---
type: post
title: Homelab
publishDate: 2022-11-02
description: Kubernetes at home
resources:
  - src: k8s.gif
    title: k9s shell tour
comments: true
---

Don't be fooled, having a home server is really just hundreds of hours of
[badblocks](https://wiki.archlinux.org/index.php/Badblocks).

I've been hard at work recently converting my architecture to support
orchestrated deployments with multiple nodes. I haven't quite achieved
high-availability, and I'm not likely to take things that far. However, it has
been an excellent journey to become more acquainted with Kubernetes.

## Setup

Here have been some of my goals:

- Lots of
  [self-hosted services](https://github.com/brettinternet/homelab/blob/main/cluster/apps)
- [Flux](https://toolkit.fluxcd.io/) GitOps with this repository
  ([cluster directory](https://github.com/brettinternet/homelab/blob/main/cluster))
- Ansible node provisioning and
  [K3s setup](https://github.com/PyratLabs/ansible-role-k3s) (Ansible
  [roles](https://github.com/brettinternet/homelab/blob/main/provision/ansible/roles)
  and
  [playbooks](https://github.com/brettinternet/homelab/blob/main/provision/ansible))
- Terraform DNS records
  ([terraform](https://github.com/brettinternet/homelab/blob/main/provision/terraform))
- [SOPS](https://github.com/mozilla/sops) secrets stored in Git
- [Renovate bot](https://github.com/renovatebot/renovate) dependency updates
- WireGuard VPN pod gateway via paid service
- WireGuard VPN proxy hosted on VPS
- [Cloudflared HTTP tunnel](https://github.com/cloudflare/cloudflared)
- [K8s gateway](https://github.com/ori-edge/k8s_gateway) for local DNS
  resolution to cluster and
  [NGINX ingress controller](https://kubernetes.github.io/ingress-nginx/)
- Both internal & external services with a service
  [gateway](https://github.com/ori-edge/k8s_gateway/)
- OIDC
  [authentication](https://www.authelia.com/configuration/identity-providers/open-id-connect/)
  with [LDAP](https://github.com/nitnelave/lldap)
- Automatic Cloudflare DNS updates
  ([ddns cronjob](https://github.com/brettinternet/homelab/blob/main/cluster/apps/networking/cloudflare-ddns))
- [MetalLB](https://metallb.universe.tf/) bare metal K8s network loadbalancing
- [Calico](https://www.tigera.io/project-calico/) CNI
- [ZFS](https://wiki.archlinux.org/index.php/ZFS)
- JBOD [mergerfs](https://github.com/trapexit/mergerfs) union NFS with
  [SnapRAID](https://www.snapraid.it) backup for low-touch media files
  ([snapraid-runner cluster cronjob](https://github.com/brettinternet/homelab/blob/main/cluster/apps/media/snapraid-runner))
- [Restic](https://restic.net) backups to remote and local buckets
  ([backup namespace](https://github.com/brettinternet/homelab/blob/main/cluster/apps/backup))
- [go-task](https://taskfile.dev) shorthand for useful commands
  ([Taskfile](https://github.com/brettinternet/homelab/blob/main/Taskfile.yaml)
  and
  [taskfiles](https://github.com/brettinternet/homelab/blob/main/.taskfiles))

![Book cover for "Mommy, Why is There a Server in the House?"](./stay_at_home_server.jpg)

### Some questions

- [Why use ECC RAM?](https://danluu.com/why-ecc/)
  - [Hacker News discussion](https://news.ycombinator.com/item?id=14206635)
  - [If you love your data, use ECC RAM](https://arstechnica.com/civis/threads/ars-walkthrough-using-the-zfs-next-gen-filesystem-on-linux.1235679/#p26303271)
  - [Error rates increase rapidly with rising altitude](https://en.wikipedia.org/wiki/ECC_memory#Description)

## Hardware

I finally upgraded my media server chassis to a
[Supermicro CSE-826](https://www.techyparts.com/supermicro-cse-826be16-r1k28lpb-2u-server-chassis-2x1280w-12x3-5-bpn-sas2-826el1.html).
For almost 7 years I was using a
[Node 804](https://www.fractal-design.com/products/cases/node/node-804/black/),
which is popular among hobbyists because it fits 8x 3.5" drivers. I use old
desktop hardware for this NAS and other nodes.

I used a widely-known and inexpensive method to add additional SATA storage via
a Host Bus Adapter (HBA). I purchased a
[Dell Perc H310](https://www.ebay.com/sch/i.html?_nkw=Dell+Perc+H310+SATA) a
long while back. Mine did come from overseas, but it turned out to be legit.
[This video](https://www.youtube.com/watch?v=EOcpp-GdhKo) shows how it can be
flashed to an LSI 9211-8i IT (it's called IT mode; see also
[1](https://www.servethehome.com/ibm-serveraid-m1015-part-4/),
[2](https://www.truenas.com/community/threads/confused-about-that-lsi-card-join-the-crowd.11901/)).

Here are other recommended
[controllers](https://www.reddit.com/r/DataHoarder/wiki/hardware#wiki_controllers).

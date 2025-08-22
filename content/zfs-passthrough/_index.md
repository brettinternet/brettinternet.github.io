---
type: post
publishDate: 2023-12-09
title: The Stages of ZFS Grief
description: A short story about recovering from a ZFS oops
comments: true
---

I use a widely-known and inexpensive method to add additional SATA storage with the [Dell Perc H310](https://www.ebay.com/sch/i.html?_nkw=Dell+Perc+H310+SATA). I found this old Host Bus Adapter (HBA) a long while back. This HBA can be flashed to IT mode by taping over a couple PCI pins to bypass the hardware RAID and use software RAID. <sup>[1](#flash-instructions)</sup>

Since moving my home servers to Proxmox to manage virtualization, I setup disk passthrough to a VM managing my ZFS array. What could go wrong?

```sh
$ qm set 100 -scsi1 /dev/disk/by-id/…
$ qm set 100 -scsi2 /dev/disk/by-id/…
$ …
```

I'm sure this is fine.

_Hours later, after a seemingly innocent reboot…_

On the guest:

```sh
$ zpool list
no pools available
```

## 1. Denial

On the host:

```sh
$ zpool list
no pools available
```

Hmm.

```sh
$ zpool import tank
cannot import 'tank': I/O error
	Destroy and re-create the pool from
	a backup source.
```

Uh oh.

```sh
$ zpool import -F tank
cannot import 'tank': one or more devices is currently unavailable
```

This is not good.

## 2. Anger

My restic backups are stale because of some issues with my homelab. 🤦‍♂️

```sh
$ zpool import -N -o readonly=on -f tank
cannot import 'tank': I/O error
	Destroy and re-create the pool from
	a backup source.
```

> Destroy and re-create the pool from	a backup source.

At this point, most forums appear to suggest that the pool is lost forever.

## 3. Bargaining

Readonly should have worked 🤔

```sh
$ zpool import -N -o readonly=on -f -R tank
   pool: tank
     id: …
  state: ONLINE
status: Some supported features are not enabled on the pool.
	(Note that they may be intentionally disabled if the
	'compatibility' property is set.)
 action: The pool can be imported using its name or numeric identifier, though
	some features will not be available without an explicit 'zpool upgrade'.
 config:

	tank                        ONLINE
	  raidz2-0                  ONLINE
	    …                       ONLINE
	    …                       ONLINE
	    …                       ONLINE
	    …                       ONLINE
```

```sh
$ zpool import -F
```

Same output as above.

Online seems good, right?

```sh
$ zpool status
no pools available
```

```sh
$ zpool import -F -m tank
cannot import 'tank': one or more devices is currently unavailable
```

Well, here we go. Let's find the txg to use for a rollback.

```sh
$ zpool import -FX tank
# seemingly hanging for a while…
^C^C^C^C
```

That option must not work the way I expected (forgive my impatience, dear reader).

## 4. Depression

At this point I pull down the latest snapshot from Backblaze and assess the damage.

```sh
$ zdb tank
zdb: can't open 'tank': No such file or directory

ZFS_DBGMSG(zdb) START:
ZFS_DBGMSG(zdb) END
```

What have I done to myself.

## 5. Acceptance

```sh
$ restic snapshots
repository … opened (version 2, compression level auto)
ID        Time                 Host           Tags                   Paths
--------------------------------------------------------------------------
20ee6d7b  …                    restic-remote  restic                 /data
```

Deep breath.

```sh
$ restic restore 20ee6d7b --target ./data
```

## 6. ?

Ok, wait a minute. Let's try that mysterious -X flag again, but with more patience.

```sh
$ zpool import -FX tank
# … waiting … staring … go get dinner … waiting … put baby to bed …
```

Exit 0! It worked!

```sh
$ ls /mnt/tank
files files files!
```

Immediately:

```sh
$ rsync -ahP /mnt/tank elsewhere:/mnt/pond/tank
```

I later find out that some folks on forums recommend against disk passthrough for ZFS pools in VMs, but this may depend on the HBA controller.

Now, I pass the entire HBA controller to guest VMs instead of individual disks when using ZFS. Lesson learned.

The end.

Thank you FreeBSD, Truenas, and r/zfs communities.

---

<a id="flash-instructions" href="#flash-instructions">1</a>: There are several instructions to flash the Dell Perc H310 HBA to IT mode: [video walkthrough](https://www.youtube.com/watch?v=EOcpp-GdhKo), [ServeTheHome post](https://www.servethehome.com/ibm-serveraid-m1015-part-4/), and [TrueNAS forum thread](https://www.truenas.com/community/threads/confused-about-that-lsi-card-join-the-crowd.11901/)

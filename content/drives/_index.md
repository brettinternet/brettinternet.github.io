---
type: post
title: Drives
publishDate: 2025-12-21
description: Here are the HDDs that have survived my storage pool
resources:
  - src: drives.png
    params:
      alt: hard drives stacked in a small computer
comments: true
---

Here are the drives that survive my [homelab](/homelab/). These drives run XFS with MergerFS to combine the JBOD pool into a single filesystem and SnapRAID for parity. I've had good luck so far. Managing your own storage is not without [some risk](/zfs-passthrough/), but overall this has been a fairly easy endeavor.

| Drive                                                                             | Qty | Size | Price/unit | Date       | Active | Notes                                                                      |
| --------------------------------------------------------------------------------- | --- | ---- | ---------- | ---------- | ------ | -------------------------------------------------------------------------- |
| [Seagate (ST3000DM001)](https://www.amazon.com/dp/B005T3GRLY)                     | 1   | 3TB  | $81        | 5/11/2016  | ❌     | My first drive in the terabyte range and the first to retire on 12/21/2025 |
| [HGST Deskstar (0S03660)](https://www.amazon.com/dp/B00HHAJU7K)                   | 3   | 3TB  | $119.99    | 8/24/2016  | ✅     |                                                                            |
| Seagate BarraCuda (used)                                                          | 1   | 2TB  | free       | 2019       | ❌     | Salvaged from IT dept                                                      |
| [HGST Ultrastar (0F23269)](https://www.amazon.com/dp/B07CJ6GDQ7) (refurbished)    | 1   | 6TB  | $129.99    | 6/27/2019  | ✅     |                                                                            |
| [Toshiba S300 Surveillance (HDWT360UZSVAR)](https://www.amazon.com/dp/B07NTDWMSQ) | 1   | 6TB  | $174.99    | 6/27/2019  | ✅     |                                                                            |
| [Seagate external HDD (STEB10000400)](https://www.amazon.com/dp/B07NPMMZ8C)       | 1   | 10TB | $169.99    | 1/10/2021  | ✅     | My first time "shucking"                                                   |
| [WD Red Plus (WD101EFBX)](https://www.amazon.com/dp/B08TZPS4QQ)                   | 2   | 10TB | $159.99    | 11/24/2022 | ✅     |                                                                            |
| Seagate (ST4000NM0025) (used)                                                     | 2   | 4TB  | free       | 2024       | ✅     | Salvaged from IT dept                                                      |

## Case

Originally I could fit 8x 3.5" drives in a [Node 804](https://www.fractal-design.com/products/cases/node/node-804/) which was a great apartment server. Later, I moved into a hotswappable Supermicro 2U rackmounted case.

---

## Update 12/21/2025: Drive failure

After some SnapRAID and SMART errors, I retired my first single-owner disk from my NAS.

```sh
$ sudo smartctl -a /dev/sdb | grep -E "Reallocated_Sector|Current_Pending"
5 Reallocated_Sector_Ct   0x0033   100   100   010    Pre-fail  Always       -       0
197 Current_Pending_Sector  0x0012   099   097   000    Old_age   Always       -       168
```

🫡

---

If you're shopping for new storage, check out [DiskPrices.com](https://diskprices.com/).

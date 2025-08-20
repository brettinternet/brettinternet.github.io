---
type: gist
title: Archlinux + Btrfs + dm-crypt
description: Setup guide
comments: true
---

## Features

- encryption
- btrfs
- swap and hibernate
- rEFInd bootloader

## Resources

- [User:Altercation/Bullet Proof Arch Install](https://wiki.archlinux.org/title/User:Altercation/Bullet_Proof_Arch_Install)
- [arch_sec_install.sh](https://gist.github.com/Th3Whit3Wolf/0150bd13f4b2667437c55b71bfb073e4)

## Setup

Enable ssh.

```sh
#!/bin/bash

set -xe

if passwd -S root | grep -q "NP"; then
  echo "Set root password:"
  passwd
fi

systemctl start sshd.service
```

Setup partitions.

```sh
# https://wiki.archlinux.org/title/Dm-crypt/Drive_preparation

DRIVE="/dev/nvme0n1"

sgdisk --zap-all $DRIVE

sgdisk --clear \
       --new=1:0:+550MiB --typecode=1:ef00 --change-name=1:EFI \
       --new=2:0:0       --typecode=2:8300 --change-name=2:cryptsystem \
       $DRIVE

lsblk -o +PARTLABEL

mkfs.fat -F32 -n EFI /dev/disk/by-partlabel/EFI

cryptsetup luksFormat \
    --perf-no_read_workqueue \
    --perf-no_write_workqueue \
    --type luks2 \
    --cipher aes-xts-plain64 \
    --key-size 512 \
    --iter-time 2000 \
    --pbkdf argon2id \
    --hash sha3-512 \
    /dev/disk/by-partlabel/cryptsystem
```

Unlock the encrypted partition.

```sh
cryptsetup \
    --allow-discards \
    --perf-no_read_workqueue \
    --perf-no_write_workqueue \
    --persistent \
    open /dev/disk/by-partlabel/cryptsystem system
```

Setup Btrfs volumes.

```sh
mkfs.btrfs --force --label system /dev/mapper/system
mount -t btrfs LABEL=system /mnt
btrfs subvolume create /mnt/@root
btrfs subvolume create /mnt/@home
btrfs subvolume create /mnt/@snapshots
btrfs subvolume create /mnt/@swap
umount -R /mnt
```

Mount volumes.

```sh
BASE_DIR="/mnt"

# autodefrag option not recommended for now: https://lore.kernel.org/linux-btrfs/87k0cvnklg.fsf@vps.thesusis.net/T/#m6c5617d6088879d825af4321735046ef20277dc7
o=defaults,x-mount.mkdir,noatime,nodiratime,discard=async
o_btrfs=$o,compress=zstd,ssd
o_swap=x-mount.mkdir,space_cache,ssd,discard=async,compress=no

mount -t btrfs -o subvol=@root,$o_btrfs LABEL=system $BASE_DIR
mount -t btrfs -o subvol=@home,$o_btrfs LABEL=system $BASE_DIR/home
mount -t btrfs -o subvol=@snapshots,$o_btrfs LABEL=system $BASE_DIR/.snapshots
mount -t btrfs -o subvol=@swap,$o_swap LABEL=system $BASE_DIR/.swap

if [ ! -f $BASE_DIR/.swap/swapfile ]; then
  # Create swapfile
  # https://wiki.archlinux.org/title/Btrfs#Swap_file
  # https://wiki.archlinux.org/title/Swap#Swap_file_creation
  # https://askubuntu.com/questions/1017309/fallocate-vs-dd-for-swapfile
  # OR use this method: https://btrfs.readthedocs.io/en/latest/Swapfile.html
  SWAP_SIZE=24096
  chattr +C /mnt/.swap
  dd if=/dev/zero of=$BASE_DIR/.swap/swapfile bs=1M count=$SWAP_SIZE status=progress
  chmod 0600 $BASE_DIR/.swap/swapfile
  mkswap -U clear $BASE_DIR/.swap/swapfile
fi
swapon $BASE_DIR/.swap/swapfile

mount --mkdir /dev/disk/by-partlabel/EFI /mnt/boot

btrfs subvolume list $BASE_DIR
ls $BASE_DIR
```

Install packages.

```sh
pacman -Sy --noconfirm archlinux-keyring

PACKAGES=(
  # arch
  base
  base-devel
  linux
  linux-firmware
  linux-headers
  # vendor
  intel-ucode
  # filesystem
  btrfs-progs
  # net
  iwd
  dhcpcd
  networkmanager
  # utility
  vim
  git
  curl
  openssh
  sudo
  gptfdisk
  btop
)

pacstrap /mnt ${PACKAGES[@]}
```

Generate `/etc/fstab`.

```sh
BASE_DIR="/mnt"

genfstab -L -p /mnt >> $BASE_DIR/etc/fstab
sed -i s/LABEL=system\s\/boot/\/dev\/disk\/by\-partlabel\/EFI/g /mnt/etc/fstab
cat "LABEL=system        /.swap/swapfile    swap        defaults,space_cache,ssd,discard=async,compress=no,subvol=/@swap 0 0" >> $BASE_DIR/etc/fstab

cat $BASE_DIR/etc/fstab
```

Create initial ramdisk environment.

```sh
BASE_DIR="/mnt"

# vconsole
# https://wiki.archlinux.org/title/Linux_console/Keyboard_configuration

cat > $BASE_DIR/etc/vconsole.conf <<EOF
KEYMAP=us
keycode 1 = Caps_Lock
keycode 58 = Escape
EOF

# mkinitcpio
# https://wiki.archlinux.org/title/mkinitcpio

SCRIPT=/root/setup-mkinitcpio.sh
cat > $BASE_DIR$SCRIPT <<EOF
sed -i 's/^HOOKS/HOOKS=(base systemd autodetect keyboard sd-vconsole modconf block sd-encrypt resume filesystems fsck)/' /etc/mkinitcpio.conf

mkinitcpio -p linux
EOF

chmod +x $BASE_DIR$SCRIPT

arch-chroot /mnt $SCRIPT

rm $BASE_DIR$SCRIPT

cat $BASE_DIR/etc/mkinitcpio.conf
```

Setup bootloader.

```sh
BASE_DIR="/mnt"
EFI_MOUNT_DIR="$BASE_DIR/boot"
CONF_DIR="$EFI_MOUNT_DIR/EFI/refind"

run_in_system() {
  arch-chroot /mnt /bin/bash -c "$@"
}

pacstrap /mnt refind

# install refind
refind-install

# install drivers
mkdir -p $CONF_DIR/drivers_x64
DRIVER=btrfs_x64.efi
DRIVER_INSTALL_PATH=$CONF_DIR/drivers_x64/$DRIVER
if [ ! -f $DRIVER_INSTALL_PATH ]; then
  cp /usr/share/refind/drivers_x64/$DRIVER $DRIVER_INSTALL_PATH
fi

# get resume offset for swapfile
# https://wiki.archlinux.org/title/Power_management/Suspend_and_hibernate#Hibernation_into_swap_file_on_Btrfs
# https://github.com/osandov/osandov-linux/blob/master/scripts/btrfs_map_physical.c
MAP_PHYSICAL_C=/usr/local/bin/btrfs_map_physical.c
MAP_PHYSICAL=/usr/local/bin/btrfs_map_physical
curl -sLJo $BASE_DIR$MAP_PHYSICAL_C https://raw.githubusercontent.com/osandov/osandov-linux/master/scripts/btrfs_map_physical.c
run_in_system "gcc -O2 -o $MAP_PHYSICAL $MAP_PHYSICAL_C"
rm $BASE_DIR$MAP_PHYSICAL_C

# theme setup
THEME_NAME=refind-theme-regular
if [ ! -d "$CONF_DIR/themes/$THEME_NAME" ]; then
  mkdir -p $CONF_DIR/themes
  run_in_system "git clone https://github.com/bobafetthotmail/refind-theme-regular.git /boot/EFI/refind/themes/$THEME_NAME"
  rm -rf $CONF_DIR/themes/$THEME_NAME/{src,.git}
  rm $CONF_DIR/themes/$THEME_NAME/install.sh
fi

BACKUP_CONF_PATH="$CONF_DIR/refind.conf.bak"
if [ ! -f "$BACKUP_CONF_PATH" ]; then
  mv $CONF_DIR/refind.conf $BACKUP_CONF_PATH
fi

DRIVE="/dev/nvme0n1"
DRIVE_SYSTEM_PARTITION="/dev/nvme0n1p2"
DRIVE_PART_UUID="$(blkid $DRIVE_SYSTEM_PARTITION | cut -d " " -f2 | cut -d '=' -f2 | sed 's/\"//g')"
RESUME_OFFSET="$(echo $(/mnt/usr/local/bin/btrfs_map_physical /mnt/.swap/swapfile | head -n2 | tail -n1 | awk '{print $6}') / $(run_in_system "getconf PAGESIZE") | bc)"
cat > $CONF_DIR/refind.conf <<EOF
menuentry "Arch Linux" {
    icon     /EFI/refind/themes/$THEME_NAME/icons/128-48/os_arch.png
    volume   "Arch Linux"
    loader   /vmlinuz-linux
    initrd   /initramfs-linux.img
    options  "rd.luks.name=$DRIVE_PART_UUID=system root=/dev/mapper/system rootflags=subvol=@root resume=/dev/mapper/system resume_offset=$RESUME_OFFSET rw quiet nmi_watchdog=0 add_efi_memmap initrd=/intel-ucode.img"
    submenuentry "Boot using fallback initramfs" {
        initrd /boot/initramfs-linux-fallback.img
    }
}

timeout         5
include         themes/$THEME_NAME/theme.conf
also_scan_dirs  +,@root/
resolution     1920 1080
EOF

cat $CONF_DIR/refind.conf
```

Setup system.

```sh
BASE_DIR="/mnt"

PASSWORD_STATUS=$(./run-chrooted.sh passwd -S root)
if echo $PASSWORD_STATUS | grep -q "NP"; then
  echo "Set root password:"
  ./run-chrooted.sh passwd
fi

TIMEZONE=${TZ:-America/Denver}

echo "en_US.UTF-8 UTF-8" > $BASE_DIR/etc/locale.gen
./run-chrooted.sh locale-gen
echo LANG=en_US.UTF-8 > $BASE_DIR/etc/locale.conf
ln -nsf $BASE_DIR/usr/share/zoneinfo/$TIMEZONE $BASE_DIR/etc/localtime
./run-chrooted.sh hwclock --systohc --utc
```

- `echo "myhostname" > /etc/hostname`
- uncomment locale in `/etc/locale.gen`
- exec `locale-gen && echo LANG=en_US.UTF-8 > /etc/locale.conf && export LANG=en_US.UTF-8`
- `ln -s /usr/share/zoneinfo/America/New_York /etc/localtime`
- use UTC for hwclock `hwclock --systohc --utc`

---
title: <i class="fa-solid fa-star-of-life fa-fw"></i>&nbsp;Introduction & Initial Setup
menu-title: <i class="fa-solid fa-star-of-life fa-fw"></i>&nbsp;Start
menu-mobile: Introduction & initial Setup
---

# General information about GPSLogger & this manual

## Introduction

> Initially I have started with this project in the year 2009, my first daughter was just born, and I anticipated that
> quite soon I would have to answer questions like (when we are on a walk): _What distance we have already walked?_ or
> _How long this going to take, till we are back at our home?_
> 
> In the meantime she is driving with her own car, and don't care what's her old father yelling from the backyard...
> 
> Over this period of time I have added features & functionalities I personally found valuable for my outdoor sports
> activities (like hiking or cycling) - or my indoor training (pain cave) - others have been added on request of users.
> 
> One of my main uses cases in the past few years, is to use my mobile device as bike computer replacement since I do
> not see any value spending ~600,-€ (or more) for a decent device, when I already have a powerful hardware with me.
> My phone has a large display, it has a decent CPU & memory, it can be online, I have a handle bar mount, and I am
> in the lucky position that I can write the code myself <i class="fa-solid fa-face-grin-squint-tears"></i>.
> 
> I don't have a single clue how many bike computers I could have bought, if I had just worked in my regular job,
> instead of investing my time into the development of GPSLogger.

## Used Symbols

| <span class="material-icons fa-fw">info</span> | Information |
| <i class="fa-solid fa-warning fa-fw"></i> | Warning \| Caution \| Danger |
| <i class="fa-solid fa-toggle-on fa-fw"></i> | Indicates a setting/option in the application settings has to be enabled |
| <i class="fa-solid fa-toggle-off fa-fw"></i> | Indicates a setting/option in the application settings has to be disabled |
| <i class="fa-solid fa-square-check fa-fw"> | Indicates a setting/option in the application settings has to be checked |
| <i class="fa-solid fa-square fa-fw"></i> | Indicates a setting/option in the application settings has to be un-checked |
| ABC > XYZ | In the application settings/section with the name **_ABC_** select item/section/setting **_XYZ_** |

# Initial Setup

- [x] do A
- [ ] do B
- [ ] do C

<span class="shot">![shot1](/assets/img/gpsl/Screenshot_1642147035_50.png)</span>
<span class="shot">![shot1](/assets/img/gpsl/Screenshot_1642147060_50.png)</span>
<span class="shot">![shot1](/assets/img/gpsl/Screenshot_1642147087_50.png)</span>

## Requested Permissions
### Location (& Bluetooth) related
- ACCESS_COARSE_LOCATION
- ACCESS_FINE_LOCATION
- ACCESS_BACKGROUND_LOCATION
- ACCESS_LOCATION_EXTRA_COMMANDS

### Connectivity related
- INTERNET
- ACCESS_WIFI_STATE
- ACCESS_NETWORK_STATE

### GUI related
- WAKE_LOCK
- VIBRATE

### File System related
- WRITE_EXTERNAL_STORAGE
- READ_EXTERNAL_STORAGE

### Sending eMail related
- GET_ACCOUNTS
- USE_CREDENTIALS

### Background/Service/functional related
- RECEIVE_BOOT_COMPLETED
- FOREGROUND_SERVICE
- REQUEST_IGNORE_BATTERY_OPTIMIZATIONS

### External Sensor / BluetoothLE Beacon Scanner related
- BLUETOOTH
- BLUETOOTH_ADMIN

### Other
- ANSWER_PHONE_CALLS

for Di2RemoteControl ONLY

## Registered Weblinks {#reg-weblinks}

Support for direct download of *.map files (zips) from openandromaps.org
- download.openandromaps.org
- ftp.gwdg.de

## Wizards

### <i class="fa-brands fa-bluetooth"></i> BTLE Beacon Scanner <i class="fa-solid fa-shield-virus"></i>

see [Indoor Equipment - Treadmill](../7100-indoor/#-treadmill)

### 🏃 Treadmill

see [Indoor Equipment - Treadmill](../7100-indoor/#-treadmill)

### 🚣 Rowing Machine

see [Indoor Equipment - Rowing Machine](../7100-indoor/#-rowing-machine)

### <i class="fa-solid fa-gears"></i> Shimano Di2 Setup

see [Shimano Di2 Support](../7200-di2/)

## 02

<span class="shot">![disable-battery-optimization](/assets/img/gpsl/backg001.png)</span>

<span class="shot">![shot1](/assets/img/gpsl/Screenshot_1642148288_50.png)</span>
<span class="shot">![shot1](/assets/img/gpsl/Screenshot_1642148295_50.png)</span>

## Why the app is free - what's my motivation - There has to be a catch! {#motivation}

Probably you are right - Google started a long time ago with the _don't be evil_ slogan... but that changed IMHO quite 
a while ago and hopefully in the meantime we are all aware, that we are paying for all the _free_ Google services with
our privacy.

> **I, as developer take your privacy extremely seriously, GPSLogger II is not collecting any data from you (not in the
> background nor in the foreground). Of course the app logs your location and save this data on your device.**
>
> **YOU ARE THE ONLY ONE who has the full control what will happen with this data. Of course when you make use of the
> export/share functionality this data will be exposed to 3'rd party - but that's always YOUR decision.**

[See also the formal Privacy Policy of GPSLogger II](https://www.emacberry.com/pp/pp2.html) - Please note, that the only
reason why _Personal data_ is accessed by the app is in order to be able to send eMails (in your name) for supporting
features like _EmergencyAlerts_, _HappyPartner_ or _(SimplifiedExportVia)Email_.

### My motivation

I started my career in the 90' as developer - over time I moved into a management role. Developing is really just a
hobby for me, and it's that _back to your roots_ feeling that drives me. Also, I don't want to lose the connection to
the craftsmanship of software development & architecture. So I do earn my money with something different from trying to
sell your data, and I do not rely on a large user base. For me, it's enough when some people around the globe find
GPSLogger useful. And as already stated - _I am happy to give something back to the world (since life have been very
generous to me)_.
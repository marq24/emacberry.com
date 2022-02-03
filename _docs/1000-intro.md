---
title: <i class="fa-solid fa-star-of-life fa-fw"></i>&nbsp;Introduction & Initial Setup
menu-title: <i class="fa-solid fa-star-of-life fa-fw"></i>&nbsp;Setup
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

---

# Download

## via Google Play

[![GooglePlay](/assets/img/google-play-badge_en.png)](https://play.google.com/store/apps/details?id=com.emacberry.gpslogger)

[https://play.google.com/store/apps/details?id=com.emacberry.gpslogger](https://play.google.com/store/apps/details?id=com.emacberry.gpslogger)

## Download via F-Droid

**You need to add a custom repository in order to be able to install GPSLogger II** All details can be found in the
[short F-Droid Tutorial](/gpsl/docs/8910-fdroid.html) - Thanks Johann!

![F-Droid appstore](/assets/img/get_it_on_f-droid.png)

https://f-droid.org/packages/com.emacberry.gpslogger

## via amazon appstore

**Recommended for BlackBerry 10 Users (yes the app will still work on your BlackBerry 10 device)!**
[![amazon appstore](/assets/img/amazon-appstore-badge-en-black.png)](https://www.amazon.com/gp/product/B00L9GLGGQ)

[https://www.amazon.com/gp/product/B00L9GLGGQ](https://www.amazon.com/gp/product/B00L9GLGGQ)

# Initial Setup

When you install the app and launch it for the first time you will be presented with a welcome dialog, containing some
general information and the link to the [Privacy Policy of the application](https://www.emacberry.com/pp/pp2.html).
Please read it carefully, but since this _legal stuff_ can be a bit difficult to read, you might find [How GPSLogger II
will process your data](./9992-privacy.html#dataprocessing) a bit easier to understand.

<span class="shot">![welcome](/assets/img/gpsl/welcome.png)</span>
The bottom line is - location information **is** sensitive data and you as the user having the full control what will be
happening with this data. Of course, you are able to share recordings or live locations via the app, but all these
additional features requires your consent, and you need to actively configure/enable them. So **you are in full
control** what is happening - the app is a tool in your hands - use it wisely.

> I do eran my money with something completely different - GPSLogger II is just a hobby, and I am happy to provide the
> app for free. Even this website here does not use any tracking or even cookies.

In the case of an update of GPSLogger (and there have been quite some updates in the past), the app will start with the
latest change log information which always includes the option to read the Privacy Policy.

The ChangeLog (which is quite long now) can be also accessed any time later from the application settings via the _App
Changelog_. (I'll guess I have to add the log also to this manual at some day)<br class="shot-end"/>

Once you felt the _warm welcome_ the next thing is, that the app is going to ask you for the core permissions the app is
going to need in order to work as designed.

<span class="shot">![permission-request](/assets/img/gpsl/permission-request.png)</span>
Asking for the permission to read the device location is the **only** core permission the app actually needs - If you
feel uncomfortable with allowing the app to access the device location, you **don't have to** - but in such a case you
don't have to be surprised that the app does not provide great value.

You can deny the request for the start - but you should grant the app the permission to access the device location later
via the application permission settings of your Android OS.

You find all details about why certain permissions are requested in the [Requested Permissions Section](#permissions).
<br class="shot-end"/>

The last step of the initial setup is the Setup-Wizard selection dialog. You might haven't realized it yet, but
GPSLogger have many options and is highly configurable. The downside of this flexibility is, that it can be quite
complicated for a new user to find the right place where certain features have to be enabled or configured.

<span class="shot">![wizards](/assets/img/gpsl/wizzard.png)</span>

In order to address this challenge the app have current four different wizards guiding you though the setup process of a
certain functionality. Probably you have read/heard somewhere about the app, and you want to use it e.g. for your
Shimano Di2 Shifting - or something completely different - you want to use the app to scan BluetoothLE Beacons in your
environment.

So you can select one of the four available wizards, or simply select _No Thanks, not now..._ (you can start the wizards
any time later from the  <i class="fa-solid fa-ellipsis-vertical"></i>  main menu).

**[<i class="fa-brands fa-bluetooth fa-fw"></i> BTLE Beacon Scanner...](./4000-btlescanner.html)**<br/>
The Beacon Scanner constantly looking for BluetoothLowEnergy Beacons in your environment and is able to record the found
beacons (you need to start the record process).

**[<i class="fa-solid fa-person-running fa-fw"></i> Treadmill Setup...](./3700-treadmill.html)**<br/>
If you own a Treadmill supporting the Bluetooth FitnessMachineStandard you can simulate and record any outdoor run with
GPSLogger.

**[<span class='material-icons fa-fw' style='width: 1.042em;'>rowing</span> Rowing Machine Setup...](./3800-rowing.html)**<br/>
If your Rowing Machine supporting the Bluetooth FitnessMachineStandard you can simulate and record different (currently
hard coded) outdoor rowing sessions.

**[<i class="fa-solid fa-gears fa-fw"></i> Shimano Di2 Setup...](./3600-di2.html)**<br/>
If you own a Wi-Fi module (EW-WU101 or EW-WU111) for your Di2, you can connect GPSLogger with your shifting system and
remote control your device from your left & right shifting levers. 
<br class="shot-end"/>

## <span class="material-icons">info</span> Staring GPSLogger for the first time - on Android 7 (or later)
The Android OS have different possibilities to extend the battery life of your
device - one of these possibilities is to restrict the ability to allow apps to make use of the
running-as-background-service capabilities. Such a restriction is counterproductive when using GPSLogger for recording.

<span class="shot">![disable-battery-optimization](/assets/img/gpsl/backg001.png)</span>
<span class="shot">![os-info-battery-optimization](/assets/img/gpsl/backg002.png)</span>
So the app is requesting you to **disable the OS battery optimization for GPSLogger** in multiple ways. For details see
the FAQ: [How to disable OS battery optimization](./9990-faq.html#how2-battery-optimization).

Details about this core feature can be found in
the [Running as Android-Background Service Section](./1100-data.html#service).
<br class="shot-end"/>

# Information about requested Application Permissions {#permissions}

To use the _core functionality_ of GPSLogger (recording the GPS location of your device), only one single permission is
required: **ACCESS_FINE_LOCATION**. All the other permissions listed below are only required if you make use of certain
additional functionality & feature of the application. If you don't want to use the feature you don't have to grant the
corresponding permission.

## Location (& Bluetooth) related

- **ACCESS_COARSE_LOCATION**
- **ACCESS_FINE_LOCATION**
- **ACCESS_LOCATION_EXTRA_COMMANDS**

GPSLogger II stores this location data only locally (on your device) and uses this data for local displaying purpose
exclusively. The data will not be processed in any way further or even processed by backend systems (servers). The
recorded data only leave your device when you trigger an export. In any case, you remain in control of whom you hand
over this exported data to.

If you want to share your location with third parties via the app, you have to set this up explicitly in the app
settings.

> One personal note concerning location permission requests when using only Bluetooth (Treadmill or Rowing Machine) - As
> soon as an app want to establish a connection to another Bluetooth device the requesting app needs the permission to
> access the device location. This does not sound very logical, but it is what it is.   

- **ACCESS_BACKGROUND_LOCATION**

To ensure a smooth recording of your location history (and the subsequent display in the app), please allow GPSLogger II
to track your location all the time (even when running in the background).

GPSLogger II will use location in the background to show you your activities (walks, runs or bike rides) on a map.

You can recognize via a fixed (permanent) notification that the  'background location tracking service' is in use. It is
therefore always transparent for you when the application has access to your location and record data (if you have
requested to do so).

The recorded location data remain on your device and is not processed any further.

## Connectivity related

- **INTERNET**
- **ACCESS_WIFI_STATE**
- **ACCESS_NETWORK_STATE**

To be able to download any data (like online map information) the app needs to be able to access the internet - if you
do not use any of the online features (the app is designed to work strictly OFFLINE), you do not have to grant these
permissions. Accessing Wi-Fi & Network state is used in order to detect, if the app could establish an online
connection and might use a fallback if the device is currently offline.

## GUI related

- **WAKE_LOCK**
- **VIBRATE**

When recording data in the background the app might be configured to notify you in case of certain events - in order to
catch your attention the app might **wake up** from locked state and/or **vibrate**.

## File System related

- **WRITE_EXTERNAL_STORAGE**
- **READ_EXTERNAL_STORAGE**

When you want to be able to create a backup of your data & settings (that would remain on your device even when
uninstalling the application), the app need the permission to WRITE and READ from the external storage.

This also applies when you want to export some data/recorded paths. Details about the export functionality and more
details about external storages and the need for the READ/WRITE_EXTERNAL_STORAGE permission can be found in the [Export
& eMail Section](./5000-export.html#storage).

## Sending eMail related

- **GET_ACCOUNTS**
- **USE_CREDENTIALS**

Some GPSLogger features allowing to send eMails to recipients you have specified in the application settings. The
configuration of a secure SMTP connection can be quite complicated (depending on from your eMail provider). In order to
allow the app to make use of installed email accounts on your device (e.g. your Google-Account) these both permissions
are required. This will be only used to simplify the email account SMTP Setup process.

## Background/Service/functional related

- **RECEIVE_BOOT_COMPLETED**
- **FOREGROUND_SERVICE**
- **REQUEST_IGNORE_BATTERY_OPTIMIZATIONS**

The permissions FOREGROUND_SERVICE & REQUEST_IGNORE_BATTERY_OPTIMIZATIONS are used in order to give the application
background service to do its job without being paused/terminated by the Android OS. The RECEIVE_BOOT_COMPLETED is only
required, when you want to enable the autostart options of the application.

## External Sensor / BluetoothLE Beacon Scanner related

- **BLUETOOTH**
- **BLUETOOTH_CONNECT**
- **BLUETOOTH_ADMIN**

When you want to connect any [External Sensors](./3000-sensors.html) or want to use the build in [BluetoothLowEnergy Beacon
Scanner](./4000-btlescanner.html) the app requires the permission to access your Bluetooth hardware. The connect and/or
admin right is used in order to restart bluetooth on your device (turn it off & on again). 

## Other

- **ANSWER_PHONE_CALLS**

When you have connected your Shimano Di2 with GPSLogger, then you can configure one of the D-Fly Channels to pick up
your phone (when a call arrives). Obviously this specific permission is **only** related to this specific function and
**obviously** only used when you want to do so.

# Registered Weblinks {#reg-weblinks}

> need revision

Support for direct download of *.map files (zips) from openandromaps.org

- download.openandromaps.org
- ftp.gwdg.de

---

# Why the app is free - what's my motivation - There has to be a catch! {#motivation}

Probably you are right - Google started a long time ago with the _don't be evil_ slogan... but that changed IMHO quite a
while ago and hopefully in the meantime we are all aware, that we are paying for all the _free_ Google services with our
privacy.

> **I, as developer take your privacy extremely seriously, GPSLogger II is not collecting any data from you (not in the
> background nor in the foreground). Of course the app logs your location and save this data on your device.**
>
> **YOU ARE THE ONLY ONE who has the full control what will happen with this data. Of course when you make use of the
> export/share functionality this data will be exposed to 3'rd party - but that's always YOUR decision.**

[See also the formal Privacy Policy of GPSLogger II](https://www.emacberry.com/pp/pp2.html) - Please note, that the only
reason why _Personal data_ is accessed by the app is in order to be able to send eMails (in your name) for supporting
features like _EmergencyAlerts_, _HappyPartner_ or _(SimplifiedExportVia)Email_.

## My motivation

> I started my career in the 90' as developer - over time I moved into a management role. Software-Development is really
> just a hobby for me, and it's that _back to your roots_ feeling that drives me. Also, I don't want to lose the
> connection to the craftsmanship of software development & architecture. So I do earn my money with something different
> from trying to sell your data, and I do not rely on a large user base. For me, it's enough when some people around the
> globe find GPSLogger useful. And as already stated - _I am happy to give something back to the world (since life have
> been very generous to me)_.
>
> Just a last remark on all this. I am probably my most loyal heavy user - if you are interested, I have briefly
> described my main use cases on [the main app page of GPSLogger](/gpslogger.html#myusage).
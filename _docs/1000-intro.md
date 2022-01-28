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
| <i class="fa-solid fa-hand-point-up fa-fw"></i> | Hint / Tip |
| <i class="fa-solid fa-warning fa-fw"></i> | Warning \| Caution \| Danger |
| <i class="fa-solid fa-toggle-on fa-fw"></i> | Indicates a setting/option in the application settings has to be enabled |
| <i class="fa-solid fa-toggle-off fa-fw"></i> | Indicates a setting/option in the application settings has to be disabled |
| <i class="fa-solid fa-square-check fa-fw"> | Indicates a setting/option in the application settings has to be checked |
| <i class="fa-solid fa-square fa-fw"></i> | Indicates a setting/option in the application settings has to be un-checked |
| <i class="fa-solid fa-square-pen fa-fw"> | Indicated a setting/option in the application settings that requires a number or text input |
| ABC > XYZ | In the application settings/section with the name **_ABC_** select item/section/setting **_XYZ_** |

## Use of metric system for Units
This manual use the metric system in all descriptive texts and examples. The app supporting different unit formats like:
_Metric_, _Imperial_ (feet & yard) or _Nautical_ and will adopt its behavior to your selection.  

---

# Initial Setup

When you install the app and launch it for the first time you will be presented with a welcome dialog, containing some
general information and the link to the [Privacy Policy of the application](https://www.emacberry.com/pp/pp2.html).
Please read it carefully, but since this _legal stuff_ can be a bit difficult to read, you might find [How GPSLogger II
will process your data](#dataprocessing) a bit easier to understand.

<span class="shot">![welcome](/assets/img/gpsl/welcome.png)</span>
The bottom line is - location information **is** sensitive data and you as the user having the full control what will be
happening with this data. Of course, you are able to share recordings or live locations via the app, but all these
additional features requires your consent, and you need to actively configure/enable them. So **you are in full
control** what is happening - the app is a tool in your hands - use it wisely.

> I do eran my money with something completely different - GPSLogger II is just a hobby, and I am happy to provide the
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

<span class="shot">![wizzards](/assets/img/gpsl/wizzard.png)</span>

In order to address this challenge the app have current four different wizards guiding you though the setup process of a
certain functionality. Probably you have read/heard somewhere about the app, and you want to use it e.g. for your
Shimano Di2 Shifting - or something completely different - you want to use the app to scan BluetoothLE Beacons in your
environment.

So you can select one of the four available wizards, or simply select _No Thanks, not now..._ (you can start the wizards
any time later from the  <i class="fa-solid fa-ellipsis-vertical"></i>  main menu).

**[<i class="fa-brands fa-bluetooth fa-fw"></i> BTLE Beacon Scanner...](../4000-btlescanner/)**<br/>
The Beacon Scanner constantly looking for BluetoothLowEnergy Beacons in your environment and is able to record the found
beacons (you need to start the record process).

**[<i class="fa-solid fa-person-running fa-fw"></i> Treadmill Setup...](../3700-treadmill/)**<br/>
If you own a Treadmill supporting the Bluetooth FitnessMachineStandard you can simulate and record any outdoor run with
GPSLogger.

**[<span class='material-icons fa-fw' style='width: 1.042em;'>rowing</span> Rowing Machine Setup...](../3800-rowing/)**<br/>
If your Rowing Machine supporting the Bluetooth FitnessMachineStandard you can simulate and record different (currently
hard coded) outdoor rowing sessions.

**[<i class="fa-solid fa-gears fa-fw"></i> Shimano Di2 Setup...](../3600-di2/)**<br/>
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
the FAQ: [How to disable OS battery optimization](../9999-faq/#how2-battery-optimization).

Details about this core feature can be found in
the [Running as Android-Background Service Section](../1100-data/#service).
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

GPSLogger II stores this location data only locally (on your device) and uses this data for local displaying purpose
exclusively. The data will not be processed in any way further or even processed by backend systems (servers). The
recorded data only leave your device when you trigger an export. In any case, you remain in control of whom you hand
over this exported data to.

If you want to share your location with third parties via the app, you have to set this up explicitly in the app
settings.

> One personal note concerning location permission requests when using only Bluetooth (Treadmill or Rowing Machine) - As
> soon as an app want to establish a connection to another Bluetooth device the requesting app needs the permission to
> access the device location. This does not sound very logical, but it is what it is.   

- **ACCESS_BACKGROUND_LOCATION**

To ensure a smooth recording of your location history (and the subsequent display in the app), please allow GPSLogger II
to track your location all the time (even when running in the background).

GPSLogger II will use location in the background to show you your activities (walks, runs or bike rides) on a map.

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

This also applies when you want to export some data/recorded paths. Details about the export functionality can be found
in the [Export & eMail Section](../5000-export/).

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
- **BLUETOOTH_ADMIN**

When you want to connect any [External Sensors](../3000-sensors/) or want to use the build in [BluetoothLowEnergy Beacon
Scanner](../4000-btlescanner/) the app requires the permission to access your Bluetooth hardware. The admin right is
used in order to restart bluetooth on your device (turn it off & on again). 

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

> **I, as developer take your privacy extremely seriously, GPSLogger II is not collecting any data from you (not in the
> background nor in the foreground). Of course the app logs your location and save this data on your device.**
>
> **YOU ARE THE ONLY ONE who has the full control what will happen with this data. Of course when you make use of the
> export/share functionality this data will be exposed to 3'rd party - but that's always YOUR decision.**

[See also the formal Privacy Policy of GPSLogger II](https://www.emacberry.com/pp/pp2.html) - Please note, that the only
reason why _Personal data_ is accessed by the app is in order to be able to send eMails (in your name) for supporting
features like _EmergencyAlerts_, _HappyPartner_ or _(SimplifiedExportVia)Email_.

## My motivation

> I started my career in the 90' as developer - over time I moved into a management role. Software-Development is really
> just a hobby for me, and it's that _back to your roots_ feeling that drives me. Also, I don't want to lose the
> connection to the craftsmanship of software development & architecture. So I do earn my money with something different
> from trying to sell your data, and I do not rely on a large user base. For me, it's enough when some people around the
> globe find GPSLogger useful. And as already stated - _I am happy to give something back to the world (since life have
> been very generous to me)_.

## My personal Use Cases 
### Primary
> Automated logging of my casual road bike cycle activities following a planed route (including multiple climbs) or just
> keep track of the commute sessions using:
- AutoSTART when I am leaving home/work
- Make use of the Barometer Sensor to capture realistic elevation profiles
- Recording additionally to my position my heartrate, cadence, left & right power and shifting events
- Using OFFLINE OpenStreetMap data (*.map files)
- Announcements of Turn Instructions and upcoming climbs
- Interval Text to speech announcements for total distance, total time, sector time, average speed and remaining
  distance and climb-meters every 5 km 
- Automatically switch to ClimbView when approaching a climb on my route
- Requesting "when and what's the next turn" via my Di2
- Enjoying real MSL elevation information
- Keep my wife happy by letting her know where I am (when my ride takes longer then 2 hours)
- Controlling via my Di2 shifting levers the playback of my music I am sometimes listening (on my bone conduction
  headphones) 
- In case of a closed/blocked street: using the detour functionality
- Intense usage of the _ShutUp_ function
- When I am cycling alone: capture BTLE Beacons
- AutoSTOP when arriving at home/work
- Text to Speech Summary
- AutoUpload to Strava

### Secondary
> Automated logging my local hiking activities - quickly change the profile to 'hiking' & enjoying functionalities:
- AutoSTART when I am leaving home
- Make use of the Barometer Sensor to capture realistic elevation profiles
- Using OFFLINE OpenStreetMap data (*.map files)
- Interval Text to speech announcements for sector time & average speed every kilometer
- When I am walking alone: capture BTLE Beacons
- AutoSTOP when I am arriving at home
- Text to Speech Summary
- AutoUpload to Strava
> From time to time I also use the navigation features when hiking

### Tertiary
> Manual Indoor-Run or Indoor-Rowing Sessions - quickly change to the corresponding profile and use:
- Simulate the run of any real-outdoor route
- Interval Text to speech announcements for sector time & average speed every kilometer
- Text to Speech Summary
- AutoUpload to Strava

### Quaternary
> Manual logging of flights (when it was possible to travel) or long travel by train or car (obviously also with a
> different profile) and enjoy:
- Make use of the Barometer Sensor to capture realistic elevation profiles
- Using OFFLINE OpenStreetMap data (*.map files)
- NO AutoUpload to Strava cause I am exeeding the maximum average speed

# How GPSLogger II will process your data? {#dataprocessing}

## Principle

I take the protection of your personal data **very seriously** and treat personal data with the utmost care,
confidentiality and in accordance with the legal data protection regulations and this data protection declaration.

## Processing operations

GPSLogger II processes personal data only if they are necessary for the app functions. The data will be saved on your
**mobile device only**.

## Transfer of data to third parties

When using the export options (KML, FIT, GPX or CSV), the location (and additional sensor) data will be stored in the
selected format on your local device only. Please use these export files wisely. When using the Emergency Alert
function, your current location (and path) will be transferred as eMail via the internet to the selected eMail
recipient. Please note, that eMails are in general imperceptible & read by 3'rd party. When using the Sharing Location
Information function, your current location will be transferred either as eMail via the internet to the selected eMail
recipient or will be sent vie the internet to the server URL you have specified. Please use with appropriate care. When
using the Share Path functionality, the complete path (date, location) will be transferred via the internet to
emacberry.com server and will be made available to the PUBLIC. Everyone that know the provided share URL (which contains
no encryption or key) can see this location data over the internet. When you share a path, there will be no connection
between you (the user) or the device used for the upload - so the upload does not contain any additional personalized
data. When using this functionality, the emacberry.com privacy policy applies.

[https://www.emacberry.com/pp/pp1.html](https://www.emacberry.com/pp/pp1.html)

When using the On the fly navigation/detour functionality, your current & target location will be transferred via the
internet to the openrouteservice.org server. When using the Openrouteservice, the openrouteservice.org privacy policy
applies.

[https://openrouteservice.org/privacy-policy/](https://openrouteservice.org/privacy-policy/)

When using the Import from Routing Server functionality, your current location will be transferred via the internet to
emacberry.com server in order to search for routes that have been created in the last 5min in your area. The sent
location data will not be stored on emacberry.com server and be only used for processing the request. When using the
Push-Route functionality from the https://route.emacberry.com website, the emacberry.com privacy policy applies.

[https://www.emacberry.com/pp/pp1.html](https://www.emacberry.com/pp/pp1.html)

When you update the list of available OpenMapData provides GPSLogger II will connect to emacberry.com server in order to
download the list of currently supported map providers. This update can be triggered manually, or it will be
automatically executed with every update of the application. The request will contain your device model, the os version
and app version and a user independent generated random id. This data will be used for internal statistics only. This is
the only price you pay. Your current ID: %s Generate a new random ID When using the OpenMapData functionality (basically
_the Map View_), the corresponding privacy policies of the selected map data providers applies. GPSLogger II will
request map tiles from the selected providers and this implies that this requests contain area information (BoundingBox)
which might be (but don't have to be) in relation to your location. When using the Upload to Strava function, the
location (and additional sensor) data is transferred via the internet to the Strava servers. When using Strava, the
Strava privacy policy applies.

[https://www.strava.com/legal/privacy](https://www.strava.com/legal/privacy)

## Right of revocation

By revoking the privacy policy of GPSLogger II, the app is not functional and therefore cannot be used. Deletion of your
personal data GPSLogger II stores your data exclusively on the mobile device. this data can be deleted by uninstalling
GPSLogger II. You must delete created backups or export files. This backup data can be found on the device in the 
_GPSLogger II_ folder of your Downloads.
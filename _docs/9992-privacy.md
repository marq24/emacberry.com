---
title: <i class="fa-solid fa-shield-blank"></i> Data Safety & Privacy Declaration
sub-title: Why Privacy Declaration at GooglePlay is what it is
menu-title: <i class="fa-solid fa-shield-blank fa-fw"></i></i>&nbsp;Data Safety & Privacy
---

# Principle {#dataprocessing}

> I take the protection of your personal data **very seriously** and treat personal data with the utmost care,
> confidentiality and in accordance with the legal data protection regulations and this data protection declaration.

## Processing operations

GPSLogger II processes personal data only if they are necessary for the app functions. The data will be saved on your
**mobile device only**.

# How credible is this statement?

> On the one side I claim as developer that I take your privacy as highest priority and that all data will be stored
> **only** on your device. On the other hand the _Data Safety declaration at GooglePlay_ list that location information
> (and more) will be collected and processed.
> 
> I totally understand that this raise concerns, and I would like to explain in detail the reasons why I have selected,
> what I have selected at Google's Data Safty declaration form. 
> 
> Just as reference - here is the currently GooglePlay Data safety declaration of GPSLogger II:
> 
> ![data-safety-as_shown_in_playstore](/assets/img/gpsl/pp-datasafety.png)

<!-- ## Data safety

### Collected data
Collected by this app from your device

#### <span class="material-icons">place</span> Location
Approximate location, Precise location

##### Data collected, and for what purpose

| <sub>Approximate location - Optional</sub> | <sub>Precise location - Optional</sub> |
| <sub>App functionality</sub> | <sub>App functionality</sub> |

#### <span class="material-icons">perm_device_information</span> Device or other identifiers
Device or other identifiers

##### Data collected, and for what purpose

| <sub>Device or other identifiers - Optional</sub> | 
| <sub>Analytics</sub> |

### Security practices
#### <span class="material-icons">https</span> Data is encrypted in transit
Your data is transferred over a secure connection

#### <span class="material-icons">delete</span> Data can be deleted by request
The developer provides a way for you to request that your data be deleted

### Privacy policy
https://emacberry.com/pp/ppGPSLApp.html

---
-->

# GPSLogger Data safety Declaration at Google Play explained

How does this declaration match with the statement, that GPSLogger will just record the location **only** on the device?

> taking a deep breath

**None of the points that are listed in the Data Safety Declaration at GooglePlay are relevant for the core use case of
GPSLogger**.

The problem is, we are dealing with Google here. They are analysing the code of your app for potential issues and once
it's flagged by a machine as suspicious the app will be removed from the store. Once that happened, the Developer gets
informed that _your app is not compliant with **something**_ and that you should **_fix it_** and submit your app again.

Here is the key problem, you're either dealing with bots/machines and/or low paid (and _as consequence_ low trained &
skilled) support staff. It's impossible to get qualified information what part of the app code has been identified as
_suspicious_.

In such a case you as developer has to guess, if there should be additional information provided to the users, if there
is anything in the application description that have to be adjusted or if it's really a functionality (code) that need
to be adjusted.

> I have a long history trying to communicate with the Google Developer support, and I don't want to waste my life any
> further with them. GooglePlay Store has a de facto monopole for Android app distribution and that there is no neutral
> control instance (that you can call in the case of a dispute) is IMHO a serious issue for us all. At the end Google is
> going to decide what apps will be available and which will not.

So the approach of the Data Safety Declaration of GPSLogger is, to be as open as possible. As soon as there is a tiny
little section in the app that might be detected as _data will be transferred from the app to a server to be processed_ - it
is better to declare it, instead of _hoping_ to have luck with _the monkey army_. Since once, you get caught, it's
impossible to get out of Google's claw. 

As quick example - when you use the TurnByTurn Navigation and you are leaving for what ever reason the initial planed
route. The app is able to find a detour for you. Therefore, the app is using your _current (precise) location_ and send
a request to openrouteservice.org in order to be able to guide you back to your initially planed route. Will
openrouteservice store your current location - NO - will it process your location data - well - YES it does. So it has
to be declared.

> For me, it's almost impossible to judged what _processing_ means in the legal context for Google. For sure, your
> location information have to be used in order to find a possible way from A to B. Your location will not be stored,
> processes or analyzed any further! (there is _no server side statistic_ for locations where people are missing turns
> most often).
> 
> So at the end of the day I decided, it will be better for my mental health to declare every possible external data
> processing to Google and try to explain here in the manual the reasons (functionalities) where and how this data will
> be processed.
> 
> **If you have any concerns - please let me know!**
> 
> So let's go through the list step by step 

# <span class="material-icons">perm_device_information</span> Collected data - Device or other identifiers

GPSLogger itself **does not have, store or use any internal (or external) ID at any point**[^1]. GPSLogger does not
collect any usage data by itself - nor I as Developer (with my best knowledge) have integrated any code, that does
collect any kind of data.

Have said all that, the app is running under the Android OS. So what ever the OS does (collect, transfer and/or process)
is beyond the control of GPSLogger. And before Google will remove the app, because the OS transfer in the name of my app
data, and I did not declare it, I feel much more comfortable by just declaring it - just in case.

# <span class="material-icons">place</span> Collected data - Approximate & Precise location

> Let's start with the fact that I don't understand, why an app that is processing _Precise location_ data can declare
> additionally, that _Approximate location_ data will be processed. My understanding is, that when I process
> _Precise location_ data this implies that I process also _Approximate location_ information. So at the end of the day
> I have selected both - simply because I don't have a single clue what's going on in Google's lawyers minds.
> 
> So the bottom line here is, **GPSLogger is processing always _Precise location_ data**. 

In general - the location information recorded by GPSLogger will remain on the device **ONLY**. Nevertheless, when you
use of the following functions, your location (does not have to be your current location) will leave your device and
**can** be processed by 3'rd party. In some cases it is impossible to say if the data will be processed or not - in some
cases you can be sure (e.g. when uploading to Strava).

## Live Location Sharing (including custom URL & TASKER)

When using the _Live Location Sharing_ function, your current location will be transferred either as eMail via the
internet to the selected eMail recipient or will be sent via the internet to the server URL you have specified.

**It's recommended to use encrypted eMail transfer and/or make use of HTTPS in the custom URL.**

[See also: <i class="fa-solid fa-location-arrow"></i> _Live Location Sharing_ manual section](./3200-liveshare.html)

## Emergency Alert

When using the Emergency Alert function, your current last known location (and path) will be transferred as eMail via
the internet to the selected eMail recipient. **It's recommended to use encrypted eMail transfer**.

[See also: <i class="fa-solid fa-truck-medical"></i> _Emergency Alert_ manual section](./3100-emergency.html)

## Exports (as eMail)

When using the export options (KML, FIT, GPX or CSV), the location (and additional sensor) data will be stored in the
selected format on your local device only. Once the data is stored in the file system it's beyond the control of the app
what will happen with this data - Please use these export files wisely.

When you make use of the eMail Export options the data will be directly send over the internet to your configured eMail
account. **It's recommended to use encrypted eMail transfer**.

[See also: <i class="fa-solid fa-floppy-disk"></i> _Export &_ <i class="fa-solid fa-envelope"></i> _eMail_ manual section](./5000-export.html)

<!-- When you update the list of available OpenMapData provides GPSLogger II will connect to emacberry.com server in
order to download the list of currently supported map providers. This update can be triggered manually, or it will be
automatically executed with every update of the application. The request will contain your device model, the os version
and app version. -->

## Routing Request / Online Navigation

When using the _On the fly_ navigation/detour functionality, your current & target location will be transferred via the
internet to the openrouteservice.org server. When using the Openrouteservice, the openrouteservice.org privacy policy
applies. [https://openrouteservice.org/privacy-policy/](https://openrouteservice.org/privacy-policy/)

[See also: <i class="fa-solid fa-route"></i> _Turn-by-Turn Navigation_ manual section](./2400-turnbyturn.html)

## Import from Routing Server, planed @ https://route.emacberry.com

When using the _Import from Routing Server_ functionality, your current location will be transferred via the internet to
emacberry.com server in order to search for routes that have been created in the last 5min in your area. The location
data that will be sent, will not be stored on emacberry.com server and be only used for processing the request. When
using the Push-Route functionality from the https://route.emacberry.com website, the emacberry.com privacy policy
applies. [https://www.emacberry.com/pp/pp1.html](https://www.emacberry.com/pp/pp1.html)

[See also: <i class="fa-solid fa-paper-plane"></i> _Plan a Route_ manual section](./2600-routeplan.html)

## Share Path via emacberry.com

When using the _Share Path_ functionality, the complete path (date, location) will be transferred via the internet to
emacberry.com server and will be made available to the PUBLIC. Everyone who knows the provided share URL can see this
location data over the internet. When you share a path, there will be no connection between you (the user) or the device
used for the upload - so the upload does not contain any additional personalized data. When using this functionality,
the emacberry.com privacy policy applies. [https://www.emacberry.com/pp/pp1.html](https://www.emacberry.com/pp/pp1.html)

[See also: <i class="fa-solid fa-share-nodes"></i> _Share your Path with the public_ manual section](./5100-share.html)

## Upload Activity to Strava

When using the _Upload to Strava_ function, the recorded location (and additional sensor) data is transferred via the
internet to the Strava servers. When using Strava, the Strava privacy policy
applies. [https://www.strava.com/legal/privacy](https://www.strava.com/legal/privacy)

[See also: <i class="fa-brands fa-strava"></i> _Strava Integration_ manual section](./5200-strava.html)

## Map Tile Data

When using the OpenMapData functionality (basically _the Map View_), the corresponding privacy policies of the selected
map data providers applies. GPSLogger II will request map tiles from the selected providers and this implies that this
requests contain area information (BoundingBox) which might be (but don't have to be) in relation to your location.

[See also: <i class="fa-solid fa-earth-europe"></i> _Open Map Data (OMD)_ manual section](./2200-openmapdata.html)

# <span class="material-icons">https</span> Data is encrypted in transit
For all communication that are under control of GPSLogger **HTTPS is always used** (this implies the communication to
emacberry.com, openrouteservice.org, strava.com or Google's O-Auth service).

Nevertheless, there are some areas in the application that allow to specify custom/own URLs and links. It's the users'
responsibility to take appropriate actions to protect his data. Specially: **If you make use of the [live share location
functionality via an own backend/URL](./3200-liveshare.html#customurl) it's STRONGLY recommended to use HTTPS URLs ONLY!**

# <span class="material-icons">delete</span> Security practices - Data can be deleted by request

There is only a single functionality where data will be stored at a different place that is not under the control of the
user by himself. This is the _Share via emacberry.com feature, where the user can upload a path to emacberry.com server
in order to share this path with the public. It's important to understand, that the data that is stored at emacberry.com
does **not contain any device or user identifier**, the only reference is a UUID that will be stored together with the
path locally on the device of the user. It's impossible to backtrace the origin of a path with just the UUID.

When you want to delete a previously shared path - simply use the build in _Remove Share from emacberry.com_ that is
accessible for every path within the PathManager.

[For more details about how to remove your data please see: <i class="fa-solid fa-share-nodes"></i> _Share your Path
with the public_ manual section](./5100-share.html#remove)

---

## Right of revocation

By revoking the privacy policy of GPSLogger II, the app is not functional and therefore cannot be used. Deletion of
your personal data GPSLogger II stores your data exclusively on the mobile device. this data can be deleted by
uninstalling GPSLogger II. You must delete created backups or export files. This backup data can be found on the
device in the _GPSLogger II_ folder of your Downloads.

---
[^1]: In the past the app has used a _random internal UUID_ - this ID has been removed with the update to v2.0.0.206
      (any existing UUID data has been deleted from the device during the update).
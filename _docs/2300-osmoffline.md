---
title: <i class="fa-solid fa-layer-group"></i> Offline OpenStreetMap Data
menu-title: <i class="fa-solid fa-layer-group fa-fw"></i>&nbsp;OpenStreetMap
---
>supported by [Mapsforge & VTM](http://mapsforge.org/)

# Overview
With the new build of GPSLogger II you will find a new "OpenMapData Provider" called **OpenStreetMap (Offline)** - you
will find it at the end of the map provider list. Once you have selected the OpenStreetMap Offline provider the new map
source is active... **but** you could/should configure it.

As always in GPSLogger II a new feature will bring some additional options via the Settings - for the OpenStreetMap
Offline maps you will find the new section **Offline OpenStreetMap Settings** which allows you to adjust the rendering
of the offline OpenStreetMap data... **but** before you will be able to use the full power of the new feature you will
**need** to download *.map data files **to your device first!**.

# OSM Mapsforge Format
There exist multiple different file formats to store OpenStreetMap map data (OSM XML, PBF Format, o5m, OSM JSON or
Level0L to name a few) - For various reasons these file types are not usable for mobile devices - The 
[Mapsforge 'map' format](http://www.mapsforge.org/) is the choice to use OSM data on a mobile device. Converting
the data is not an easy task - and even more important take some time to complete. I have spent the complete weekend to
load the OSM-Data for GERMANY in a PostgresSQL running on my notebook. Lucky enough there are different sources where
you can download converted (& additional enriched) *.map files for your mobile device. Cause of the file size this data
is not included in GPSLogger II - you need to download one or multiple *.map files to your device in order to use this
new feature of GPSLogger II.

At the following URL's you can download Mapsforge *.map files:
- [http://www.openandromaps.org/downloads](http://www.openandromaps.org/downloads)
  <br/>An excellent source for enriched OSM data - included altitudes - great for hiking or mountain-biking
 
- [http://download.mapsforge.org/](http://download.mapsforge.org/)

# Download *.map files with your Android device/browser
> Direct download link support for openandromaps *.map files in GPSLogger

## <span class="material-icons">info</span> Important if you use Android 11 (or higher)
I really love Google for all the changes that have been introduced with Android 11 (SDK 30). Not only that you are no
longer able to read/save data in the file system - also using your app with web-links have been massively limited. 
Even if I understand the reasons for these changes - it making things that has been convenient for the users some sort
of complicated.
> In order to be able to open download links from openandromaps with GPSLogger (using Android 11 or higher) you **need
> to enable the link URL's in the OS application Settings section**. (Open by default > Links to open in this app) So
> please enable/add:
- download.openandromaps.org
- ftp.gwdg.de
> 
> see [FAQ: Using Weblinks in Android 11](./9999-faq.html#weblinks-sdk30) for details

On your android device - open the following link
[https://www.openandromaps.org/downloads](https://www.openandromaps.org/downloads) **or** select one more specific
region from the list:
- [Europe](https://www.openandromaps.org/downloads/europe)
- [Deutschland](https://www.openandromaps.org/downloads/deutschland)
- [Canada](https://www.openandromaps.org/downloads/canada)
- [USA](https://www.openandromaps.org/downloads/usa)
- [Russia](https://www.openandromaps.org/downloads/russlan)
- [South & Middle America](https://www.openandromaps.org/downloads/sued-und-mittelamerika)
- [Australia, New Zealand, Oceania](https://www.openandromaps.org/downloads/australien-neuseeland-ozeanien)
- [Asia & Middle East](https://www.openandromaps.org/downloads/asia-middle-east)
- [Africa](https://www.openandromaps.org/downloads/africa)

Once you have opened one of the download section, scroll down to the region/country you would like to download and then
press the 'download button' with the text '**Karten/Map+Poi**'

Please note: You can download **multiple** *.map files - they will **be combined** in the app (as more *.map files you
install as more device memory is required - which could lead to app instabilities at the end).

Once you pressed the download button, your android device should present you with a dialog that allow you to select an
app, that should handle this download - and (if everything went right) GPSLogger II should be listed as app, that can
handle this ZIP-Download will be listed as well. Of curse select GPSLogger II to handle the download, and you are done!
(Of course download and processing will take a while - but be confident). You will be notified if the process is
completed.

Please note, that openandromaps site stated, that you need to install a Render Theme - **this can be ignored** - since
GPSLogger is already coming with two (build-in) themes.

IF your device does not show a dialog (to let you select the app that should process the download) after the
download-button on the openandromaps website, please see this
[FAQ: Troubleshoot opening openandromaps.org web links...](./9999-faq.html#openopenandro).

# Download *.map files elsewhere
You can of course download the *.map files on any other device (including your PC or Mac) - the Links are the same - but
you need to extract the maps manually and copy the files over to your andpriod device and place them at a location that
is readable for GPSLogger.

With the latest changes in Android 11 this process can get quite complicated - since there are only a few places where
you can store files on your device that are readable by applications like GPSLogger. This makes it almost impossible to
share *.map files across multiple applications.

## Map & Theme file location on your mobile device
> NEED TO be REVISED (cause of Android 11 restrictions)

By default, GPSLogger II create a subdirectory '**osm**' on your external Strorage (typically the internal emulated
SD-Card) and create two sub folders '**maps**' and '**themes**'.
_On BlackBerry10 this folder typically can be found here: '/misc/android' - when you access your BB10 via the
WiFi-Share function then the folder should be: /media/misc/android/osm_

### osm/maps
store your downloaded *.map files in this folder on your device - please be so kind and restart GPSLogger II in order
that the new maps will be included for rendering the map tiles

### osm/themes
If you want to use additional/external rendering themes store them in the 'osm/themes' folder - make sure that all
additional resources are also located in the appropriate sub folders.

By default, GPSLogger II includes the two themes from the **Elevate theme family** (v 4.1.7 10/07/17) created by Tobias
Kuehn
[see elevate-mountain-hike-theme @ openandromaps.org](http://www.openandromaps.org/en/legend/elevate-mountain-hike-theme)
- Elevate
- Elements

additionally, I have made a small modification called **Elevate-2x** where the size of the symbols just have been
adjusted (enlarged) - but this is a very small modification and all credits goes to Tobias Kuehn.
> The Elevate theme family is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported
> License: http://creativecommons.org/licenses/by-nc-sa/3.0/

### alternative folders
>not recommended on Android 11 and higher
 
As 'always' - GPSLogger II allows you to specify alternative locations for the 'maps' and 'themes' - to change the
folders you need to open the '**Offline OpenStreenMapping Settings**' from the applications Settings menu and press
the **Browse...** button and navigate to the folder that is containing your *.map files (or theme xml files). E.g. when
you have a removable SDCard it can make sense to download the map data via a PC/MAC and then copy the data over to the
SD-Card (instead of downloading the *.map files via your mobile device)

Typically, you found an external SDCard in the **/storage** folder of your device - where your external SD-Card have
some sort of cryptic name like 'BAC8-1217'

In contrast to the internal SDCard that will be accessible via **/sdcard** or **/storage/emulated/0/**
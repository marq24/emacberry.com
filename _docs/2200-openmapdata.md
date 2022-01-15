---
title: <i class="fa-solid fa-earth-europe"></i> Open Map Data (OMD)
menu-title: <i class="fa-solid fa-earth-europe"></i>&nbsp;Open Map Data
---
# Requirements
- App-Permission to access the internet
- App-Permission to access/store data on shared volume (pre Android 11)
- Online connection to be able to initially download map tiles from a Open Map Data providers that then later can be
  used offline
- Online connection to be able to download map vector data (from mapzen) and use this data later offline (this is not 
  recommended since you don't know exactly **if** you have already all required map data locally on your device)
- Online connection to download OpenStreetMap based map-files once and then use this maps later while offline with
  corresponding theme files. Of course, you can download the map files with any other device anc then copy this files
  to your android device to a place where GPSLogger have read access (this can be quite tricky on Android 11 and higher
  cause of the introduced file system restrictions

# Understanding using maps with GPSLogger
Understanding the different map sources that are available in GPSLogger II can be quite irritating at the start - as
excuse: map support have a long history (in the app) and a lot of changes have been implemented - which might make
things a bit more complicated - including all the different Settings/options.

**Rule of Thumb**: All map providers are handled inside the app/settings as **OpenMapData [OMD] Providers** - no matter
if the source is online or offline...

## I) Online Maps - Tile based
> multiple different map sources are available - including the possibility to specify your own tile server URL

By default, all maps requires an online connection - in order to download so called "map tiles" to you local device -
once a tile have been downloaded to the device it will be cached locally and will not be requested again. Please note
that each zoom level requires another map tile to be downloaded.

GPSLogger offers support for different provides of such online map tiles - this list will be frequently updated and will
be provided with every app update (currently used are Bing, esri, Mapbox and few others) - you can also configure your
own tile server provider when you know the URL's [e.g. to use Google maps ;-)]

## II) The Vector based Online Map
> a single online source (mapzen) - with a single/hardcoded (limited) theme

Since a couple of releases GPSLogger II also supports a online OpenStreetMap Vector based map data
provider \[in contrast to the map tiles (images)\] - this will reduce the amount of data that need to be transferred and
which is also zoom level independent. This vector data will be also cached locally, once it has been requested from the
online source.

## III) The Vector based Offline Map
> a single offline source (your map files) - with multiple & configurable themes

In order to make you totally independent of previously downloaded/cached map data GPSLogger II offers a third kind of
OpenMapData Provider - which is called **OpenStreetmap (Offline)**. The big difference between II) and III) is, that in
the offline variant you need to download & store *.map files (in the mapsforge format) e.g. from openandromaps.org on
your device.

[Please continue reading the OpenStreetMap Offline Section for more details](../2300-osmoffline/)

But some important things you should remember for offline map files:

- You need the map files in the format V4+ with multi-language support - map files can be downloaded e.g. directly from
  your mobile device from [openandromaps.org](https://www.openandromaps.org/) (open the download link with GPSLogger II
  in order to get everything automatically extracted at the right place)
- You need a valid RenderTheme in order to display Offline OSM-Map data (GPSLogger comes with at least two preinstalled
  ones)
- Your RenderTheme have to support the installed map version 
- You can have multiple map files in the selected osm maps folder - **but** as soon as there is a single invalid
  corrupted map file in this folder it could mess up the complete system

## Summary
There exist **three different types of map providers** in GPSLogger - there are the online map tile based providers
(this are images) - and two additional OpenSteetMap Vector data based ones (one for online use only & the other one for
strict offline usage).

- Basic Map configuration (no matter if online or offline) will be done in the application settings: **Open Map Data
  (online maps)**. In this section you can:
    - Select the **Map Data Provider** which will be used at each start of the application - so this is the DEFAULT-Map
      provider - You then can go through all available OMD providers in the main app by pressing that "map icon" - but
      again - to configure the provider (no matter if online or offline) at app start - this is the only place!
    - **Select your preferred Map Data Providers**: Since when you toggle though all the available OMD-Providers there
      will be for sure some, that you don't fine useful for your use case - so here you can select/deselect from ALL in
      the app available OMD providers the ones that you would like to use within the app (I personally have selected
      here only three, that I really use myself)
    - The other settings are hopefully more self explaining... (at least not that essential)
    
- All online Map types can be also used when you are "offline" - obviously only once the data is cached - In order to
  update map tiles in the cache or to free disk space you can/need to delete single cache files via the **Open Map
  Data (online maps)** settings section and there via the **Manage local Cache files...** list
- When you select the OpenMapData Provider **OpenStreetMap (Offiline)** then you need:
    - additional *.map files (V4.0)
    - a matching render theme (GPSLogger have two build in)
    - The complete configuration of the OMD Provider **OpenStreetMap (Offiline)** have to be done in the separate
      settings section called **OpenStreetMap Settings (offline map)**
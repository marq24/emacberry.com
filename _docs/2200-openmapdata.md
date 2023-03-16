---
title: <i class="fa-solid fa-earth-europe"></i> Open Map Data (OMD)
menu-title: <i class="fa-solid fa-earth-europe fa-fw"></i>&nbsp;Open Map Data
---
# Overview
Understanding the different map sources that are available in GPSLogger II can be quite irritating at the start - as
an excuse: map support has a long history (in the app) and a lot of changes have been implemented - which might make
things a bit more complicated - including all the different Settings/options.

**Rule of Thumb**: All map providers are handled inside the app/settings as **OpenMapData [OMD] Provider** - no matter
if the source is online or offline...

# Requirements
- App-Permission to access the internet
- App-Permission to access/store data on shared volume (pre Android 11)
- Online connection to be able to initially download map tiles from an Open Map Data provider that can later be
  used offline
- Online connection to be able to download map vector data (from mapzen) and use this data later offline (this is not 
  recommended since you don't know exactly **if** you have already all required map data locally on your device)
- Online connection to download OpenStreetMap based map-files once and then use these maps later while offline with
  corresponding theme files. Of course, you can download the map files with any other device and then copy these files
  to your android device to a place where GPSLogger has read access (this can be quite tricky on Android 11 and higher
  because of the introduced file system restrictions

# Supporting three different Map types {#map-types}
## I) Image-tile-based _Online_ Maps
> multiple different map sources are available - including the possibility to specify your own tile server URL

By default, all maps require an online connection - in order to download so-called "map tiles" to you local device -
once a tile has been downloaded to the device it will be cached locally and will not be requested again. Please note
that each zoom level requires another map tile to be downloaded.

GPSLogger offers support for different providers of such online map tiles - this list will be frequently updated and will
be checked with every app update (currently used are Bing, esri, Mapbox and few others) - you can also configure your
own tile server provider when you know the URL's \[e.g. to use Google Maps ;-)\]

## II) Vector-tile-based _Online_ Map
> a single online source (mapzen) - with a single/hardcoded (limited) theme

Since a couple of releases ago, GPSLogger II also supports an online OpenStreetMap Vector based map data
provider \[in contrast to the map tiles (images)\] - this will reduce the amount of data that needs to be transferred and
which is also zoom level independent. This vector data will also be cached locally, once it has been requested from the
online source.

## III) Vector-tile-based _Offline_ Map
> a single offline source (your *.map files) - with multiple & configurable themes

In order to make you totally independent of previously downloaded/cached map data GPSLogger II offers a third kind of
OpenMapData provider - which is called **OpenStreetMap (Offline)**. The big difference between II) and III) is, that in
the offline variant you need to download & store *.map files (in the mapsforge format) e.g. from openandromaps.org on
your device.

[Please continue reading the OpenStreetMap Offline Section for more details](./2300-osmoffline.html)

Some important things you should remember for offline *.map files:

- You need *.map files in the V4+ format (with multi-language support)
- *.map files can be downloaded directly with your mobile device e.g. from
  [openandromaps.org](https://www.openandromaps.org/) (open the download link with GPSLogger II in order to get
  everything automatically extracted in the right place)
- You need a valid RenderTheme in order to display Offline OSM-Map data (GPSLogger comes with at least two preinstalled
  ones)
- The selected RenderTheme has to support the installed *.map version 
- You can have multiple *.map files in the selected osm maps folder - **but** as soon as there is a **single invalid
  corrupted** *.map file in this folder, it could mess up the complete map system

# Summary
There are **three** different types of map providers in GPSLogger:
- they are the online map tile-based providers (the map tiles are basically just images)
- plus two additional OpenStreetMap vector-data-based ones - one for online use and the other one for strict offline usage

## More to know
- Basic Map configuration (no matter if online or offline) will be done in the application settings: **Open Map Data
  (online maps)**. In this section you can:
    - Select the **Map Data Provider** which will be used at each start of the application - so this is the DEFAULT-Map
      provider - You then can go through all available OMD providers in the main app by pressing that "map icon" - but
      again - to configure the provider (no matter if online or offline) at app start - this is the only place!
    - **Select your preferred Map Data Providers**: Since when you toggle though all the available OMD-Providers there
      will be for sure, some that you don't fine useful for your use case - so here you can select/deselect from ALL in
      the app available OMD providers the ones that you would like to use within the app (I personally have selected
      only three that I really use myself)
    - The other settings are hopefully more self explanitory... (at least not that essential)
- All online Map types can also be used when you are _offline_ - but obviously only once the required region data has
  been already downloaded and stored in the internal cache.
- To update map tiles in the cache or to free disk space you can/need to delete single cache files via the **Open Map
  Data (online maps)** settings section and there via the **Manage local Cache files...**
- When you select the OpenMapData Provider **OpenStreetMap (Offline)** then you need:
    - Additional *.map files (V4.0)
    - To select a matching render theme (GPSLogger has two built in)
    - The complete configuration of the OMD Provider 'OpenStreetMap (Offline)' has to be done in the separate
      settings section called **OpenStreetMap Settings (offline map)**

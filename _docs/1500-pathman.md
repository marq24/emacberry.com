---
title: <i class="fa-solid fa-folder"></i> PathManager
sub-title: Manage & access previously recorded path data (*.gpl files)
menu-title: <i class="fa-solid fa-folder fa-fw"></i>&nbsp;PathManager
---

> need revision

# Main-Menu
## Import

## Import from Routing Server

## Recreate all Thumbnails
The thumbnails shown in Pathmanager will be created based on the current active
[OpenMapDataProvider](./2200-openmapdata.html). If you frequently change the provider or yu have any other reason why you
do not like the current displayed thumbnails, you can start a background process to recreate all thumbnails of your
present paths.

Please have in mind, that this process will take a while to complete, since this requires that the app needs to load
each path data (at least latitude/longitude) in order to be able to create the map preview. Please also note that
depending on the used OMD-Provider

## Sync Data... {#sync}
Even if GPSLogger does not use a Database when you record a path, the information which paths you have stored on your
device (previously recorded or imported) is stored in a small database.

The Information displayed in PathManager is based on the database (not on the actual *.gpl files present in your
filesystem). This is cause of performance reasons (access to a database is much faster, then scanning the
filesystem each time).

By default, the app frequently synchronize the database with the filesystem in order to ensure that all your recorded
and imported path will be displayed in the PathManager. This synchronization is running in the background and this
implies that the result might be delayed. 

When ever you have the feeling that something is missing in PathManager, please make use of the **Sync Data** function,
in order to force a synchronization of the database with the filesystem.

## Filter
### Show all
### Show imported only
### Show recorded only

# Information shown per path
1. Thumbnail
2. Name
3. Date
4. Distance & Time
5. addon: imported (without TurnInfo) / has TurnInfo / has Note

# Instant Actions
1. <i class="fa-solid fa-circle-info fa-fw"></i> Path Details/Information 
2. <i class="fa-solid fa-circle-chevron-down fa-fw"></i> More...
3. <i class="fa-solid fa-diamond-turn-right fa-fw"></i> Load Navi(gation) path

# More-Menu
## <i class="fa-solid fa-circle-info fa-fw"></i> Path Details

## <i class="fa-solid fa-pencil fa-fw"></i> Edit Path Name

## <i class="fa-solid fa-pencil fa-fw"></i> Create Path Note

## <span class="material-icons fa-fw" style="width: 1.042em;">crop_original</span> Load path

## <i class="fa-solid fa-location-crosshairs fa-fw"></i> Loading Navi(gation) Path {#navipath}
1. Path containing turn-by-turn Information
2. Path that **does not contain** turn-by-turn Information

## <i class="fa-solid fa-location-crosshairs fa-fw"></i> Loading reverse Navi(gation) Path {#reversenavipath}

## <i class="fa-solid fa-share-from-square fa-fw"></i> Load Path into Background
This is quite a history function, from a time when no navigation was implemented - his will load the path and add it as
bold, gray line (only visible in the path- & map-view)

## <i class="fa-solid fa-share-nodes fa-fw"></i> Share via emacberry.com

## <i class="fa-solid fa-trash fa-fw"></i> Remove Share from emacberry.com

## <i class="fa-solid fa-share-nodes fa-fw"></i> Upload to Strava
only present if your account is connected
[see the <i class="fa-brands fa-strava fa-fw"></i> Strava Section of this manual](./5200-strava.html)

## <i class="fa-solid fa-floppy-disk fa-fw"></i> Export
When selecting the **Export** menu Item a sub-menu will appear that allow you to select one of:
- KML \[Keyhole Markup Language\]
- FIT \[Flexible and Interoperable Data Transfer\]
- GPX (v1.0) \[GPS exchange format\]
- GPX (v1.1) \[GPS exchange format\]
- CSV
- GPS NMEA-Sentences as TXT
- UUID 0x's as CSV
- JSON (GPSLogger2)
- Original GPSLogger II GPL

[Details about the different file formats can be found in the Export & eMail Section](./5000-export.html#formats)

## <i class="fa-solid fa-paper-plane fa-fw"></i> Email
When selecting the **Email** menu Item a sub-menu will appear that allow you to select one of:
- KML \[Keyhole Markup Language\]
- FIT \[Flexible and Interoperable Data Transfer\]
- GPX (v1.0) \[GPS exchange format\]
- GPX (v1.1) \[GPS exchange format\]
- UUID 0x's as CSV
- JSON (GPSLogger2)
- Original GPSLogger II GPL

[Details about the different file formats can be found in the Export & eMail Section](./5000-export.html#formats)

## <i class="fa-solid fa-arrow-rotate-right fa-fw"></i> Refresh Thumbnail & Data
Synchronize a single path with the information displayed in PathManager (including re-rendering the thumbnail) - see
also: [Sync Data...](#sync) 

## <i class="fa-solid fa-play fa-fw"></i> Simulate


## <i class="fa-solid fa-trash fa-fw"></i> Delete
The additional confirm dialog could be disabled in the Storage Settings > Confirm deletion <i class="fa-solid fa-toggle-off"></i> 

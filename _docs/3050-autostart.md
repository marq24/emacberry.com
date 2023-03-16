---
title: <i class="fa-solid fa-arrows-rotate"></i> Auto-START / Auto-STOP logging
menu-title: <i class="fa-solid fa-arrows-rotate fa-fw"></i>&nbsp;Auto START/STOP
---

# Overview

With GPSLogger II it is possible to automatically start and end logging based on the current location - The simple use
case is, that when I am leaving my home typically I don't want to start the recording manually every single time - and
the same applies when I am returning - GPSLogger 'knows' where I am and that I am at home - so then simply stop logging
because the chance that I want to log any further are IMHO very limited.

Another use case is a loaded navigation path - so there are reasons WHY you have loaded a path? - right? - Yes -
typically you want to follow this path, and it's IMHO pretty reasonable to record this as well - so once you load a
navigation path the start and end location of this navigation path will be also considered as auto START and END
locations.

The open question for you as user is, WHEN does logging start - and WHEN does logging end.

# Requirements

- Enabled & active GPS
- GPSLogger app must be started (can be sent into the background - you might like to activate the **AutoStart on boot**
  option)
- General Settings > AutoRecording & AutoPause > Auto-START Logging <i class="fa-solid fa-toggle-on"></i>
<br/>**or**<br/>
- General Settings > AutoRecording & AutoPause > Auto-STOP Logging <i class="fa-solid fa-toggle-on"></i>
- At least one location in the LocationManager that is configured for Auto-START/STOP
<br/>**or**<br/>
- A loaded navigation path
- **If** you have configured an Auto-START/STOP location GPSLogger will always launch it's
  [Background-Service](./1100-data.html#service) when you start the application and keep the service up and running until
  you terminate the app by selecting **EXIT** from the menu (or use the **EXIT** action of the sticky notification).

# Configure  AUTO-Start & AUTO-Stop Locations

The central point of add/enable AUTO-Logging locations is the 'LocationManager' - you can select any existing location
and press the <i class="fa-solid fa-circle-chevron-down"></i> **more** icon and then choose the 
**Use for AutoStart/Stop** from the context menu. Please note that once a location has been selected as an AutoStart/Stop
location you can not edit the name or even delete it from the LocationManager. If you want to alter or delete it you
have to remove it from the AutoStart/Stop Location list first. This can be simply done by selecting 'Remove for
AutoStart/Stop' from the context menu in the LocationManager.

I am fully aware, that adding new locations in the LocationManager itself can be quite a hassle - so with the new build
of GPSLogger II I have implemented some new/additional ways to add new locations:

1. Open any previously recorded path - navigate to the location you want to save via the regular navigation arrows -
   open the context menu and select **Save Location**
2. In the Map view you can touch & hold at any position of the map to open the context menu - here you have the option
   to **add a new Location** - that can then be accessed from the LocationManager
3. Open the GoogleMaps application - place a marker "anywhere" by tap and hold at the position till a marker appears -
   by tapping again on the marker itself some details for this marker will be shown - including some actions like 
   _save_, _label_, _download_ or _share_ - select the **share** action and from the list of available
   apps select GPSLogger II - after this is done it takes a short while (you need to be online btw) and the
   LocationManager should list the new location within GPSLogger II.

# Theory of operation

Once enabled in the General-Settings-Section the AUTO Start & AUTO Stop locations will be rendered with different
colored circles on the map screens where each circle has a certain meaning:

<span class="shot">![auto-start-stop-ranges](/assets/img/gpsl/auto-start-stop-ranges.png)</span>

- The RED-colored circle (20 m radius) is the AUTO-STOP cycle - as soon as you are in the red circle the logging (if it's
  running) will be stopped. Please note that there are some additional restrictions for the auto stop logging: 
  a) when you are auto logging a navigation path, then the logging distance has to be at least 75% of the navigation path 
  b) when you make use of a AutoStart/Log location the logging distance has to be at least 1 km.

- The BLUE-colored circle (15 m radius) is the initial trigger of the AUTO-START process - the logging will **only**
  automatically start when you are in the blue cycle. In other words you need to be inside the blue circle in order
  that the auto start logging code for this location will be activated.

- The GREEN-colored circle (50 m radius) is the AUTO-Start range - once you are outside the green cycle (and this
  location has been activated by being in the blue circle before) the recording will be automatically started.
<br class="shot-end"/>

## So to sum it up

1. Be in range of the blue circle (activate)
2. Move out of the green circle to start logging
3. Entering the red circle (of any configured auto start/stop location) to stop logging.

> Personally I additionally make use of the start logging & stop logging event Audio Notifications to be 100% sure that
> my cycling tours will be automatically recorded as soon as I leave my home or work.
> [see Audio Notifications](./3010-audioalerts.html#events) 

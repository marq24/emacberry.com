---
title: <i class="fa-solid fa-mobile-screen-button"></i> User Interface & Views
menu-title: <i class="fa-solid fa-mobile-screen-button fa-fw"></i>&nbsp;GUI & Views
menu-mobile: GUI & Views
---
# GUI - Graphical User Interface
The main application screen consist of:
- The ActionBar including the main menu
- The StatusBar (can be disabled)
- The Main View(s)
- The NavigationBar (if a path is loaded)

<span class="shot">![shot1](/assets/img/gpsl/Screenshot_1642149089_50.png)</span>

# The ActionBar

The ActionBar will be only visible when you are in the view-mode of the application - as soon as you start recording the
_ActionBar_ will be hidden, and you can access the  <i class="fa-solid fa-ellipsis-vertical"></i>  main menu via the
corresponding overlay button.

If enough space on your display the ActionBar will show (beside the
 <i class="fa-solid fa-ellipsis-vertical"></i>  menu) the
<span class="btn">![button-rec](/assets/img/gpsl/button-rec.png)</span> _Start Recording_ Button & the
<span class="btn">![button-pathman](/assets/img/gpsl/button-pathman.png)</span> [_Open PathManager_](../1500-pathman/)
ActionButtons. 

Additionally, the action bar show a Tab(ulator)Bar that allow you to quickly switch between the current active
main-view. Please note that the TabBar will be only shown if the main view is active only and can also be disabled via
the application settings.

When you make use of the [Multi-Preferences feature](../3950-multipref/) the ActionBar will show the current active
profile name instead of _GPSLogger II_.

# The StatusBar

- Can be configured to be rendered as overlay or as own screen part
- Fields are fully customizable (including the option to toggle between the use of Emojis or Text)
  <br/>[Appearance & Startup Settings](../8020-apperance/#statusbar)

# The Main View(s)

The application supports up to three different views be visible at the same time - the main view and two additional
sub-views. You can:
- Fully customize which view will be used in each section of the three sections
- **Switch** between available views by **swiping left/right** (on the map view you have to start with the swiping near
  the left/right margin of the map screen)
- Specify the ratio between the main- and the two sub-views
- Define, if a sub views should be locked (disable view switching)
- The two additional views can be enabled/disabled via the main menu (_Show/Hide View 1/2_)

<i class="fa-solid fa-hand-point-up fa-fw"></i> Pinch-to-zoom also supported for Views that support the Zoom function.

All the view configurations can be adjusted in the [Appearance & Startup Settings](../8020-apperance/#statup),
so that the application will start with the screen layout you prefer.

# The NavigationBar
<span class="shot">![shot1](/assets/img/gpsl/view-navbar.png)</span>
The navigation bar is only visible when you have loaded a recorded path (or after you have stopped the recording) Beside
the slider that allow you to move quickly to any position in the recorded path (timeline) you have the option to use the
media-control-buttons:<br class="shot-end"/>

| Icon | Description |
| --- | --- |
| <span class="btn">![button-start](/assets/img/gpsl/button-nav01.png)</span> | Jump to the START of the path|
| <span class="btn">![button-fastreverse](/assets/img/gpsl/button-nav02.png)</span> | Move 15 records back |
| <span class="btn">![button-prev](/assets/img/gpsl/button-nav03.png)</span> | Move to previous record |
| <span class="btn">![button-next](/assets/img/gpsl/button-nav04.png)</span> | Move to next record |
| <span class="btn">![button-fastforward](/assets/img/gpsl/button-nav05.png)</span> | Move 15 records forward |
| <span class="btn">![button-end](/assets/img/gpsl/button-nav06.png)</span> | Jump to the END of the path |

Please note, that not all records have to be location records - so moving one record backwards/forwards might just
select a different record type (see [How GPSLogger will log your data?](../1100-data/#independant))

# Additional Overlay Buttons

| Icon | Description |
| --- | --- |
| <span class="btn">![button-rec](/assets/img/gpsl/button-menu.png)</span> | Opening the  <i class="fa-solid fa-ellipsis-vertical"></i>  main menu of the application |
| <span class="btn">![button-rec](/assets/img/gpsl/button-rotation-small.png)</span> | The compass, in the upper left corner of the map, can be used in order to toggle the map orientation: _Always North_ or _Current Heading_ |
| <span class="btn">![button-rec](/assets/img/gpsl/button-pause.png)</span> | Pause the current recording (when the recording is paused the overlay button will slightly pulse) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-stop.png)</span> | Stop the current recording (only visible if device is not in <i class="fa-solid fa-lock"></i> lock state) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-omd.png)</span> | Iterate between the different configured [OpenMapData Providers](../2200-openmapdata/) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-resetpan.png)</span> | Center map on current position (only visible if map view is paned) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-mflag.png)</span> | Center map on next (navigation) target (only active when a navigation path is loaded) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-zoomin.png)</span> | Zoom IN (only visible if one of the visible views supporting zoom function) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-zoomout.png)</span> | Zoom OUT (only visible if one of the visible views supporting zoom function) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-resetnav.png)</span> | Reset Offroad Navigation (only available if a navigation path is loaded that does not contain TurnByTurn instructions) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-nextwp.png)</span> | [Calculate new next Waypoint](../2500-offroadnav/#nextwaypoint) (only available if a navigation path is loaded that does not contain TurnByTurn instructions) |

# The available Views

## OpenMapData View
## Path View
## Direction View
## Speed View
## Elevation View
## Compass View
## GPS-Data View
## Navigation Direction View
## Navigation Distance & Timing View
## Navigation Speed View
## Heartrate View (ANT+/BTLE)
## Cadence View (ANT+/BTLE)
## Shifting View (Di2)
## Power View (BTLE)
## Barometer View
## TargetSpeed View
## Climb View
## MultiView I-IV
## BTLE-Beacon View
<span class="shot">![view-btle-beacons](/assets/img/gpsl/view-btle-beacons.png)</span>
<br class="shot-end">
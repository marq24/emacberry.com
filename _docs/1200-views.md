---
title: <i class="fa-solid fa-mobile-screen-button"></i> User Interface & Views
menu-title: <i class="fa-solid fa-mobile-screen-button fa-fw"></i>&nbsp;GUI & Views
menu-mobile: User Interface & Views
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
<span class="btn">![button-pathman](/assets/img/gpsl/button-pathman.png)</span> [_Open PathManager_](./1500-pathman.html)
ActionButtons. 

Additionally, the action bar show a Tab(ulator)Bar that allow you to quickly switch between the current active
main-view. Please note that the TabBar will be only shown if the main view is active only and can also be disabled via
the application settings.

When you make use of the [Multi-Preferences feature](./3950-multipref.html) the ActionBar will show the current active
profile name instead of _GPSLogger II_.

# The StatusBar

- Can be configured to be rendered as overlay or as own screen part
- Fields are fully customizable (including the option to toggle between the use of Emojis or Text)
  <br/>[Appearance & Startup Settings](./8020-apperance.html#statusbar)
- Showing the recording status as first entry:
  - \[L\]: logging/recording
  - \[P\]: paused (lower case \[p\] indicates that the pause was triggered by the AutoPAUSE feature)

# The Main View(s) {#views}

The application supports up to three different views be visible at the same time - the main view and two additional
sub-views. You can:
- Fully customize which view will be used in each of the three sections
- **Switch** between available views by **swiping left/right** (on the map view you have to start with the swiping near
  the left/right margin of the map screen)
- Specify the ratio between the main- and the two sub-views
- Define, if a sub views should be locked (disable view switching)
- The two additional views can be enabled/disabled via the main menu (_Show/Hide View 1/2_)

All the view configurations can be adjusted in the [Appearance & Startup Settings](./8020-apperance.html#statup),
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
select a different record type (see [How GPSLogger will log your data?](./1100-data.html#independant))

# Additional Overlay Buttons

| Icon | Description |
| --- | --- |
| <span class="btn">![button-rec](/assets/img/gpsl/button-menu.png)</span> | Opening the  <i class="fa-solid fa-ellipsis-vertical"></i>  main menu of the application |
| <span class="btn">![button-rec](/assets/img/gpsl/button-rotation-small.png)</span> | The compass, in the upper left corner of the map, can be used in order to toggle the map orientation: _Always North_ or _Current Heading_ |
| <span class="btn">![button-rec](/assets/img/gpsl/button-pause.png)</span> | Pause the current recording (when the recording is paused the overlay button will slightly pulse) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-stop.png)</span> | Stop the current recording (only visible if device is not in <i class="fa-solid fa-lock"></i> lock state) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-omd.png)</span> | Iterate between the different configured [OpenMapData Providers](./2200-openmapdata.html) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-resetpan.png)</span> | Center map on current position (only visible if map view is paned) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-mflag.png)</span> | Center map on next (navigation) target (only active when a navigation path is loaded) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-zoomin.png)</span> | Zoom IN (only visible if one of the visible views supporting zoom function) <i class="fa-solid fa-hand-point-up fa-fw"></i> Pinch-to-zoom is also supported |
| <span class="btn">![button-rec](/assets/img/gpsl/button-zoomout.png)</span> | Zoom OUT (only visible if one of the visible views supporting zoom function) <i class="fa-solid fa-hand-point-up fa-fw"></i> Pinch-to-zoom is also supported |
| <span class="btn">![button-rec](/assets/img/gpsl/button-resetnav.png)</span> | Reset Off-road Navigation (only available if a navigation path is loaded that does not contain turn-by-turn instructions) |
| <span class="btn">![button-rec](/assets/img/gpsl/button-nextwp.png)</span> | [Calculate new next Waypoint](./2500-offroadnav.html#nextwaypoint) (only available if a navigation path is loaded that does not contain turn-by-turn instructions) |

# The available Views

In the following section some sample screenshots of the different views can show overlay buttons, others does not. The
appearance of the overlay buttons can depend on the visibility of a certain view but **don't have too**. In the
following sections the overlay buttons will not be described - since they might not belong necessarily to the view.

## OpenMapData View
### VTM
<span class="shot">![a](/assets/img/gpsl/view-map-vtm.png)</span>
<br class="shot-end"/>

### Other
#### Image Tile Server based
<span class="shot">![a](/assets/img/gpsl/view-map-def01.png)</span>
Here on this screenshot OSM Carto Style
<br class="shot-end"/>

#### Mapsforge (OSM Offline *.map files)
<span class="shot">![a](/assets/img/gpsl/view-map-def02.png)</span>

<br class="shot-end"/>

## Compass View
<span class="shot">![a](/assets/img/gpsl/view-compass.png)</span>
<br class="shot-end"/>

## Speed View
<span class="shot">![a](/assets/img/gpsl/view-speed.png)</span>
<br class="shot-end"/>

<span class="shot">![a](/assets/img/gpsl/view-speed-zoom.png)</span>
<br class="shot-end"/>

## Elevation View
<span class="shot">![a](/assets/img/gpsl/view-alt.png)</span>
<br class="shot-end"/>

## Direction View
<span class="shot">![a](/assets/img/gpsl/view-dir.png)</span>
<br class="shot-end"/>

## GPS-Data View
When you want to use GPSLogger as simple GPS display, this is probably the view you would like to use. The view will
display the current latitude and longitudes values (depending on your selected format) in the largest possible font so
that both values are completely displayable on the selected screen size.

<span class="shot">![a](/assets/img/gpsl/view-gps.png)</span>
- 1'st row (maximum possible font size): Current **Latitude**
- 2'nd row (maximum possible font size): Current **Longitude**
- lower left corner: Current Speed (without unit)
- lower right corner: Current Course
<br class="shot-end"/>

<span class="shot">![a](/assets/img/gpsl/view-gps-landscape.png)</span>
You probably want to use this View stand alone e.g. in your cockpit (boat - not aircraft!) in landscape mode to get the
maximum font size possible.
<br class="shot-end"/>

## Navigation Views
Before the Multi View I-IV have been available GPSLogger had only the ability to display 3 different views at the same
time (Main view & SubView I+II). The three available Navigation views have been implemented in order to allow the user
to configure the screen depending on his personal use case. All the available information is also available as part of
the MultiViews. [See <i class="fa-solid fa-window-restore"></i> Multi View I - Multi View IV Section for details.](./3150-multiviews.html)

### Direction View
Of course the _core_ is the _direction-to-go_ pointing arrow. This view assumes, that you have your device in front of
you while moving (actively looking onto the device display).

<span class="shot">![a](/assets/img/gpsl/view-nav-dir.png)</span>
- Arrow: pointing in the direction (as the crow flies) of the next navigation target (can be a TurnByTurn position or 
  a Off-road navigation waypoint)
- Medium Font middle: Distance to the waypoint
- Medium Font bottom: Remaining overall distance after the waypoint
<br class="shot-end"/>

### Distance & Timing View
<span class="shot">![a](/assets/img/gpsl/view-nav-dist.png)</span>
- Medium Font top: Total distance/length
- Medium Font middle: Total time/duration
- Medium Font bottom: Average speed (without unit - so here in the example 53,8 km/h) 
<br class="shot-end"/>

### Speed View
<span class="shot">![a](/assets/img/gpsl/view-nav-speed.png)</span>
- Large Font top: Current Speed
- Large Font bottom: Speed unit
<br class="shot-end"/>

## Heartrate View (ANT+/BTLE)
Data for the Heartrate View is only available if you have paired a BTLE/ANT+ Heartrate Sensor with GPSLogger. [Please see
<span class="material-icons" style='margin-top:0.1em;'>sensors</span> External Sensors / Heartrate for details.](./3000-sensors.html#hr)

<span class="shot">![a](/assets/img/gpsl/view-hr.png)</span>
- Large Font: Showing current heartrate/pulse either in beats per minute or in a % value of you maximum pulse (see Settings)
- Graph: Showing heartrate/pulse over time
- Graph red: Showing average heartrate/pulse over time
<br class="shot-end"/>

## Cadence View (ANT+/BTLE)
Data for the Cadence View is only available if you have paired a BTLE/ANT+ Cadence Sensor with GPSLogger. [Please see
<span class="material-icons" style='margin-top:0.1em;'>sensors</span> External Sensors / Cadende for details.](./3000-sensors.html#cad)

<span class="shot">![a](/assets/img/gpsl/view-cad.png)</span>
- Large Font: Showing current cadence in rotations per minute (rpm)
- Graph: Showing cadence over time
- Graph red: Showing average cadence over time 
<br class="shot-end"/>

## Shifting View (Di2) {#shifting}
Data for the Shifting view is only available if you have connected your Shimano Di2 with GPSLogger. [Please see
<i class="fa-solid fa-gears"></i> Shimano Di2 Support for details.](./3600-di2html) 

<span class="shot">![view-shifting](/assets/img/gpsl/view-shifting-di2.png)</span>
- Large Font top: Number of front-gear teeth - number of rear-gear teeth
- Large Font bottom: resulting gear-ratio
- Upper right corner: Schematic gear positions
- Graph: Showing ratio over time
<br class="shot-end"/>
 
## Power View (BTLE)
Data for the Power View is only available if you have paired an BluetoothLE Power Sensor with GPSLogger. [Please see
<span class="material-icons" style='margin-top:0.1em;'>sensors</span> External Sensors / Cycling Power for details.](./3000-sensors.html#pow)

<span class="shot">![a](/assets/img/gpsl/view-pow.png)</span>
- Large Font top: Current cycling power
- Medium Font middle: Current ratio between left & right leg (balance - here in the example left leg provided 51%,
  while right delivered _just_ 49% of the 263 watts)
- Medium Font bottom: the average balance between left & right (here in the example the right leg provided in average
  6.07% more power than the left)
- Graph: Showing cycling power over time
- Graph red: Showing the average power
- Graph blue: Showing the balance between left & right leg over time (lower than half of the screen: left leg provided
  more power, over the half of the screen: right leg provided more power) 
<br class="shot-end"/>

## Barometer View
<span class="shot">![a](/assets/img/gpsl/view-baro.png)</span>
- Large Font: Showing current pressure in millibar
- Graph: Showing pressure over time

Here in the sample screenshot you also see how a pause in the recording data will be rendered in the different time axis
based views. In this example the pause took 1 minute and 30 seconds.
<br class="shot-end"/>

## TargetSpeed View
Implemented for a specific use case of a friend - mainly give you a target speed based on the current slope. 

## Climb View
<span class="shot">![view-climb](/assets/img/gpsl/view-climb02.png)</span>
The Details about the [Climb are described in a separate section of this manual](./3300-climb.html#view)  
<br class="shot-end"/>

## MultiView I-IV
<span class="shot">![view-multiview](/assets/img/gpsl/view-multiview.png)</span>
The Details about the [Multi View I - Multi View IV are described in a separate section of this manual](./3150-multiviews.html)  
<br class="shot-end"/>

## BTLE-Beacon View
<span class="shot">![view-btle-beacons](/assets/img/gpsl/view-btle-beacons.png)</span>
- Large Font: Showing current visible beacons 
- Graph: Showing number of visible beacons over time
<br class="shot-end"/>

## Path View

The _Path View_ is the initial created view of GPSLogger - so everything have started from there. At the first days of
the application there was almost none map support on the BlackBerry Platform available. So the initial approach of
GPSLogger was to show the user a x-y-axis graph of his path. This might also explain, why the activities/tracks/routes
that you record with the app have the internal name _path_.)

<span class="shot">![a](/assets/img/gpsl/view-path.png)</span> The Path view is drawing the latitude/longitude positions
on a simple X/Y axis **without any projection**. This means, that each pixel on the display have a different length or
height in the real world.

This seams to be ridiculous bad from today's point of view - but hey _I was young and needed the money!_ What else can I
say as lame excuse. Seriously this view is just included in GPSLogger for nostalgic reasons. I don't expect that any
current user have this view enabled.

The Path View does not allow much user interaction - zoom in & zoom out, that's it basiaclly - even a pan option is not
available in this initial view.
<br class="shot-end"/>

<span class="shot">![a](/assets/img/gpsl/view-path-compare.png)</span>If you want to have an accurate view of your
path (map projection wise), please use the OpenMapData View with **OpenStreetMap (Offline)** provider - when you do not
have any additional *map files in your offline maps directory (only the world.map present), then the presentation of the
OpenMapData View is the view you should use. It's also 100% offline.

When you compare both screenshots here the difference is quite noticeable! (Even if you ignore all the other difference
like: compass, map attribution or the different styling of path & background-path rendering.)<br class="shot-end"/>

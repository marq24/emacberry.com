---
title: <i class="fa-solid fa-sliders"></i>&nbsp;Multi Preferences/Mode
menu-title: <i class="fa-solid fa-sliders fa-fw"></i>&nbsp;Multi Preferences
menu-mobile: Multi Preferences
---

# Overview

When you use GPSLogger for multiple types of activities you will run sooner or later into the situation that settings
that work great for the use case A does will cause trouble in use case B.

Just a very simple example - assuming you are using audio announcement for your running activities and so every
completed kilometer you will get a details summary of your pace via text to speech. Today you are sitting in a plan and
want to log your flight from San Francisco to Tokyo. This will great a lot of fun when the app going to generate every
single kilometer an announcement - actually to be totally fair this will sooner or later crash the app since the audio
announcements going to be stacked on top of each other and can't be completed before the next announcement will arrive.

So instead of remembering each time when you have a different use case with diametrical requirements to reconfigure the
settings in GPSLogger, the app offers a simple way to save different application configurations and load them all at
once.

This feature is called _Multi Preferences/Mode_.

<span class="shot">![multi-preferences](/assets/img/gpsl/multiprefs.png)</span>
As soon as there is more than a single Profile present, you find in the
 <i class="fa-solid fa-ellipsis-vertical"></i>  main menu a _Profiles..._ entry, that allows you to quickly switch
between the different configurations of GPSLogger.

The ActionBar will show you the currently active profile (when you have selected the -DEFAULT- Profile the ActionBar
will show the application name).

> Personally I have beside my default one, profiles for: Hiking, RoadBike, IndoorRow, Indoor Run and Flying (+ multiple
> different profiles dedicated for certain application test cases).
> One reason for using this amount of multiple profiles is that in each Profile I use a different set of external
> sensors.  

<span class="material-icons fa-fw">info</span> **Not all settings** are profile dependant. This generates some sort of
challenge when you want to modify some app settings. How you should know which of the common/global application settings
have a pendant in the multi-profile section?

When any profile is active, then when you open the application settings, each setting/switch that will be overwritten by
its pendant in the multi-profile section will get a Prefix **_\[Profile!\]_** and the setting itself is disabled/not
editable. So when ever you come across such a setting field, you should switch to Application Settings > Multi
Preferences/Mode and select the current active profile to adjust it.

# Create a new Profile
Open Application Settings > Multi Preferences/Mode and press the _ADD PROFILE_ button. Specify a name (include emojis if
you like) and select OK.

This will create a new entry in the list of _Activity Profiles_ that are shown below the _ADD PROFILE_ button.

To delete a Profile, simply press the _DELETE_ button on the right-hand side - but caution, there is no additional
confirm dialog. Once it's deleted it can only be recovered by using the RESTORE-BACKUP functionality. 

# Edit a Profile / Available profile dependant Settings
Well _surprise_ _surprise_ - pressing the _EDIT_ button will show you a condensed version of the Applications Settings
dialog. The Profile Settings are structured into the following Sections:
- General Settings
- Appearance & Startup
- Voice/Audio Notifications
- Sharing Location Information
- Additional ANT+/BluetoothLE Sensors

## General Settings
### GPS-Sensor & Smoothing Setting
- <i class="fa-solid fa-toggle-on fa-fw"></i> GPS-Signal required
- <i class="fa-solid fa-toggle-on fa-fw"></i> Save NMEA Data
- <i class="fa-solid fa-toggle-on fa-fw"></i> Overwrite GPS-Speed
- <i class="fa-solid fa-toggle-on fa-fw"></i> Smooth Speed
- <i class="fa-solid fa-list fa-fw"></i> Path-Smoothing
- <i class="fa-solid fa-list fa-fw"></i> GPS update interval
- <i class="fa-solid fa-toggle-on fa-fw"></i> UUID Beacon Scanner

### Additional Direction Sensor 
- <i class="fa-solid fa-toggle-on fa-fw"></i> Use Direction Sensor
- <i class="fa-solid fa-list fa-fw"></i> Update interval

### Additional Barometer Sensor 
- <i class="fa-solid fa-toggle-on fa-fw"></i> Use Barometer Sensor 
- <i class="fa-solid fa-toggle-on fa-fw"></i> Use as Elevation provider
- <i class="fa-solid fa-toggle-on fa-fw"></i> Autosmooth
- <i class="fa-solid fa-list fa-fw"></i> Update interval

### AutoRecording & Auto Pause
- <i class="fa-solid fa-toggle-on fa-fw"></i> Auto-START Logging
- <i class="fa-solid fa-toggle-on fa-fw"></i> Auto-STOP Logging
- <i class="fa-solid fa-toggle-on fa-fw"></i> Auto-Pause
- <i class="fa-solid fa-list fa-fw"></i> AutoPause ON trigger
- <i class="fa-solid fa-list fa-fw"></i> AutoPause OFF trigger

## Appearance & Startup
### Unit & Format Options
- <i class="fa-solid fa-list fa-fw"></i> Default navigation profile
- <i class="fa-solid fa-square-check fa-fw"></i> Speed in _Minutes per KM_
- <i class="fa-solid fa-square-check fa-fw"></i> Heartrate in %
- <i class="fa-solid fa-square-pen fa-fw"></i> Maximum Heartrate 

### Startup View Configuration
- <i class="fa-solid fa-list fa-fw"></i> Main View
- <i class="fa-solid fa-list fa-fw"></i> Secondary View I
- <i class="fa-solid fa-list fa-fw"></i> Secondary View II
- <i class="fa-solid fa-star fa-fw"></i> Multi View configuration...
  - <i class="fa-solid fa-star fa-fw"></i> MultiView I - MultiView IV Configurations

### Font size & Display Options
- <i class="fa-solid fa-list fa-fw"></i> Font Size
- <i class="fa-solid fa-toggle-on fa-fw"></i> Display always on
- <i class="fa-solid fa-square-pen fa-fw"></i> Backlight ON Distance
- <i class="fa-solid fa-square-pen fa-fw"></i> _Afterglow_ after waypoint has been reached

## Voice/Audio Notifications
- <i class="fa-solid fa-list fa-fw"></i> Make use of the speech synthesis \[TTS\]
 
### Simple audio Notifications \[when TTS <i class="fa-solid fa-toggle-off"></i>\]
- <i class="fa-solid fa-square-pen fa-fw"></i> Distance & interim (sector length)
- <i class="fa-solid fa-list fa-fw"></i> Notification Duration
- <i class="fa-solid fa-list fa-fw"></i> Notification Sound

### Speech Synthesis Options \[when TTS <i class="fa-solid fa-toggle-on"></i>\]
- <i class="fa-solid fa-square-check fa-fw"></i> Enable Display during TTS output
- <i class="fa-solid fa-list fa-fw"></i> Output stream for the text to speech synthesis
- <i class="fa-solid fa-star fa-fw"></i> Configure Event announcements...
  - <i class="fa-solid fa-square-check fa-fw"></i> Low Battery
  - <i class="fa-solid fa-square-check fa-fw"></i> GPS Status
  - <i class="fa-solid fa-square-check fa-fw"></i> Recording Started / Paused / Resumed / Stopped
  - <i class="fa-solid fa-square-check fa-fw"></i> Summary after Recording
  - <i class="fa-solid fa-square-check fa-fw"></i> More than 50 m offside / Back on track
  - <i class="fa-solid fa-square-check fa-fw"></i> ANT+/BluetoothLE device connection status
- <i class="fa-solid fa-star fa-fw"></i> TurnByTurn Instructions & Climb-ahead... 
  - <i class="fa-solid fa-list fa-fw"></i> Use Introduction
  - <i class="fa-solid fa-toggle-on fa-fw"></i> Repeat Announcement
  - <i class="fa-solid fa-toggle-on fa-fw"></i> TurnByTurn Instructions
  - <i class="fa-solid fa-toggle-on fa-fw"></i> Climb-ahead Information
  - <i class="fa-solid fa-square-pen fa-fw"></i> Maximum climb elevation
  - <i class="fa-solid fa-list fa-fw"></i> Auto enable Climb View
- <i class="fa-solid fa-star fa-fw"></i> Configure Sector announcements...
  - <i class="fa-solid fa-square-pen fa-fw"></i> Distance & interim (sector length)
  - <i class="fa-solid fa-list fa-fw"></i> Use Introduction
  - <i class="fa-solid fa-toggle-on fa-fw"></i> Repeat Announcement
  - <i class="fa-solid fa-square-check fa-fw"></i> Total Distance
  - <i class="fa-solid fa-square-check fa-fw"></i> Total Time
  - <i class="fa-solid fa-square-check fa-fw"></i> Total average Speed (Ø)
  - <i class="fa-solid fa-square-check fa-fw"></i> Sector Distance
  - <i class="fa-solid fa-square-check fa-fw"></i> Sector Time
  - <i class="fa-solid fa-square-check fa-fw"></i> Sector average Speed (Ø)
  - <i class="fa-solid fa-square-check fa-fw"></i> Distance to Finish (Navigation Mode)
  - <i class="fa-solid fa-square-check fa-fw"></i> Elevation climb to Finish (Navigation Mode)
- <i class="fa-solid fa-square-pen fa-fw"></i> Gained Heights 

## Sharing Location Information
- <i class="fa-solid fa-list fa-fw"></i> Time Period 
- <i class="fa-solid fa-list fa-fw"></i> HappyPartner HappyLife (delay of initial sharing)
 
## Additional ANT+/BluetoothLE Sensors
- List of <i class="fa-solid fa-square-check fa-fw"></i> from the overall list of available external sensors.
- <i class="fa-solid fa-list fa-fw"></i> Crankset (FrontGears) (Di2 related)
- <i class="fa-solid fa-list fa-fw"></i> Cassette (Rear Gears) (Di2 related)


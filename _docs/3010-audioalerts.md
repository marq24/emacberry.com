---
title: <i class="fa-solid fa-volume-high"></i> Audio Announcements
menu-title: <i class="fa-solid fa-volume-high fa-fw"></i>&nbsp;Audio Announcements
---
# Overview
Personally I am a big fan of being able to use GPSLogger _hands free_ - a big part of this experience comes from the
fact that the app has implemented multiple so-called text to speech (tts) functionalities. Instead of checking my phone
every kilometer yourself (in order to look up your pace, overall distance or time) the app can automatically give you
this information (if a specified distance is traveled).

You have the choice, if the app should just give you a short audio signal once a certain mileage have been completed or
if the app should inform you with overall and interval based information.

> In the past years I had my mobile phone just in the back pocket of my cycling jersey and let me announce every 5 km
> the overall distance, the time for the last 5 km and the remaining distance (when I was following a previously
> planed route) - Of course when I am following a planed route, the turn instructions will be also given via audio
> commands - In combination to be able to control my phone via my Di2 shifting levers this has become extremely 
> convenient to use \[e.g to request details about the upcoming turn (specially the distance)\]. 
 
There are the following types of audio announcements available:
- Event announcements
- TurnByTurn Instructions & Climb-ahead announcements
- Sector announcements
- Gained Height

**When you <i class="fa-solid fa-toggle-off"></i>** in the Application Settings > Speech & Audio Notifications > **Make
use of speech synthesis**, then most of the audio announcements features **are disabled**. In this case only the 
**Simple-Mode** of the **Sector announcements** can be used.

# Event announcements {#events}
## Low Battery
## GPS Status
## Recording Started
## Recording Paused
## Recording Resumed
## Summary after Recording
## More than 50 m offside of the loaded Navigation path
## Back on the loaded Navigation path
## ANT+/BluetoothLE device connection status
## Di2 Battery below 20% (can be <i class="fa-solid fa-toggle-on"></i> in the Di2 Settings Section of the App)

# TurnByTurn Instructions & Climb-ahead Information
> Only if you have loaded a navigation path that contains TurnByTurn information
 
## TurnByTurn Instructions
Specify the handling of information that can be extracted from a loaded navigation path

If TurnByTurn instructions are present in navigation path they will be announced once you are approaching the navigation point (distance is Ø speed dependent)

## Climb ahead Information
If climbs are present in your loaded navigation path they will be announced once you are approaching them (A climb must be more then 99feet/30m uphill)

Minimum climb elevation (%1$s)
In order to adjust the climb-detection in a navigation path you can specify the minimal altitude delta (in Meter) between the lowest and highest points. Minimal value is 30m. This value is used in the "climb-pro formula."

Specify the minimum climb elevation
Current selected minimum altitude difference is: \'%1$s\' (ClimbPro value: %2$s)
Auto enable Climb View
When you are approaching a detected climb the Climb-View will be automatically enabled. The selected display is: \'%1$s\'


# Sector announcements

## Simple-Mode
Notify after the specified distance (in Meter) was traveled (specially useful for runners &amp; bikers). Set a value of \'0\' to deactivate this feature.

Notification duration	
Selected duration is: \'%1$s\'		

		<item name="00">play 1 time
	    <item name="01">loop 2 seconds
		<item name="02">loop 5 seconds
		<item name="03">loop 10 seconds
		<item name="04">loop 15 seconds
		<item name="05">loop 30 seconds



## Text2Speech-Mode
Specify at which distance (Sector length) which values should be announced by Speech

Total Distance
Total Time
Total average Speed (Ø)
Sector Distance
Sector Time
Sector average Speed (Ø)
Distance to Finish (Navigation Mode)
Elevation climb to Finish (Navigation Mode)


# Gained Height
> If you are not following a navigation path that contains climb data

Notify after the specified gained heights (in Meter). Set a value of \'0\' to deactivate this feature.
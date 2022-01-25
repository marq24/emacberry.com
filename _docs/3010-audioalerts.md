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
 
There are the following types of audio announcements available (alphabetical order):
- [Event Announcements](#events)
- [Gained Height](#height)
- [Sector Announcements](#sector)
- [TurnByTurn Instructions & Climb-ahead announcements](#turnbyturn)

<i class="fa-solid fa-hand-point-up fa-fw"></i> You can specify the output channel on which the audio information will
be submitted. Also, you should know, that if you are listening to music or an audiobook this playback will be temporary
pause and after the signal resumed.

**When you <i class="fa-solid fa-toggle-off"></i>** in the Application Settings > Speech & Audio Notifications > **Make
use of speech synthesis**, then most of the audio announcements features **are disabled**. In this case only the 
**Simple-Mode** of the **Sector announcements** will be available as audio notification.

# Sector announcements {#sector}

When you are running or cycling you might want to get frequent information about your intermediate performance. Or
simpler, you might just like to be notified once you have completed a certain distance (e.g. after each 1 km).

GPSLogger supports this via a function called _Sector announcements_, where the Sector length can be configured by
yourself. So it's really up to you, if this should be every km, every mile, every 500 yards or very 5 km (which I use
for my cycling activities). \[Just for completeness - you can use any number here - if you like to capture every 624 m
(for what ever reason) you can do so\.]

When you specify a sector distance of _0_ the feature is disabled.

## Simple-Mode

The simple mode will just trigger the playback of an audio signal of your choice once the configured sector distance has
been completed. You can additionally select the duration of the playback - You have the option to choice between 'play 1
time' and 'looping for 2-30 seconds'.

## Text-to-Speech Mode

In order to use this feature you need to specify your sector distance. As described above it can be any value larger
than 0. Once you have completed the specified distance you will hear a voice (generated via speech synthesis) that will
provide you with the following information:

- Total Distance
- Total Time
- Total average Speed (Ø)
- Sector Distance
- Sector Time
- Sector average Speed (Ø)
- Distance to Finish (Navigation Mode)
- Elevation climb to Finish (Navigation Mode)

<i class="fa-solid fa-hand-point-up fa-fw"></i> You can enable/disable each information separately via the application
settings!

Few more things you should be aware of:

1. When you have enabled Total & Sector Data, then for the first Sector you hear the Distance & Time only once - since
   Sector and Total values are identical.
2. When you make use of the _Speed as Pace_ feature, and you have configured the sector distance to the equal value then
   your pace distance (1 km or 1 mile) then a sector announcement can be quite irritating when you have enabled _Sector
   time_ **and** _sector average speed_ since then you will hear two times a time based information (which is hopefully
   identical).
3. _Distance to Finish_ will be only announced if you have loaded a navigation path.
4. _Elevation climb to Finish_ (remaining meters to climb) will be only announced if you have loaded a navigation path
   from which the app could extract climb information ([see also Climb View Section](../3300-climb/)).

# TurnByTurn Instructions & Climb-ahead Information {#turnbyturn}

I hope it's reasonable for you, that the TurnByTurn instructions require that you have loaded a navigation path. And
further: Climb-ahead information is only available if climb data could be extracted. [More information about the climb
extraction requirements and process can be found in the corresponding Climb-View Section](../3300-climb/#extraction).

## Additional Options / Functions

- You can enable, that each announcement can have an introduction (either a simple 'Attention' or any notification sound
  that is present on your device)

- TurnByTurn announcements can be repeated for one time (<i class="fa-solid fa-toggle-on"></i> via the Application
  Settings)

- Of course the announcement will be made, before the actual location is reached. The distance how many meters before
  the waypoint the event-announcement will be made, depends on your current speed, as faster you are, as more meters
  ahead the announcement will take place. The core idea is, that it's always some seconds ahead so that you have time to
  prepare yourself for the turn. In addition, the events will be pre-announced at least 300 m before the actual
  location - so you should know something is coming.

You can adjust your preferences in the Application Settings > Speech & Audio Notifications > TurnByTurn Instructions &
Climb-ahead Information Section.

## TurnByTurn Instructions

If TurnByTurn instructions are present in navigation path they will be announced once you are approaching the next
navigation waypoint. 

Please find below some possible Turn instructions/parts as examples: 
> - straight ahead - continue _%STREET_NAME%
> - ...and stay on _%STREET_NAME%
> - keep left / turn slightly left / turn left  / make a sharp left turn
> - keep right / turn slightly right / turn right / make a sharp right turn
> - ...onto _%STREET_NAME%
> - make a U-turn
> - at roundabout, take _%NUMBER%_ exit
> - reached Finish

## Climb-ahead Information

If climbs are present in your loaded navigation path they will be announced once you are approaching them. Even if
GPSLogger is support multiple units (like meter, feet or yard) currently **all the climb information** will be announced
in **(height) meter** (welcome to the metric system).

Please find below some possible Climb-ahead information as examples:
> - Climb of _%METER_TO_CLIMB%_ for _%DISTANCE%_
> - _%CLIMB_METERS%_ from _%METER_TO_CLIMB%_ mastered _(That's my half-time motivation)_
> - Climb of _%METER_TO_CLIMB%_ completed
> - Climb of _%METER_TO_CLIMB%_ completed. Then _%REMAINING_TOTAL_CLIMB_METERS%_ remaining to Finish
 
All these announcements also exist with an additional _Climb Category_ information.

# Event Announcements {#events}
## Low Battery

Are you constantly checking the remaining battery of your mobile device? Or have you ever been caught by an unexpected
high power consumption for what ever reason? So you can let GPSLogger II inform you about the current battery level of
your device. When enabled you will hear one of:

> Attention please your battery is low
>  - Battery level at 10 percent
>  - Battery level at 5 percent - charge device now
>  - Battery level at 2 percent - hey dude! - just two percent left

## GPS Status

At the early stage of the application development it had happened, that when I kept my phone in the pocket, that I
turned _Airplane-Mode_ ON or turned _Location_ OFF by accident. So the app is able to inform you, when it does not
receive a GPS location in a certain amount of time, so you are aware that the current location recording process can't
be continued till the signal recovers (sometimes this recovery happens automatically - sometimes it's required to
enable/reset a device setting). In case of an issue with the GPS signal you will hear on of:

> - GPS Signal was lost
> - GPS Signal recovered

## Recording Started / Paused / Resumed / Stopped 

When you make use of the AutoSTART / AutoSTOP or AutoPAUSE function of the app you might find it convenient to get an
audio notification once one of these function was triggered. In case of on of the events you will hear:

> - Recording Started
> 
>   **or**
> 
>   Alert Recording was not started
> 
>   <sub>(when there was a technical issue that prevent the app from creating a new file in the storage)</sub>
> - Recording was Paused
> - Continue Recording
> - Recording Stopped

## Summary after Recording

Additionally, to the _Recording Stopped_ it's possible to get a announcement of a summary (total distance & total time)
for your finished activity.

## More than 50 m offside / Back on track

When you are following a navigation path it might, can happen, that you leave the planed route by accident - when this
happens you can let you inform about this fact that you are not on the planed route any longer.

When you are offsite the route and have an online connection the app is able to request a possible detour back to your
initial planed route - the app can let you know, when such a detour was found and the app is going to change the
next Turn Instructions accordingly.

Finally, once you are back on the route GPSLogger can inform you again. 

Obviously this kind of announcements are some sort of obsolete when you are able to look at the display of your device -
but even then - take these announcements as additional indicator.

In case of on of the events you will hear:
> - You have left the path
> - You will be re-directed
> - You are back on track

The _You have left the path_ announcement will be playback as loop - but the pause between the loops will increase over
time. 

## ANT+/BluetoothLE device connection status

If you don't like to check each time when starting GPSLogger, if the connection to the additional configured sensors
(for the current active profile) have has been established - or you wanted to be informed when the connection to a
sensor has been lost, then you can enable the _device connection status_ announcements.

In case of on of the events you will hear:
> - Heartrate Sensor connected / connection lost
> - Cadence Sensor connected / connection lost
> - Speed Sensor connected / connection lost
> - Power-meter connected / connection lost
> - Di2 connected / connection lost
> - Treadmill connected / connection lost
> - Rowing Machine connected / connection lost

## Di2 Battery below 20%

Did your Di2 ever run out of power during a ride since you forgot to check the battery status before you started? This
never happens to me! Since I will always know in advance when my Di2 will run low on power, thanks to GPSLogger.

This event announcement can be <i class="fa-solid fa-toggle-on"></i> in the Di2 Settings Section of the App

> Attention please
> - Battery level of your Di2 reached 20 percent
> - Battery level of your Di2 reached 10 percent
 
# Gained Height {#height}

If your navigation path does not include any climb data, you can enable an announcement if you have completed a certain
amount _height gain_ meters.

This is quite an old feature and might be removed in the future. Let me know if you still find it useful.

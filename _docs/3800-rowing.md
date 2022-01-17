---
title: "<span class='material-icons fa-fw' style='width: 1.042em;'>rowing</span>&nbsp;Rowing Machine"
menu-mobile: Rowing Machine
---
At the 28'th of July finally my Concept2/PM5 rowing machine arrived - so I had to start with implementing the Fitness
Machine Service (FTMS) Rowing Data Support in my GPSLogger application. Additionally, to this general BTLE standard the
PM5 supporting a lot of additional data fields \[like DriveLength, DriveTime or for each stroke an individual force
curve\] which is pretty cool. All this additionally available data will be captured & logged with the App.

# Requirements
- GPSLogger Version 2.0.0.186 (or higher)
- enabled Bluetooth
- Rowing Machine supporting BluetoothLE FTMS[^1] that provide Rower-Data[^2]
<br/>**or**<br/> 
- A [Concept2](https://www.concept2.com/) with a PM2 (or higher)
- App bound/paired with your rowing machine
- \[_Optional_\] bound ANT+/Bluetooth(LE) <i class="fa-solid fa-heart-pulse"></i> HR Sensor with GPSLogger 

# Overview
In order to make the initial setup and installation process as easy as possible the existing setup wizard have been
extended in order to setup/configure your rowing machine. Once you start the wizard you need to turn on your PM5 and go
to the 'connection' menu. Once the display reports "waiting for connections" you can press the "Search for BT-Devices"
in the GPSLogger settings screen (to which the wizard have directed you).

I am fully aware hat the setup could be much simpler if you would have a dedicated rowing machine app. GPSLogger is a 
more multi sport/activity tracker app - therefore you have plenty of settings and configurations that are useful for
other activities like hiking or cycling... On the other hand all these additional features \[like voice sector
announcements or the possibility to select you preferred distance unit (meter, feet or yards)\] can have some benefits
even when rowing.

<span class="shot">![indoor-rowing](/assets/img/gpsl/indoor-rowing.png)</span>
As new GPSLogger user you simply can ignore all the other settings for the start - when using the wizard the app will
make some additional adjustments that IMHO matched quite good the indoor rowing workout. The "only" quite important
information for new GPSLogger users is, that you can swipe left/right on every screen in order to toggle the current
view. In the initial rowing machine setup, there are 3 different views that will be displayed on the main app screen for
the start: the map and two additional multi-views like you can see it here on the screenshot
<br class="shot-end">

A map? Yes - a map - that's probably just a personal thing - for all my indoor activities (so far cycling & running) I
prefer to simulate a real outdoor activity - so instead of following a strict workout plan I enjoy the surrounding
scenery ;-) Initially you can select between three different rowing locations (via the Rowing Machine Settings): the Ems
river (365km), the Rhine river (1167km) and the Amsterdam Amstel Marathon 2022 (55km).

Obviously these build rowing locations distances are slightly too long to complete them in a single workout (except
Amstel Marathon). Each time you stop the recording the app will store the last position in the simulated rowing path and
will automatically continue at this position when you start your next workout. I hope it's reasonable that this only
works as long as you don't alter the rowing location (Amsterdam, Ems, Rhine).

When you like to can connect GPSLogger with your Strava account and share your training with others and compete on
existing segments (currently there is no exchange with the concept2 logbook yet - but this is on my to do list as well).

When you own a Concept2/PM5 and you want to use the data (like force curves) with external applications, you can make
use of the CSV or JSON export function (via the Path-Manager). The CVS or JSON contains all the captured data.

Please note, that in this initial version no new/additional views have been implemented yet! So e.g. currently the
stroke force curve data will be logged, but will not be displayed yet (but the data is included in the CSV/JSON export).

As soon as I will receive some feedback, I will start with the implementation of additional views (like sowing the force
curve data).

# How to start ?
- Select your workout (or "Just Row") on the PM5 and start to row...
- As soon as GPSLogger will receive the first Message from the PM5 the app will automatically start recording...
- Once you finished your workout and the PM5 send the WorkoutEnd Message the app will stop the recording process and
  switch to the "view" mode
- If you used the "Just row" Mode of the PM5 you need to stop the recording manually by pressing the "STOP" button in
  the upper right corner (the "white square" or by accessing the app menu vie the "3 dot" button)
- You can export the recorded data via the PathManager (that can be accessed via the folder icon in the main
  application bar)

Just as last hint - when you own combined ANT+/BT HR Sensor - connect the sensor via BT to GPSLogger (can be done via
the settings)... Once you bound the app, there is no need to "rebind" the sensor at any training later... For me, it's a
bit a challenge to remember each time when I start with my training on the rowing machine, that I need to bind my
HR-Sensor again... So I let GPSLogger capture the HR (independent of the PM5) - but also I can bind the HR Sensor via
ANT+ with the PM5 and use at the same time the sensor with GPSLogger...

---
[^1]: FTMS: [Fitness-Machine-Service Bluetooth Specification](https://www.bluetooth.com/specifications/specs/fitness-machine-service-1-0/)
    / [Specification XML](https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Services/org.bluetooth.service.fitness_machine.xml)

[^2]: [Rower-Data Specification XML](https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Characteristics/org.bluetooth.characteristic.rower_data.xml)  
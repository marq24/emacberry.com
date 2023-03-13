---
title: <span class="material-icons" style='margin-top:0.1em;'>sensors</span> External Sensors
menu-title: "<span class='material-icons fa-fw' style='width: 1.042em;'>sensors</span>&nbsp;External Sensors"
menu-mobile: External Sensors
---

# Overview

As already initially mentioned in the [Logged Data Section](./1100-data.html#external) GPSLogger supports some additional
external sensors. Mainly this feature has been added for my own cycling & running activities, so please understand that
there might a limitation when it comes to support of specific sensor brands or types.

The implementation base 1:1 on the Protocol specifications (either ANT+ or BluetoothLowEnergy/Bluetooth) - so if your
sensor is supporting the standard implementation of the protocol, it should work 🤞 (I'll keep my fingers crossed).

Once you paired a Sensor with GPSLogger, the app will always (try to) connect the sensor during the startup. So it's
**_pair once - use forever_**. Of course, you can remove previously paired sensors vie the application settings. You have
also the possibility to select from the list of paired sensors which you actually want to use (this specially applies to
multi profiles).

You can make use of the audio announcement feature in order to get feedback about the connection state of each of your
sensors. Additionally, you can enable the display of connection status information via the Application Settings.

# <i class="fa-brands fa-bluetooth"></i> BluetoothLowEnergy / Bluetooth

In the year 2022 we mainly talk about Bluetooth**LowEnergy** (als known as BluetoothLE, BTLE or just BLE) Sensors. The
probability that you buy a _Bluetooth_ Sensor is IMHO quite low. But be aware that a lot of old fitness equipments still
use the **old 5.3Khz Bluetooth** (and not BTLE) technology. **This kind of hardware can't be used with GPSLogger**.

So if you see the <i class="fa-brands fa-bluetooth"></i> sign printed on your sensor - but it does not work with
GPSLogger, then the chance is quite high that this is an old device. You might like to double-check with an app like
[nRF Connect for Mobile from Nordic Semiconductor](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
if your sensor is visible by any kind. If _nRF Connect_ does not list/show your sensor, GPSLogger isn't able to use it
too.

> If _nRF Connect_ shows your sensor in the list, but GPSLogger is not able to connect to it - please get in contact
> with me - TIA!

## <i class="fa-solid fa-heart-pulse fa-fw"></i> Heartrate {#hr}

Make sure your sensor is supporting transfer of pulse data as described in the
[Bluetooth Heartrate Service Specification](https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Services/org.bluetooth.service.heart_rate.xml).
There exist some **old** chest straps that make use of an old/deprecated Bluetooth standard which is quite energy
consuming. Please note, that's not possible to use such an old-5.3Khz-technology-sensor with GPSLogger.

The Heartrate Service exposes heart rate and other data related to a heart rate sensor intended for fitness
applications.

- Heart Rate Measurement
    - Heart Rate Measurement Value - Unit: beats per minute (bpm)
    - Sensor Contact Status
    - Energy Expended - Unit: kilo Joules
    - RR-Interval (The RR-Interval value represents the time between two R-Wave detections)<br/><br/>
     
- Body Sensor Location: Other, Chest, Wrist, Finger, Hand, Ear Lobe or Foot
 
- Heart Rate Control Point: Resets the value of the Energy Expended field in the Heart Rate Measurement characteristic
  to 0

> I use myself a quite cheap chest strap from Genonaute (from Decathlon)[^1] - but also can confirm that the Dual
> Sensors from Polar, Garmin or Wahoo will work for sure. And thanks to Holger we also solved an issue with the
> G.PULSE 3 in 1.

## <i class="fa-solid fa-arrow-rotate-left fa-fw"></i> Cadence / (Speed &) Cadence {#cad}

The Cycling Speed and Cadence (CSC) Service exposes speed-related data and/or cadence-related data while using the
Cycling Speed and Cadence sensor (Server). The Service provides:

- The CSC Measurement characteristic (CSC refers to Cycling Speed and Cadence) is a variable length structure containing
  a Flags field and, based on the contents of the Flags field, may contain one or more additional fields:
    - Cumulative Wheel Revolutions - Unit less
    - Last Wheel Event Time - Unit has a resolution of 1/1024s
    - Cumulative Crank Revolutions - Unit less
    - Last Crank Event Time - Unit has a resolution of 1/1024s<br/><br/>
    
- Sensor Location: Other, Top of shoe, In shoe, Hip, Front Wheel, Left Crank, Right Crank, Left Pedal, Right Pedal,
  Front Hub, Rear Dropout, Chainstay, Rear Wheel, Rear Hub, Chest, Spider or Chain Ring
 
- SC Control Point
  [see Bluetooth Specification sc_control_point.xml for details](https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Characteristics/org.bluetooth.characteristic.sc_control_point.xml)

- The CSC Feature characteristic:
  - Wheel Revolution Data Supported (Y/N)
  - Crank Revolution Data Supported (Y/N)
  - Multiple Sensor Locations Supported (Y/N)
 
If you have a single Cadence sensor, then only the _Cumulative Crank Revolutions_ and the _Last Crank Event Time_ will
be present in a CSC Measurement - the app will anyhow ignore any additional speed data (since the value will be taken
based on your GPS).

> I use multiple CAD-Sensors on different bikes: the one from Garmin, the old magnet-based one from BTWIN (a Decathlon
> brand) and the CAD-Sensor from Wahoo (which I can't recommend since it has not provided any values below 20 rpm during
> my testings)[^1]

## <i class="fa-solid fa-bolt fa-fw"></i> Cycling Power-meter {#pow}

The Cycling Power (CP) Service exposes power- and force-related data and optionally speed- and cadence-related data from
a Cycling Power sensor intended for sports and fitness applications. The Service provides:

- The Cycling Power Measurement characteristic is a variable length structure containing a Flags field, an Instantaneous
  Power field and, based on the contents of the Flags field, may contain one or more additional fields:
    - Instantaneous Power - Unit is in watts
    - Pedal Power Balance - Unit is in percentage with a resolution of 1/2
    - Accumulated Torque - Unit is in newton metres with a resolution of 1/32
    - Cumulative Wheel Revolutions - Unit less
    - Last Wheel Event Time - Unit is in seconds with a resolution of 1/2048s
    - Cumulative Crank Revolutions - Unit less
    - Last Crank Event Time - Unit is in seconds with a resolution of 1/1024s
    - Maximum Force Magnitude - Unit is in newtons
    - Minimum Force Magnitude - Unit is in newtons
    - Maximum Torque Magnitude - Unit is in newton metres with a resolution of 1/32
    - Minimum Torque Magnitude - Unit is in newton metres with a resolution of 1/32
    - Maximum Angle - Unit is in degrees
    - Minimum Angle - Unit is in degrees
    - Top Dead Spot Angle - Unit is in degree
    - Bottom Dead Spot Angle - Unit is in degrees
    - Accumulated Energy - Unit is in kilojoules<br/><br/>
 
- The Cycling Power Vector
  - Cumulative Crank Revolutions - Unit less
  - Last Crank Event Time - Unit is in seconds with a resolution of 1/1024s.
  - First Crank Measurement Angle - Unit is in degrees
  - Instantaneous Force Magnitude Array - Unit is in newtons
  - Instantaneous Torque Magnitude Array - Unit is in newton/meter with a resolution of 1/32<br/><br/>
 
- Sensor Location: Other, Top of shoe, In shoe, Hip, Front Wheel, Left Crank, Right Crank, Left Pedal, Right Pedal,
  Front Hub, Rear Dropout, Chainstay, Rear Wheel, Rear Hub, Chest, Spider or Chain Ring

- The Cycling Power Control Point
  [see Bluetooth Specification cycling_power_control_point.xml for details](https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Characteristics/org.bluetooth.characteristic.cycling_power_control_point.xml)
 
- The Cycling Power Feature characteristic:
  - Pedal Power Balance Supported (Y/N)
  - Accumulated Torque Supported (Y/N)
  - Wheel Revolution Data Supported (Y/N)
  - Crank Revolution Data Supported (Y/N)
  - Extreme Magnitudes Supported (Y/N)
  - Extreme Angles Supported (Y/N)
  - Top and Bottom Dead Spot Angles Supported (Y/N)
  - Accumulated Energy Supported (Y/N)
  - Offset Compensation Indicator Supported (Y/N)
  - Offset Compensation Supported (Y/N)
  - Cycling Power Measurement Characteristic Content Masking Supported (Y/N)
  - Multiple Sensor Locations Supported (Y/N)
  - Crank Length Adjustment Supported (Y/N)
  - Chain Length Adjustment Supported (Y/N)
  - Chain Weight Adjustment Supported (Y/N)
  - Span Length Adjustment Supported (Y/N)
  - Sensor Measurement Context (Y/N)
  - Instantaneous Measurement Direction Supported (Y/N)
  - Factory Calibration Date Supported (Y/N)
  - Enhanced Offset Compensation Supported (Y/N)
  - Distribute System Support \[Unspecified (legacy sensor), Not for use in a distributed system, Can be used in a
    distributed system, RFU\]

> Again my personal setup - I use here the [Assioma Duo from Favero Electronics](https://cycling.favero.com/assioma)[^1]

## <i class="fa-solid fa-person-running fa-fw"></i> FTMS Treadmill Service providing Treadmill Data

The data available from the various characteristics will be used to a) simulate your current location and b) control
your treadmill speed and incline. [see Treadmill Section of this manual](./3700-treadmill.html)

## <span class="material-icons fa-fw" style="width: 1.042em;">rowing</span> FTMS Rowing-Machine providing Rowing-Machine Data

[see Rowing-Machine Section of this manual](./3800-rowing.html)

## Additional _none-standard_ BluetoothLE Sensors/Devices supported by GPSLogger

- [<i class="fa-solid fa-gears fa-fw"></i> Shimano Di2 Shifting Information via EW-WU101 or EW-WU111](./3600-di2.html)
- [<span class="material-icons fa-fw" style="width: 1.042em;">rowing</span> Concept2 PM2+ extended Rowing-Machine Data](./3800-rowing.html)

# ANT+

The ANT+ protocol is under the control of GARMIN and is **the** standard in the cycling work. Since a couple of years
the required hardware to be able to receive data from an ANT+ sensor is **not build** any longer into smartphones. Apple
started withdrawing the support when I can remember correctly with the iPhone 6 (if not earlier) and other hardware
manufactures have followed the Apple route.

> IMHO ANT+ have reached a _**dead**_ <i class="fa-solid fa-skull-crossbones"></i> _**end**_ for smartphones.

Before you be able to connect any ANT+Sensor with GPSLogger need:

- Android Device with build-in ANT+ hardware
- The manufacture of the device has to **compile valid ANT+ drivers** into his Android OS (for my last phone with
  build-in ANT+ hardware the manufacture has withdrawn ANT+ support on hardware driver level with his latest OS update)

**Additionally you need to install:**
- [ANT+ Plugins Service from PlayStore](https://play.google.com/store/apps/details?id=com.dsi.ant.plugins.antplus)
- [ANT Radio Service from PlayStore](https://play.google.com/store/apps/details?id=com.dsi.ant.service.socket)

> Just another side note: When I used ANT+ on my phone I ran into serious Wi-Fi-connection issues while my phone was
> on **roaming** (on vacation) and try to connect to my ANT+ HR Sensor (each time Wi-Fi was turned off). So I have my
> opinion about the quality concerning the ANT+ drivers (build in Canada) but make your own experience.

## Supported ANT+ Sensors

- <i class="fa-solid fa-heart-pulse fa-fw"></i> Heartrate Sensors
- <i class="fa-solid fa-arrow-rotate-left fa-fw"></i> Cadence / Speed & Cadence Sensors

---
[^1]: Please note **this is NOT AN ADVERTISEMENT** I just use/own these devices - and I paid the regular price.
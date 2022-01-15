---
title: <i class="fa-brands fa-bluetooth"></i> Build in UUID Beacon Scanner
sub-title: Don't call it UUID0xFD6FTracer
menu-title: <i class="fa-brands fa-bluetooth"></i>&nbsp;UUID Beacon Scanner
---
# Overview
Google is extremely restrictive when it comes to apps in PlayStore that use the words 'COVID19' or 'pandemic' - I have
tried multiple times to release the little [UUID0xFD6FTracer](https://github.com/marq24/UUID0xFD6FTracer) app in the
PlayStore - but it has always been removed after a short while for (IMHO) silly reasons. So I gave up and release the
via app the [FDroid-Store](https://f-droid.org/app/com.emacberry.uuid0xfd6fscan) and
[Amazon AppStore](https://www.amazon.com/gp/product/B08CY7JY1P).

While the UUID0xFD6FTracer app is just showing you the current situation you might like to be able to record the number
of BluetoothLE beacons (with a specific UUID) around you over time. This can be done with GPSLogger II and the enabled
BluetoothLE Beacon Scanner feature.

# Requirement
- Enabled Bluetooth
- Using Bluetooth you need to grand the permission to access the device location
- <i class="fa-solid fa-toggle-on"></i> General Settings > UUID Beacon Scanner
- **Start logging** - this is really essential - the app only start to display detected BluetoothLE beacons while you
  record (or if you have loaded a previously recorded path)
- <i class="fa-solid fa-toggle-on"></i> [_Optional_] Beacon View: Appearance & Startup > Available View configuration... > BTLE Beacon  
- <i class="fa-solid fa-square-check"></i> [_Optional_] Appearance & Startup > Map & Path View Settings... > Show BTE-Beacons   

# BTLE-Beacon View
The build in UUID Beacon Scanner have a dedicated view in order to display the number of beacons in range over time.
See [View Documentation](../1200-views/#btle-beacon-view) for details.

# Stored location information
<span class="shot">![shot1](/assets/img/gpsl/btle-beacons-on-map.png)</span> For GPSLogger II it's not possible to detect the exact position of a BluetoothLE beacon - so each time GPSLogger detects
a new BTLE beacon **your** current position will be associated with the beacon. So just to be precise: the app
does not store the location of any BTLE beacon - the app stores your location where a beacon was detected for the first
time!

When you continue to move and the beacon is moving with you, the location information stored in GPSLogger will **not**
be updated for this specific beacon!

When there are more than a single beacon at a location the app will render an additional number on the map-marker 

# Export of recorded beacon data
When you record beacon data you probably want to do something with it - Since none of the standard file formats is
supporting this type of data (at least I am not aware of) - the app offers a simple CSV Export.

You find this Export in the PathManager.
1. Select the path from the list
2. select the <i class="fa-solid fa-circle-chevron-down"></i> **more** icon
3. select <i class="fa-solid fa-floppy-disk"></i> **Export**
4. select **UUID 0x' as CSV**

The file will then be stored in the default **share** folder of the app - if you need help accessing exported data on
your device please see: [access GPSLogger files](../5000-export/#access-exported-files-in-the-share-folder)

#### Glossary
- BLTE: BluetoothLE
- beacon: BluetoothLE beacon
- CSV: comma seperated values
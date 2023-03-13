---
title: <i class="fa-solid fa-person-running fa-fw"></i>&nbsp;Treadmill
---

# Overview

When you own a Treadmill with Bluetooth that supports the Fitness Machine Service (FTMS) standard then you can use
GPSLogger to simulate a run anywhere in the world (including up- & downhill simulation).

All what is need to know have been added into the Treadmill Setup Wizard that can be launched from the main menu.

The Wizard will end with a short introduction how to use GPSLogger with your treadmill once you have completed the
initial configuration.

When you make use of the Wizard the Treadmill will be configured as own profile (that can be managed via the \'multi
preferences\' settings) - so you can easily switch between the outdoor &amp; indoor usage without the need to alter any
of your settings.

GPSLogger can also take over the control of the speed & incline of your treadmill (if this is supported by your
device). The app can automatically slow down as the incline increases (and vise versa)

# <span class="material-icons">info</span> DISCLAIMER
> Use the speed & incline control abilities of GPSLogger at your OWN RISK! - **YOU CONTROL** the app!
>
> IN NO EVENT WILL emacberry.com OR ITS LICENSORS BE LIABLE FOR ANY INJURIES OR OTHER DAMAGES, HOWEVER CAUSED AND
> REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF THE USE OF THE SOFTWARE, EVEN IF emacberry.com HAS BEEN ADVISED
> OF THE POSSIBILITY OF SUCH DAMAGES.

# <span class="material-icons">warning</span> DANGER - Allowing speed control can cause fatal injuries
> Please understand that when GPSLogger takes the control over the speed & incline of your treadmill, it could cause
> serious accidents. Remember the movie Terminator!
>
> Any speed & incline adjustment will be done within the limits of the capabilities of your treadmill.
> 
> As a user, you **must expect speed & incline changes at all times** and must be able to respond appropriately at all
> times while using the application.
> 
> Use this function **ONLY** if you are aware of the risk of injury, if you feel sufficiently physically fit and trust
> the application.

# Requirements

- GPSLogger Version 2.0.0.72 (or higher)
- enabled Bluetooth
- Treadmill supporting BluetoothLE FTMS[^1] that provide Treadmill-Data[^2]
- \[_Optional_\] Treadmill supporting the BluetoothLE FTMS-ControlPoint[^3] protocol in order to allow GPSLogger to
  control the speed and incline <span class="material-icons">warning</span>.
- App bound/paired with your treadmill
- \[_Optional_\] bound ANT+/Bluetooth(LE) <i class="fa-solid fa-heart-pulse"></i> HR Sensor with GPSLogger

# Usage

GPSLogger comes with a short wizard that will help you to connect your Bluetooth supporting Treadmill with the App (and
create an **Indoor Run** multi sport profile) - once you have completed the procedure you should hear a
"Treadmill connected"... once you have heard this confirmation you can start recording by following this simple steps:

## Step 1 - Select a start location

<span class="shot">![tmill-tut001](/assets/img/gpsl/tmill-tut001.png)</span>
Pan on the Map to any location you would like to start your treadmill activity - tab and hold on the map till the
context menu will be displayed - from the menu select <span class="material-icons">my_location</span> **Set my location**
<br class="shot-end">

## Step 2 - Select your destination & navigation type

<span class="shot">![tmill-tut002](/assets/img/gpsl/tmill-tut002.png)</span>
Pan on the Map to any other location you would like to end your treadmill activity - tab and hold on the map again till
the context menu will be displayed once more and select from the menu this time <span class="material-icons">directions</span>
**Directions...** - please note, that you have to be online in order to use the "instant" navigation function of
GPSLogger. If you are offline you can load any previously recorded activity as navigation path.
<br class="shot-end">

<span class="shot">![tmill-tut003](/assets/img/gpsl/tmill-tut003.png)</span>
From the following menu select <span class="material-icons">directions_walk</span> **Walk** (or
<span class="material-icons">hiking</span> **Hike...**) - now the route/path will be requested via the
OpenMapRouting service.
<br class="shot-end">

## Step 3 - Start recording

<span class="shot">![tmill-tut004](/assets/img/gpsl/tmill-tut004.png)</span>
Once a navigation path is present/loaded you can press the
<span class="btn">![button-rec](/assets/img/gpsl/button-rec.png)</span> **REC** button in the to top bar of the
application - this will send the start command to your treadmill that should shortly start (mine here have a delay of
5 sec) incl. a countdown. You will now follow the navigation path and depending on your additional GPSLogger treadmill
configuration the app will simulate the slope of the terrain ahead.

<span class="material-icons">warning</span> If you have enabled **speed & incline control** in the application
setting, you need to confirm with every usage, that you are aware of the potential fatal injury risk!

You can stop the treadmill via the <i class="fa-solid fa-circle-stop"></i> **Stop** recording symbol (or simply via the
controls of your treadmill). When you have connected GPSLogger with <i class="fa-brands fa-strava"></i> Strava and
enabled the auto upload activities option, your virtual run will be instantly shared with your friends.
<br class="shot-end">

---
[^1]: FTMS: [Fitness-Machine-Service Bluetooth Specification](https://www.bluetooth.com/specifications/specs/fitness-machine-service-1-0/)
    / [Specification XML](https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Services/org.bluetooth.service.fitness_machine.xml)

[^2]: [Treadmill-Data Specification XML](https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Characteristics/org.bluetooth.characteristic.treadmill_data.xml)

[^3]: FTMS-ControlPoint: [FTMS-ControlPoint Specification XML]( https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Characteristics/org.bluetooth.characteristic.fitness_machine_control_point.xml)
    ([defined inside the Fitness Machine Service Specification XML](https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Services/org.bluetooth.service.fitness_machine.xml))
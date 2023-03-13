---
title: <i class="fa-solid fa-bolt fa-fw"></i>&nbsp;Tasker Integration
menu-mobile: Tasker Integration
---

# Overview
Tasker is an extremely powerful tool to automate _things_ on your Android device
- [https://tasker.joaoapps.com/](https://tasker.joaoapps.com/)
- [https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm)

GPSLogger have build in location based autostart capability's by itself - so you don't have to use Tasker for that, but
of course if you want to give Tasker the control, you can do so. Please see [launching GPSLogger with an additional
START or STOP logging command](#startstop) for details.

What ever you choose, GPSLogger have the option to define Tasker tasks that should be called, once certain events occur
while your recording. The following events allow you to define Tasker Tasks:

- Start Logging
- Stop Logging
- Pause Logging
- Resume Logging
- Live Location Share Event<br/>([see Live Location Sharing & HappyPartner for details](./3200-liveshare.html))

The Tasker Tasks for Start, Stop, Pause & Resume can be configured in the Application Settings > General Settings >
Tasker-Integration, the _Location Event_ Tasker Task have to be enabled and configured in the Application Settings >
Sharing Location Information Section. Each time the app would send an eMail also the selected TASKER-TASK will be
executed.

# Provided Variables
When a Tasker task will be called there is the possibility to provide additional variables to the task. GPSLogger will
provide currently the following:

## The %action Variable

You can use a single TaskerTask and distinguish by the action variable what you would like to do.

| event | action value |
| --- | --- | --- |
| start logging | %action = start |
| stop logging | %action = stop |
| pause logging | %action = pause | 
| resume logging | %action = continue |
| share location | %action = notify | 

## Provided additional location & path related variables

| variable | condition / description / sample |
| --- | --- |
| %raw_latitude | plain decimal latitude value |
| %raw_longitude | plain decimal longitude value |
| %latitude | if no projection is configured / formatted latitude string (as shown in status bar) | 
| %longitude | if no projection is configured / formatted longitude string (as shown in status bar) |
| %mgrsprojection | if MGRSProjection is used / location in the MGRSProjection display format |
| %zone | if other Projection then MGRS is used |
| %north | if other Projection then MGRS is used |
| %east | if other Projection then MGRS is used |
| %raw_altitude |  |
| %altitude |  (as shown in status bar) |
| %raw_heading |  |
| %heading |  (as shown in status bar) |
| %raw_speed |  |
| %speed |  (as shown in status bar) |
| %raw_clock | plain UTC timestamp - as long number  |
| %clock |  formatted local time (as shown in status bar) |

Additional variables when you are recording a path

| variable | condition / description / sample |
| --- | --- |
| %raw_duration | duration of the activity in milliseconds |
| %duration | formatted duration of the activity (as shown in status bar) |
| %raw_distance |  |
| %distance | (as shown in status bar) |
| %raw_climb | if available |
| %climb | if available (as shown in status bar) |
| %raw_totaltime |  |
| %totaltime |  (as shown in status bar) |

Additional variables from external sensors

| variable | condition / description / sample |
| --- | --- |
| %raw_hr | if available & when using _HR as %_ |
| %hr | if available / |
| %cad | if available / Bike Cadence as integer number (in rpm) |
| %pow | if available / Bike Power as integer number (in watt) |

<!--
keyValues.add(new String[]{"raw_altitude", recToUse.getAlt()+"" });
keyValues.add(new String[]{"altitude", loc.alt2p(recToUse.getAlt()) });
float heading2p = recToUse.getHeading();
keyValues.add(new String[]{"raw_heading", heading2p +"" });
keyValues.add(new String[]{"heading", mStatusLatLonFormatter.heading2p(heading2p) +" "+ mStatusLatLonFormatter.heading2NESWp(heading2p) });
keyValues.add(new String[]{"raw_speed", recToUse.getSpeed()+"" });
keyValues.add(new String[]{"speed", loc.speed2p(recToUse.getSpeed()) });

if (_thePath != null) {
    keyValues.add(new String[]{"raw_duration", recToUse.getDeltaTimeFromStart()+""});
    keyValues.add(new String[]{"duration", mStatusLatLonFormatter.duration2p(recToUse.getDeltaTimeFromStart())});
    keyValues.add(new String[]{"raw_distance", recToUse.getDeltaDistanceFromStart()+""});
    keyValues.add(new String[]{"distance", loc.distance2p(recToUse.getDeltaDistanceFromStart())});
    if (recToUse.getAltGainFromStart() > 0) {
        keyValues.add(new String[]{"raw_climb", recToUse.getAltGainFromStart()+""});
        keyValues.add(new String[]{"climb", loc.alt2p((float) recToUse.getAltGainFromStart())});
    }
    keyValues.add(new String[]{"raw_totaltime", (recToUse.tStamp - _thePath.getFirstEventTs())+""});
    keyValues.add(new String[]{"totaltime", mStatusLatLonFormatter.duration2p(recToUse.tStamp - _thePath.getFirstEventTs())});
}
}

if (_currentHR != null && _currentHR.hr != -1) {
String hrVal;
if (statusDef[14] && mStatusMaxHr > 0) {
    hrVal = ((int) (100 * _currentHR.hr / mStatusMaxHr))+"%";
    keyValues.add(new String[]{"raw_hr", _currentHR.hr+""});
} else {
    hrVal = String.valueOf(_currentHR.hr);
}
keyValues.add(new String[]{"hr", hrVal});
}
--> 

## Start & Stop GPSLogger recording from TASKER {#startstop}

Please use the following intent details if you want to launch GPSLogger and trigger START or STOP from Tasker:

### Start Recording Intent 

```xml
<intent
    android:action="intent.action.STARTREC"
    android:targetPackage="com.emacberry.gpslogger"
    android:targetClass="com.emacberry.gpslogger.GPSLoggerActivity"
/>
```

### Stop Recording Intent

```xml
<intent
    android:action="intent.action.STOPREC"
    android:targetPackage="com.emacberry.gpslogger"
    android:targetClass="com.emacberry.gpslogger.GPSLoggerActivity"
/>
```

So as example, when you want to start logging via Tasker you have to specify in the Tasker Action-Dialog:

| Action | intent.action.STARTREC |
| Cat | none |
| ... | ... |
| Package | com.emacberry.gpslogger |
| Class | com.emacberry.gpslogger.GPSLoggerActivity |

## A Example Tasker Script from GPSLogger User _napalmfires_

See [Forum Post: "Tasker integration basics" (by napalmfires)](https://forum.emacberry.com/viewtopic.php?f=207&t=7692)

[Direct download link to the Scripted provided by napalmfires - use it at your own RISK](https://taskernet.com/shares/?user=AS35m8lkibFqQo6nZByAHUnAtcdNn3YXeA3XkJ5sdJ72c%2B8zNuBxn0wVP5enA2DbkS3%2FkIuR&id=Project%3AGPS+Logger+II#)


<!--
```xml
<TaskerData sr="" dvi="1" tv="5.12.9-beta">
	<dmetric>1080.0,2206.0</dmetric>
	<Profile sr="prof225" ve="2">
    </Profile>
</TaskerData>
```
-->


---
title: <i class="fa-solid fa-mountain"></i> Climbing
menu-title: <i class="fa-solid fa-mountain fa-fw"></i>&nbsp;Climb View
---
# Overview
#


````java
long secondsInClimb = (curActiveClimbObj.vamEndCalcRecord.tStamp - curActiveClimbObj.vamStartCalcRecord.tStamp - curActiveClimbObj.vamTotalDecentDuration) / 1000;
_navPath.mClimbData.mActiveVAM = (float) (curActiveClimbObj.getTotalClimbAlt() * 3600 / secondsInClimb);
if (_recording_state == LOGGING) {
    new RecordValueVAM(curRec.tStamp, _navPath.mClimbData.mActiveVAM));
}
````

## Climb Extraction {#extraction}
(A climb must be more then 99feet/30m uphill)

Minimum climb elevation (%1$s)
In order to adjust the climb-detection in a navigation path you can specify the minimal altitude delta (in Meter) between the lowest and highest points. Minimal value is 30m. This value is used in the "climb-pro formula."

Specify the minimum climb elevation
Current selected minimum altitude difference is: \'%1$s\' (ClimbPro value: %2$s)
Auto enable Climb View
When you are approaching a detected climb the Climb-View will be automatically enabled. The selected display is: \'%1$s\'

## VAM {#vam}
When you record a activity where you have loaded a navigation path **and** the app could extract climb data
([see Climb View for details](../3300-climb/)) GPSLogger will store (while you are in such a detected climb section)
multiple VAM data records in order to be able to show your _velocità ascensionale media_ (translated in English to
mean _average ascent speed_) performance after your activity.

https://en.wikipedia.org/wiki/VAM_(bicycling)


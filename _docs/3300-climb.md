---
title: <i class="fa-solid fa-mountain"></i> Climbing
menu-title: <i class="fa-solid fa-mountain fa-fw"></i>&nbsp;Climb View
---
# Overview
#

https://en.wikipedia.org/wiki/VAM_(bicycling)

````java
long secondsInClimb = (curActiveClimbObj.vamEndCalcRecord.tStamp - curActiveClimbObj.vamStartCalcRecord.tStamp - curActiveClimbObj.vamTotalDecentDuration) / 1000;
_navPath.mClimbData.mActiveVAM = (float) (curActiveClimbObj.getTotalClimbAlt() * 3600 / secondsInClimb);
if (_recording_state == LOGGING) {
    new RecordValueVAM(curRec.tStamp, _navPath.mClimbData.mActiveVAM));
}
````


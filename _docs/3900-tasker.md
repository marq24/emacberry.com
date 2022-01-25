---
title: <i class="fa-solid fa-bolt fa-fw"></i>&nbsp;Tasker Integration
menu-mobile: Tasker Integration
---
 
> need revision

## Send current Location Event {#share}
- need to be enabled in the Location Sharing
- Each time the app would send an eMail also the selected TASKER-TASK will be executed and the following paramzters
- will be submitted:
 
- 
 
```
list add ("action", "notify")
if (recToUse != null) {
    keyValues.add(new String[]{"raw_latitude", recToUse.getLatitude()+""});
    keyValues.add(new String[]{"raw_longitude", recToUse.getLongitude()+""});
    UTMProjection proj = recToUse.getProjection();
    if (proj == null) {
        keyValues.add(new String[]{"latitude", mStatusLatLonFormatter.lat2p(recToUse.getLatitude(), false, false)});
        keyValues.add(new String[]{"longitude", mStatusLatLonFormatter.lon2p(recToUse.getLongitude(), false, false)});
    } else {
        if (proj instanceof MGRSProjection) {
            keyValues.add(new String[]{"mgrsprojection", proj.toString()});
        } else {
            keyValues.add(new String[]{"zone", proj.getZone()});
            keyValues.add(new String[]{"north", proj.getN()});
            keyValues.add(new String[]{"east", proj.getE()});
        }
    }
    keyValues.add(new String[]{"raw_altitude", recToUse.getAlt()+"" });
    keyValues.add(new String[]{"altitude", loc.alt2p(recToUse.getAlt()) });
    float heading2p = recToUse.getHeading();
    keyValues.add(new String[]{"raw_heading", heading2p +"" });
    keyValues.add(new String[]{"heading", mStatusLatLonFormatter.heading2p(heading2p) +" "+ mStatusLatLonFormatter.heading2NESWp(heading2p) });
    keyValues.add(new String[]{"raw_speed", recToUse.getSpeed()+"" });
    keyValues.add(new String[]{"speed", loc.speed2p(recToUse.getSpeed()) });
    keyValues.add(new String[]{"raw_clock", recToUse.tStamp+"" });
    keyValues.add(new String[]{"clock", sdfTime.format(recToUse.tStamp)});

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

if (_currentCAD != null && _currentCAD.cad != -1) {
    keyValues.add(new String[]{"cad", String.valueOf(_currentCAD.cad)});
}

if (_currentPOWs != null && _currentPOWs[0].pow != -1) {
    String powVal ="";
    if (_currentPOWs[0].pow != -1) {
        powVal = String.valueOf(_currentPOWs[0].pow);
    }
    if (_currentPOWs[1].pow != -1) {
        powVal = powVal + "|" + _currentPOWs[1].pow;
    }
    if (_currentPOWs[2].pow != -1) {
        powVal = powVal + "|" + _currentPOWs[2].pow;
    }
    keyValues.add(new String[]{"pow", powVal});
}
```
 

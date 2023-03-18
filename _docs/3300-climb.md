---
title: <i class="fa-solid fa-mountain"></i> Climb-Detection & Handling
sub-title: Not only for Hiking and Biking enthusiasts
menu-title: <i class="fa-solid fa-mountain fa-fw"></i>&nbsp;Climb-Detection
---

# Overview

Being able to judge your walking, hiking or cycling performance in flat terrain is relatively easy (of course this
depends on your overall fitness level & endurance).

<!-- My personal experience (living in quite a flat area) is that it will get quite challenging to judge the difficulty
> of a route when you move into hilly regions. -->

When you've ever planned (or are going to plan) a tour in an alpine area, knowing the climbs ahead of you can become very
essential. Additionally, being able to gt some information while you are climbing like: how many meters you have already
completed or how many meters you still have to go, can become quite a motivating factor.

GPSLogger is trying to support you in this kind of challenges by offering a Climb-Detection algorithm and a dedicated
view providing you with current climb information.

Since GPSLogger obviously hasn't implemented a crystal ball, it's required to load a navigation path that you would
like to follow (so you have to have an already planed route/path).

# Requirements
- Loaded a Navigation Path (that contains elevation data)
- Application Settings > Speech & Audio Notifications > TurnByTurn Instructions & Climb-ahead > Climb ahead Information <i class="fa-solid fa-toggle-on fa-fw"></i>
- ... > TurnByTurn Instructions & Climb-ahead > Minimum climb elevation value specified (_climb score_)

# The Climb-Detection algorithm {#algo}
## Definition of a Climb

GPSLogger will identify and classify climbs based on the needs of the user whilst they are navigating. It will provide
the user with key information about those climbs. This includes:

- the number of climbs
- the distance to the next climb ahead of you
- the length of each climb
- the elevation gain left to complete on the current climb
- the current gradient

## Essentials about gradient (or slope)

The _grade value_ is a critical part of how GPSLogger detects climbs, so it is useful to make sure that the concept is
understood. GPSLogger uses **grade as a %** in its calculations. Garde or slope is the rise (gain in elevation) over the
horizontal distance travelled. So when you're travelling 500 m and you gain 20 m of height, then the grade is 4%
(20 m divided by 500 m, multiplied by 100 - or easier 20 divided by 5).

## How does GPSLogger identify climbs?

GPSLogger will identify and show climbs by using a scoring system to select the climbs detected by the elevation changes
in your navigation path - this value is called _climb score_ and will be calculated as follows.

**Climb Score = length of the climb (in meters) x grade (in percent)**

Additionally, in the climb detection the app uses the _climb score_ to classify the climbs. GPSLogger use an objective
measure and treats each mountain isolated from each other by the following climb score value:

- Category 4 > 8000
- Category 3 > 16000
- Category 2 > 32000
- Category 1 > 48000
- HC (Hors Category) > 64000

Please note, that the categorizations can differ from those you know from professional road cycling, where the
categorization of climbs is subjective and controlled by the race organizers who will take into consideration what elevation
the riders have already climbed when categorizing each climb.

### The rules for considering an _elevation change over time_ as a climb in GPSLogger
All rules must be satisfied.

1. At least a total length of 500 m
2. The average grade must be 3% or more
3. The resulting _climb score_ must exceed the selected minimum _climb score_ value<br/>
   (Application Settings > Speech & Audio Notifications > TurnByTurn Instructions & Climb-ahead > Minimum climb elevation value
4. A climb must have a minimum elevation gain of 30 m

### Examples
Here are some examples to illustrate how GPSLogger will apply the given rules to the data in your navigation path. In this
example it's assumed you have configured a _climb score_ of 3100:

1. A length of **850 m** with an average grade **3.1%** -> **not** detected as climb (Rule 3), _climb score_ not reached
   <br/>\[Climb Score: 850 x 3.1 = 2635\]
2. A length of **1300 m** with an average grade **3.8%** -> valid climb.
   <br/>\[Climb Score: 1300 x 3.8 = 4940\]
3. A length of **510 m** with an average grade **6.2%** -> valid climb.
   <br/>\[Climb Score: 510 x 6.2 = 3162\]
4. A length of **510 m** with average grade **6.0%** -> **not** detected as climb (Rule 3), _climb score_ not reached
   <br/>\[Climb Score: 510 x 6 = 3060\]
5. A length of **490 m** with average grade **12.3%** -> **not** detected as climb (Rule 1), too short (even if _climb score_ = 6027)
6. A total length of 18 kilometers, the first **5 km** with average grade **7.2%** and the remaining **13 km**
   with an average grade of **2.1%** -> **not** detected as (Rule 2).
   <br/>Note: GPSLogger will identify the first shorter climb, but not the full 20 km distance in this case.

The GPSLogger climb detection algorithm does not guarantee that the summit of a climb will be included in a climb, if it
flattens out near the top - but the app always tries to end climbs at the highest detected point.

### What to do, when you do not see any Climbs in your loaded navigation path?

First make sure that the path you have loaded as navigation path contains elevation data. If it does, then the elevation
profile is not meeting the requirements of GPSLoggers climb detection. For users in flat regions (like myself) this may
be frustrating, but GPSLogger is designed to only report significant climbs. The minimum _climb score_ is 3000.

### Possibility of breaking up climbs in case of a descent?

If the overall rule#2 (average grade >= 3%) is not broken then the algorithm allows downhill sections within a certain
range - as the longer (distance wise) a climb is, the longer a flat/decent part can be. When the decent is more than 50% of
the climb (elevation meter wise) the app will consider the climb has ended (at the highest point).

# Climb View {#view}
The climb view will only show data if you have loaded a navigation path that contains elevation data. Furthermore, this
data has to contain elevation changes that qualify for **one** or **multiple climbs** [see climb detection](#algo).

The Climb view always shows the climb that is the closest to your current position (but in the climbs are ordered by the
sequence of their occurrence in the loaded navigation path). So please don't get confused when you start your activity
and the Climb View will doesn't show the first climb in the sequence.

## Before or after a Climb
<span class="shot">![view-climb](/assets/img/gpsl/view-climb01.png)</span>
- Graph: Showing the profile of the climb (green: almost flat - red/purple: steep)
- Large Font: Showing the direct distance to the closest climb (can be the climb you just have completed)
- Lower left corner: current climb position (if there are multiple climbs on your route - as example a number like 2/7
  means that is the second climb in a sequence of a total of seven is currently shown)
- Upper middle: ⛰ total elevation meters of the climb
- Upper right: 📏 total distance of the climb
 
So in this example the climb is the only climb of the complete route. It has a length of 1,07 km, and you need to
climb a total of 43,0 m. The Climb has a direct distance (as the crow flies) of 14,7 km to your current position
(not considering the planed route).
<br class="shot-end">

## During a Climb

<span class="shot">![view-climb](/assets/img/gpsl/view-climb02.png)</span>
When you are in the climb the distance to the climb will change into two lines:
- Large Font Top: completed elevation gain
- Large Font Bottom: completed distance
- Dot-Marker: your actual position in the climb profile showing (might be too small) the current grade

So here in this example you have already completed 25,5 m (of a total of 45.0 m) in elevation gain, and you have
passed 675 m (of a total of 1,07 km) distance wise.   
<br class="shot-end">

# Auto enable Climb View when approaching a Climb

In the Application Settings when you select > Speech & Audio Notifications > TurnByTurn Instructions & Climb-ahead > 
Auto enable Climb View in _Primary View_, _Secondary View I_ or _Secondary View II_ the app will automatically switch
to the Climb View in the selected main screen area once you are approaching the next climb (and switch back to the
original view once the climb has been completed).

> Even if I can use my Di2 Shifting levers to switch the current view while cycling - once I am approaching a climb I
> want to switch my main map view automatically to the climb view - and once I have mastered the climb I find it
> convenient that the map will be restored as main view - since while I am in a climb I will use the TextToSpeech
> TurnInstructions anyhow (if there are any).


# VAM {#vam}

> need revision

When you record an activity where you have loaded a navigation path **and** the app could extract climb data
([see Climb View for details](./3300-climb.html)) GPSLogger will store (while you are in such a detected climb section)
multiple VAM data records in order to be able to show your _velocità ascensionale media_ (translated in English to
mean _average ascent speed_) performance after your activity.

https://en.wikipedia.org/wiki/VAM_(bicycling)

````java
long secondsInClimb = (curActiveClimbObj.vamEndCalcRecord.tStamp - curActiveClimbObj.vamStartCalcRecord.tStamp - curActiveClimbObj.vamTotalDecentDuration) / 1000;
_navPath.mClimbData.mActiveVAM = (float) (curActiveClimbObj.getTotalClimbAlt() * 3600 / secondsInClimb);
if (_recording_state == LOGGING) {
    new RecordValueVAM(curRec.tStamp, _navPath.mClimbData.mActiveVAM));
}
````


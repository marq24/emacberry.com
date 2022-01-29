---
title: <i class="fa-solid fa-window-restore"></i> Multi Views
sub-title: Customize your GPSLogger II Screen
menu-title: <i class="fa-solid fa-window-restore fa-fw"></i>&nbsp;Multi Views
---
# Overview

GPSLogger offers multiple ways to allow you to see the different data simultaneously. The simplest way is to enable two
additional views beside the main view.

As already described in the [Main Views Section](./1200-views.html#views) it's possible to start GPSLogger with additional
views (or temporary enable/disable them via the  <i class="fa-solid fa-ellipsis-vertical"></i>  main menu) and adjust
the aspect ratio between the main and the additional views. You can think of each of the screen parts as a container,
that is capable of showing an own screen instance - just in a different size. The alignment of the three views depends
on the orientation of your decide (portrait or landscape).

> With the concept of allowing up to three different views to be present at once I had the opinion that this would give
> the user all the flexibility that is needed. As more external sensors has become available, there was the need to
> offer an additional approach to customize the available screens.

<span class="shot">![view-multiview](/assets/img/gpsl/view-multiview-3x.png)</span>
So beside the possibility to show 3 different views on the main application screen, four completely free configurable
views have been added. These views called _Multi View I_ - _Multi View IV_. For each ot this four views you
can select up to 6 different values tobe displayed.

Since you can of course also show different _Multi Views_ as one of the three main views, you have the option to
configure & show up to **18 different values on your main screen** (3 x 6 values). That might already feels like
sitting in the cockpit of a plane.

But of course you **don't have to** specify for each multi view 6 different values - the size of each value will be
adjusted based on the overall screen space, since each value will consume the same space. So the layout of the views is
totally dynamic.

To make the setup process even more complex the multi-view field definitions also support the multiple profiles feature.
So for each of your activities you can define a different set of multi-view fields.<br class="shot-end">

# Available Fields for Multi Views

| Field | Icon | Description |
| --- | --- | --- |
| Clock | 🕒 | showing the current time |
| Speed | | showing the current speed |
| Ø Speed | | if recording, this will show the average speed |
| Total Distance | 📏 | if recording, this will show the total distance |
| Elapsed Time/Duration | ⏱ | if recording, this will show the total time (excluding breaks)  |
| Altitude | ⬆ | current elevation (including corrections/adjustments) |
| Course | 🧭 | current direction/heading |
| Ascent | ⛰ | the total sum of altitude that was gained over time |
| Grade | 📐 |  the current slope (based in the previous und current elevation) |
| VAM | ↗ | The current VAM value ([see Climb View for details](./3300-climb.html#vam)) |
| Next Turn | | when a navigation path that contains TurnByTurn information is loaded - additional the distance to the next waypoint will be shown |
| Relative Speed | | This is the speed you approaching to the current active waypoint (next navigation target). E.g. when you are sailing, it can be very interesting to know your relative speed to the target |
| Distance to Finish | 🏁 | when a navigation path is loaded the remaining distance till the end of this navigation path |
| # BTLE | | Number of currently detected BTLE Beacons with a specific UUID |
| Gear | ⚙ | front & rear gear information (if Di2 is bound) |
| Ratio | ⚙ | the resulting gear ratio (if Di2 is bound) |
| Heartrate | ♥ | your current heartrate (in beats per minute or %) as provided via an external sensor |
| Ø Heartrate | ♥ | if recording, this will show the average heartrate |
| Heartrate Ø last 3sec | ♥ | if recording, this will show the average heartrate of the past 3 seconds |
| Heartrate Ø last 10sec | ♥ | if recording, this will show the average heartrate of the past 10 seconds |
| Heartrate Ø last 30sec | ♥ | if recording, this will show the average heartrate of the past 30 seconds |
| Cadence | 🚴 | your current cadence (in rotations per minute) as provided via an external sensor |
| Ø Cadence | 🚴 | same as for ♥ |
| Cadence Ø last 3sec | 🚴 | same as for ♥ |
| Cadence Ø last 10sec | 🚴 | same as for ♥ |
| Cadence Ø last 30sec | 🚴 | same as for ♥ |
| Power | ⚡ | your current cycling power (in watt) as provided via an external sensor |
| Ø Power | ⚡ | same as for ♥ |
| Power Ø last 3sec | ⚡ | same as for ♥ |
| Power Ø last 10sec | ⚡ | same as for ♥ |
| Power Ø last 30sec | ⚡ | same as for ♥ |
| Power Balance L/R in % | ⚡ |  balance between Left & Right leg from the cycling power when provided from the external sensor |
| Ø Power Balance L/R in % | ⚡ | same as for ♥ |
| Power Balance Ø last 3sec | ⚡ | same as for ♥ |
| Power Balance Ø last 10sec | ⚡ | same as for ♥ |
| Power Balance Ø last 30sec | ⚡ | same as for ♥ |
| Stoke Rate | 🚣 | your current heartrate (in stokes per minute) as provided via an external sensor |
| Ø Stoke Rate | 🚣 | same as for ♥ |
| Stoke Rate Ø last 3sec | 🚣 | same as for ♥ |
| Stoke Rate Ø last 10sec | 🚣 | same as for ♥ |
| Stoke Rate Ø last 30sec | 🚣 | same as for ♥ |
| Stoke Count | 🚣 | total stoke count of rowing session |
| Stoke Distance | 🚣 | total Stroke distance of rowing session |

Is there any value you miss? Please let me know! 

> As example - for cycling, I have the map as main view and have the three different multi views configured to show
> 4 different fields each:
> - View 1: 
>   - Power
>   - Heartrate
>   - 30Sec Ø Power
>   - Speed 
> - View 2:
>   - Distance
>   - Distance to Finish
>   - Elapsed Time
>   - Next Navigation Turn
> - View 3:
>   - Accent
>   - Grade
>   - VAM
>   - Next Navigation Turn

---
title: <i class="fa-solid fa-window-restore"></i> Multi Views
sub-title: Customize your GPSLogger II Screen
menu-title: <i class="fa-solid fa-window-restore fa-fw"></i>&nbsp;Multi Views
---
# Overview
In the past years I followed the approach to define fixed views that going to display specific information. E.g. there
is the Speed-View, the Elevation-View or the Heartrate-View.

<span class="shot">![view-multiview](/assets/img/gpsl/view-multiview-3x.png)</span>
With the concept of allowing up to three different views to be present at once I had the opinion that this would give
the user all the flexibility that is needed. As more external sensors has been added, it turned out that this initial
approach might not be sufficient any longer.

So beside the possibility to show 3 different views on the main application screen, four completely free configurable
views have been added. These views called _Multi View I_ - _Multi View IV_. For each ot this four views you can select
up to 6 different values tobe displayed.

Since of you can of course also show different _Multi Views_ as one of the three main views, you have the option to
configure & show up to **18 different values on your main screen** (3 x 6 values). Which might already feels like
sitting in the cockpit of a plan.

But of course you don't have to specify for each multi view 6 different values - the size of each value will be adjusted
based on the overall screen space, since each value will consume the same space. So the layout of the views is totally
dynamic.<br class="shot-end">

To make the setup process a bit more complex the multi view field definitions support multiple profiles - so for each of
your activities you can define a different set of fields.

# Available Fields for Multi Views

| Field | Icon | Description |
| --- | --- | --- |
| Clock | 🕒 | |
| Speed | | |
| Ø Speed | | |
| Total Distance | 📏 | |
| Elapsed Time/Duration | ⏱ | |
| Altitude | ⬆ | |
| Course | 🧭 | |
| Ascent | ⛰ | (climbed elevation) |
| Grade | 📐 |  current  |
| VAM | ↗ | The current VAM value ([see Climb View for details](../3300-climb/#vam)) |
| Next Turn | | (when avail.) |
| Relative Speed | | This is the speed you approaching to the current active waypoint (next navigation target). E.g. when you are sailing, it can be very interesting to know your relative speed to the target |
| Distance to Finish | 🏁 | |
| # BTLE | | Number of BTLE Beacons with a specific UUID |
| Gear | ⚙ | (if Di2 is bound)|
| Ratio | ⚙ | (if Di2 is bound) |
| Heartrate | ♥ | |
| Ø Heartrate | ♥ | |
| Heartrate Ø last 3sec | ♥ | |
| Heartrate Ø last 10sec | ♥ | |
| Heartrate Ø last 30sec | ♥ | |
| Cadence | 🚴 | |
| Ø Cadence | 🚴 | |
| Cadence Ø last 3sec | 🚴 | |
| Cadence Ø last 10sec | 🚴 | |
| Cadence Ø last 30sec | 🚴 | |
| Power | ⚡ | |
| Ø Power | ⚡ | |
| Power Ø last 3sec | ⚡ | |
| Power Ø last 10sec | ⚡ | |
| Power Ø last 30sec | ⚡ | |
| Power Balance L/R in % | ⚡ | |
| Ø Power Balance L/R in % | ⚡ | |
| Power Balance Ø last 3sec | ⚡ | |
| Power Balance Ø last 10sec | ⚡ | |
| Power Balance Ø last 30sec | ⚡ | |
| Stoke Rate | 🚣 | |
| Ø Stoke Rate | 🚣 | |
| Stoke Rate Ø last 3sec | 🚣 | |
| Stoke Rate Ø last 10sec | 🚣 | |
| Stoke Rate Ø last 30sec | 🚣 | |
| Stoke Count | 🚣 | |
| Stoke Distance | 🚣 | |

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

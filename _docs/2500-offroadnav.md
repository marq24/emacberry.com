---
title: <i class="fa-solid fa-diamond-turn-right"></i> Off-road Navigation
menu-title:  <i class="fa-solid fa-diamond-turn-right fa-fw"></i>&nbsp;Off-road
---

# Overview

It's not always possible to extract TurnByTurn instructions for a previous recorded path (or a path that you have
downloaded from another source) \[e.g. a cycling or hiking (round)trip that you have downloaded in GPX or KML format\].
The reason for this missing TurnByTurn information is mainly, that there is no OpenStreetMap data available in the given
region - or even simpler - there are no roads, path's or tracks - it's really just all OFF-ROAD terrain.

When you want to follow a path without TurnByTurn instructions, then it's impossible for the app to know if there are
any junctions on your route. The app will always point into the direction of the _next calculated waypoint_ on the
given route.

# <span class="material-icons">info</span> DISCLAIMER
> IN NO EVENT WILL emacberry.com OR ITS LICENSORS BE LIABLE FOR ANY INJURIES OR OTHER DAMAGES, HOWEVER CAUSED AND
> REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF THE USE OF THE SOFTWARE, EVEN IF emacberry.com HAS BEEN ADVISED
> OF THE POSSIBILITY OF SUCH DAMAGES.

# <span class="material-icons">warning</span> DANGER
> The app is **JUST** pointing into the direction of the next calculated Waypoint. There does not have to be a direct
> link from your current location to the target the app is pointing to.
>
> **YOU HAVE TO REVIEW ALWAYS the TERRAIN and the WAY AHEAD of YOU**
>
> Use this function **ONLY** if you are aware of the risk of injury, if you feel sufficiently physically fit and trust
> the application.

# Outdoor Navigation - Theory of Operation {#intro}

Having in mind that a path is nothing more than a list of locations which follow each other the concept of outdoor
navigation is working in GPSLogger II is quite easy to understand.

Before you start you have to know, in which direction your previously recorded path (or imported GPX file) is pointing
to. The locations on the path are ordered from point A to the point B or from B to A (or if they are ordered clockwise
or counterclockwise for round-trips). This is a very important aspect for &quot;your&quot; way and the direction you
want to take. In this documentation it is assumed that you have a path that is going from point A to point B and you
want to follow it in the same direction (so you are currently at location A and want to arrive at location B).

For the proper functionality of the outdoor navigation in GPSLogger II two settings in the option's dialog have been
introduced which have a major influence on the behaviour of the navigation software. If you have understood the concept
how outdoor navigation is working in GPSLogger II you can adjust these two values 'When Waypoint is reached' &
'Distance to next Waypoint' to your likings. In this documentation it is assumed the following (default) values are
present:

- When Waypoint is reached: 15 m/50&nbsp;ft
- Distance to next Waypoint: 250 m/820&nbsp;ft

Please note that you do not have to be in logging mode in order to use the outdoor navigation function of GPSLogger II.

1. Start GPSLogger II and open the Path-Manager

2. Select the path you would like to follow

3. Select **&nbsp;Load NaviPath**<br/>
   **or** (if you are at location B and want to go to location A, then you have to select)<br/>
   **Load inverted NaviPath**

4. GPSLogger will now calculate the nearest Waypoint (on the loaded Path) from your current location – this Waypoint
   becomes the first location, to which GPSLogger II will be guiding you (pointing towards the direction in the
   direction view).<br/><br/>
   Please note, that the direction view is highly dependent based on your current course. In order that your
   BlackBerry&reg; device is able to calculate your current course **you have to be in movement**. In any other case you
   will notice that the compass needle will be just rotating randomly – in the case that your device have difficulties
   to calculate the course please switch to the path view because this provides you also a good orientation in which
   direction you have to go (use also the ZOOM IN function in this case).<br/><br/>
   Please note additionally that it could happen, that the next waypoint will not be calculated correctly (reported by a
   user) in this case please make use of the <span class="btn">![button-rec](/assets/img/gpsl/button-resetnav.png)</span>
   **Reset Navigation** overlay button. in order to rerun the _find the closest point on the path to your current
   location_ and calculate the next waypoint.

6. Now you should move towards the direction GPSLogger II is pointing to. Please have in mind (depending on your
   physical start location) that GPSLogger II cannot take any natural barriers like buildings or rivers into account. It
   will be assumed you are already quite close to one of the locations that are along the path.

7. When the distance between your current location and the point to which GPSLogger II is pointing at the moment is less
   than 15 m/50&nbsp;ft (depending on your 'When Waypoint is reached' setting) the current waypoint is considered as
   reached and the next waypoint to reach will be automatically calculated and will be set as the new location to reach.

8. Now you are in a loop of step 6) until you reach the final/last location (waypoint) that is recorded on the path, and
   you should then finally have reached your final destination.<br/><br/>
   Depending on your sample interval GPSLogger II will change the color of the path from light grey to dark grey when
   GPSLogger II believes you are on the path. "_Being on the path_" means, that you reached consequently the calculated
   locations. Once GPSLogger II is in this mode only waypoint that are ahead in the navigation path will be considered
   as possible next waypoints. You can reset this behavior by using the 
   <span class="btn">![button-rec](/assets/img/gpsl/button-resetnav.png)</span> **Reset Navigation** overlay button.

## How GPSLogger II will calculate the next waypoint? {#nextwaypoint}

Once you have reached (or are close to) the location to which GPSLogger II has guided you, the _next_ waypoint will be
calculated automatically. Therefore, GPSLogger II will "look ahead" in the loaded navigation path and calculates to each
waypoint the distance from your current location – once the distance of a waypoint is greater than 250 m/820&nbsp;ft
(depending on your 'Distance to next Waypoint' setting) it is qualified to be the _next_ waypoint to which GPSLogger II
will guide you. Each location on your navigation path could become potentially a waypoint during the outdoor navigation.

Technically GPSLogger II will not keep you on the navigation path exactly waypoint by waypoint of the loaded navigation
path – it is more that the application will find the next point (on the path) in the specified distance from your
current location and take this point as the _next_ waypoint.

## What happens, if you do not reach a waypoint?

If you have a too small 'When Waypoint is reached' setting, or you have to go an alternative route (e.g. because of an
obstacle) it could happen, that you do not reach the waypoint to which GPSLogger II is trying to guide you too.

In this case GPSLogger II is able to detect, that you are actually moving away from the target (instead of approaching
it) and the nearest waypoint on the path will be calculated again automatically which could take few moments. Once the
calculation is finished you will be directed to the new location. If this autocorrection fails then there are additional
menu items that could be used to get back on your way.

## Additional Overlay Buttons

| Icon | Description |
| --- | --- |
| <span class="btn">![button-rec](/assets/img/gpsl/button-resetnav.png)</span> | **Reset Navigation**<br/>When you press space GPSLogger II falls back to it's start procedure of the outdoor navigation The nearest location in the path will be calculated and the nearest by location will be your next target. You will notice, that the color of the path is changing again to light grey and GPSLogger II will consider all locations in the path again as possible next waypoints. |
| <span class="btn">![button-rec](/assets/img/gpsl/button-nextwp.png)</span> | **Next Waypoint (+)**<br />Calculating the next possible waypoint based on your current location. |

# Outdoor navigation challenges {#challanges}

When you are using outdoor navigation there is a big difference compared to street navigation or also called Turn by
Turn navigation. In street navigation you can rely on edge calculations and relations. Outdoors you do not have any kind
of edge model that could be used. This difference causes an issue you might encounter when you like to start a round
trip.

<span class="shot">![nav-outdoor-challange](/assets/img/gpsl/nav-outdoor-challange.png)</span>
The image to the left is showing a typical round trip start situation. The start and the end of the round trip have the
same waypoint. The green line in this diagram is the starting path while the red one is the end of the round tip.

At the start of the navigation (or if the application failed to detect the arrival at a waypoint) GPSLogger II is
calculating the distance of the current location to all points of the path. GPSLogger then assumes that the point with
the closest distance to your current location is the best that can be chosen to start/continue with the navigation. Most
of the time this works quite rock solid – but in the illustrated situation once you start at location X<sub>3</sub> you
will realize, that this approach could lead to the wrong conclusion.

When you start your round trip near X<sub>3</sub>, then GPSLogger II will calculate the closest point to your current
location – and the result of this calculation will be either X<sub>41</sub> or X<sub>42</sub>
(both of them are of course on the way back home) and not X<sub>4</sub>
which is the point you want to arrive at.

Furthermore, you have to know that once GPSLogger II _believes_ you are on the path it will be just looking ahead on the
path to calculate the next waypoint. So once GPSLogger II has taken X<sub>42</sub> as your current location on the path
it will continue guiding you to X<sub>43</sub>, X<sub>44</sub>
and X<sub>45</sub>. This is for sure not what you want! The good news is that GPSLogger II will try to autocorrect this
error. Once the distance of the location is increasing (a couple of times) instead of (expected) decreasing GPSLogger II
itself will assume it is somehow off the current path and start to look again for the location that is closest to your
current location – in the example you are hopefully much closer to X<sub>4</sub> and GPSLogger II should find it
finally.

So when you are on a round trip that has a common start and end point, then expect some problems concerning the
direction on which you will be guided. Once you will leave the common part GPSLogger II will autocorrect its next target
location, and you should be finally on the right way.
<br class="shot-end">

# Benefits of logging while navigating

Even if you do not have to run the logger while you are following another path it can have some benefits. When you are
using the outdoor navigation function of GPSLogger II you will have in the Timing-View and in the direction view
additional information about the distance along the path between your current position and the final end point and
depending on your current speed the estimated time of arrival
(ETA).

Calculating the ETA based on the current speed only can be quite inaccurate. When you are actually logging GPSLogger II
can use your average speed to calculate the ETA - in most of the cases this will be way more accurate. But there is more
- when the ETA will be calculated based on the average speed then you will see an additional up/down arrow behind the
ETA. This arrow depends on your current speed compared to the average speed - when you are actually faster than the
current average speed, then the calculated ETA will be finally smaller and vice versa.

# Special function in logging mode: 'Bring me Back (route)'

This function will take the recorded path, invert it and load it automatically as navigation path. Now instantly the
pointer (in direction mode) guides you to the last waypoint instantly (in the specified distance). Once you have reached
that point the application will calculate automatically the waypoint before that - that continues until you reach the
origin (start point).

So this is a macro function for the manual steps: Stop logging (& save path), open Path-Manager, select path & finally '
Load inverted NaviPath'.
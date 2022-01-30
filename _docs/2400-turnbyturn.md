---
title: <i class="fa-solid fa-route"></i> Turn-by-Turn Navigation
menu-title: <i class="fa-solid fa-route fa-fw"></i>&nbsp;Navigation
---

# Overview

GPSLogger supports different input formats for navigation turn-by-turn Information...  

The app makes use of the **online** routing engine [openrouteservice.org](https://openrouteservice.org/) (HeiGIT gGmbH /
University of Heidelberg). One of the reasons why GPSLogger makes use of openrouteservice.org is simply because I had
the change to be part of the development team and contributed the current active road bike profile (beside some other
internal core things).

You have multiple options to start the TurnByTurn navigation function in GPSLogger:
- When creating a route with openrouteservice.org the route could be exported as JSON and then directly imported into 
  GPSLogger (as alternative you can 'beam' the route to emacberry.com backend and import the route from PathManager)
- A path that **has TurnInfo** could be [loaded as (reverse) navigation path (from PathManager)](./1500-pathman.html#navipath)
- You can touch & hold any point on the map and then select from the popup-menu the item
  <i class="fa-solid fa-diamond-turn-right"></i> _Directions..._
- When you are recording, you can select from the application main menu the item _Bring me Back_ which will start a
  online routing request back to your staring location 

Details about [how to plan a route can be found in the Plan a Route Section](./2600-routeplan.html)

# Requirements

- Temporary online connection to request routing data from the routing-service.
<br/>**or**<br/> 
- A Path in PathManager that is marked with the **has TurnInfo** addon

Once the navigation path (your planed route) is loaded the application does not need the online connection any longer.
But if you leave the planed route by more than 50 m, then the application will try to find the shortest way back to
the initial planed route - for this type of _Detour-Routing-Requests_ GPSLogger requires an online connection.

# Show next TurnInfo as embedded image

> need revision
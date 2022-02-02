---
title: <i class="fa-solid fa-paper-plane"></i> Plan a Route
menu-title: <i class="fa-solid fa-paper-plane fa-fw"></i>&nbsp;Planing (Website)
---
> (forked from [openrouteservice.org](openrouteservice.org))

# Overview

Since a couple of month GPSLogger allow you to follow a previously planed route with turn-by-turn instructions. The
planing & transfer process of these routes have been sub-optimal in the past, and so I am very happy to let you know
that I can provide now a separate site that is dedicated to route planing that should give you all the needed features
and is easy to use.

# Requirements

- PC/Mac to use the website (not optimized for mobile usage)
- Temporary online connection (to transfer the route to GPSLogger)

## You find the service at the following URL: [https://route.emacberry.com/](https://route.emacberry.com/)

Creating a route (based on OpenStreetMap data) is now very easy and IMHO convenient to use. Some turn instructions might
be confusing but are related to the data source - some optimizations are applied during the import, but it is always
recommended checking the final route, before you start your trip.

## Save a created Route on the website

Typically, all route services and websites I am aware of require registering and create an account - GPSLogger II route
service is different! - **No registration** - **no login** - **no personal data is stored**. If you want to save/store
a created route, simply create a browser bookmark of the site, and you are done. You simply can restore the route by
opening the bookmark any time later.

Here is an example route link: [https://route.emacberry.com/directions?n1=52.033868&n2=8.853757&n3=15&a=52.038178,8.834279,52.035162,8.864551,52.026251,8.861246,52.024944,8.847771,52.027809,8.831999,52.037987,8.834236&b=1c&c=0&g1=-1&g2=0&h2=3&k1=en-US&k2=km](https://route.emacberry.com/directions?n1=52.033868&n2=8.853757&n3=15&a=52.038178,8.834279,52.035162,8.864551,52.026251,8.861246,52.024944,8.847771,52.027809,8.831999,52.037987,8.834236&b=1c&c=0&g1=-1&g2=0&h2=3&k1=en-US&k2=km)

## Transfer a route to your mobile device

I have decided to use a very simply way to connect the website with your mobile device - during the planing phase your
web browser and your mobile phone have something in common: **your current location**! It's true that this is not
highly secure - but since GPSLogger is not used by 10 million people the location is some sort of unique id. Please also
note, that no additional/personal or device related information will be transferred. So to send your current route it's
just two simple steps (Please note, that of course it#s required that allow your browser and your mobile device to get
your current location):

<span class="shot">![web-routing-export](/assets/img/gpsl/web-routing-export.png)</span>
After you have completed your route you can select the <i class="fa-solid fa-paper-plane"></i> **Push Route** icon -
this will open a dialog with some additional information - press there the **PUSH** button to finally submit the
current route to the emacberry.com backend.<br class="shot-end"/>

<span class="shot">![web-routing-import](/assets/img/gpsl/web-routing-import.png)</span>
Once the route is submitted to the backend you can open the GPSLogger II PathManager and select there from the Menu
the **Import Route from Server...** function. This will request (based on your current location) the latest route that
was submitted to the backend within the last 15min and in the range of 5 km of your current location.

So in order to use this feature, make sure, that your browser running on your PC/mac and your mobile device show the
same location information.<br class="shot-end"/>

## Export as GPSLogger II Route JSON file

If you don't like to transfer the route via the emacberry.com backend to your mobile device you can always use the
<i class="fa-solid fa-download"></i> export function as alternative and transfer the route JSON file manually over to
your mobile device. Once the file is copied to your mobile you can import the created route JSON file as any other GPX,
KML or TCX via the PathManager import functionality \[or open the file on the device (e.g. the eMail attachment)\ and
select GPSLogger from the list of available file handlers].
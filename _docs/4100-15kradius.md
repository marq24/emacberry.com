---
title: <i class="fa-solid fa-circle-dot"></i> Show your 15 km Radius
menu-title: <i class="fa-solid fa-circle-dot fa-fw"></i>&nbsp;15 km Radius
---

# Overview

This functionality might be only related to Germany - nevertheless it might be useful in other countries as well. In the
first Corona-related-lockdown there was a restriction, that you should stay in your local area in a radius of 15 km
around your home.

In order to give users a hint how far this 15 km would be from a specific location, GPSLogger is able to render a well
visible cycle around any location that you load into the application.

> In order to make this feature more useful also for other regions, I have added _Implement custom radius settings_ on
> my TODO-List - let me know if you are interested.  

# Requirement

- **Load a Location via the LocationManager**
- Map View: Appearance & Startup > Available View configuration... > OpenMapData View <i class="fa-solid fa-toggle-on"></i>
- The Map have to be displayed as the **main view** (15 km radius will not be rendered in Secondary View I or II)
- Appearance & Startup > Map & Path View Settings... > Render 15 km radius <i class="fa-solid fa-square-check"></i>   

# Example Screenshots
<span class="shot">![15km-radius-on-map](/assets/img/gpsl/view-map15k01.png)</span>
<span class="shot">![15km-radius-on-map](/assets/img/gpsl/view-map15k02.png)</span>
<span class="shot">![15km-radius-on-map](/assets/img/gpsl/view-map15k03.png)</span>



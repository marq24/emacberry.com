---
title: <i class="fa-solid fa-house"></i> Home Assistant
sub-title: Use GPSLogger II as Location Sensor with your Home Assistant installation
menu-title: <i class="fa-solid fa-house fa-fw"></i>&nbsp;Home Assistant
---

# Overview

When you have an own [Home Assistant](https://www.home-assistant.io/) instance running at you home and if this
installation is reachable via a public URL (__https__), then you can use GPSLogger II as a location sensor.

Once you have specified your Server URL and
a [Long-lived access token](https://developers.home-assistant.io/docs/auth_api/#long-lived-access-token),
GPSLogger II can constantly send your current location to your home. You do not have to start any logging! (This
behaviour can be configured).

<i class="fa-solid fa-hand-point-up fa-fw"></i> There is a __minimal movement distance__ of aprox. 1m - this means that
the app will not send new locations to your Home Assistant Server when latitude or longitude will not change the 4'th
digit.

# Requirement

- Your Home Assistant installation is reachable via a public __https__ URL (Android Apps have to use https for
  communication)
- The app must be able to complete a https URL request in some other way (with other words you need to have internet
  access)
- You need to create a long-lived access
  token [see Home Assistant Authentication documentation: long-lived-access-token](https://developers.home-assistant.io/docs/auth_api/#long-lived-access-token)
  
  You can create such a token in
  your [Home Assistant User Profile](https://www.home-assistant.io/docs/authentication/#your-account-profile)
  (scroll down to the bottom of your profile page).

  It is highly recommended to use the '_copy and paste_' function when entering your long-lived access token.

  The token will be used a single time only to create a '_GPSLogger II Tracker_' in your Home Assistant installation.
  The token will __not be stored__ on your mobile device.

# Configuration
<i class="fa-solid fa-hand-point-up fa-fw"></i> The settings become editable, once you select a _Time period_ 

- Specify a minimum time delay/frequency in which the app will send a new location update (if location changed at all)
- Specify your Home Assistant Server URL (have to be __https__) -> e.g. by using _Let's Encrypt_
- Specify your generated long-lived-access-token (use the '_copy and paste_' function)
- Select, if the app should constantly send your location - or if the updates should be only send while logging
  (including paused) 

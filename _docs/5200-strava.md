---
title: <i class="fa-brands fa-strava"></i> Strava Integration
menu-title: <i class="fa-brands fa-strava fa-fw"></i>&nbsp;Strava
---

# Overview

It's possible to bind GPSLogger with an existing <i class="fa-brands fa-strava"></i> Strava account. Please note, that
this will be a ONE-WAY connection only. GPSLogger will send recorded activities to Strava - but the app will not
download (or pull) any data from your Strava account.

**Please note that by using this feature, your might be tracked by Strava services, and you must agree to Strava's
privacy policy [https://www.strava.com/legal/privacy](https://www.strava.com/legal/privacy)**.

# Additional Strava Functions

When you have connected your Strava account with GPSLogger (and there is an online connection) you have an additional
menu item in the PathManager context/more menu that is accessible for every previously recorded activity. This
additional menu entry is called <i class="fa-solid fa-share-nodes"></i> _Upload to Strava_, and it exports your path as
special Strava-FIT file and upload it to your Strava profile (since Strava does not accept "any" FIT data - it has to be
special one - thanks for nothing btw!). Please note that the upload might fail, when a similar activity already exists
in your strava activity list.

Also, when you stop recording you will find an additional <i class="fa-solid fa-share-nodes"></i> _Upload to Strava_
entry in the  <i class="fa-solid fa-ellipsis-vertical"></i>  main menu.

# Strava Options

<span class="shot">![strava-options](/assets/img/gpsl/strava-options.png)</span>
When you have connected your Strava account with GPSLogger the Application Settings will show _Strava Options_ (instead
of the _Connect with Strava_ entry) [see _Connect your Account_](#connect).
<br class="shot-end">

## Auto Upload <i class="fa-solid fa-toggle-off fa-fw"></i>

When enabled, GPSLogger will automatically upload the just stopped recording to Strava if the following rules apply:

1. Your device is online
2. The recording have a total length of more than 100 meter
3. The recording contains more than 19 positions/locations
4. The average speed does **not exceed 38 km/h** (23.6mph) \[_if Average Speed Limit option is <i class="fa-solid fa-toggle-on"></i>_\]

## Average Speed Limit <i class="fa-solid fa-toggle-off fa-fw"></i>

Strava is for sport activities, and it includes KOM/QOM record-tables for segments.

It's an endless discussion that these record-tables are often lead by people who have used a motorized vehicle. In order
that you don't become such a person yourself and upload an activity (recorded while driving by car or motorcycle) by
accident you should keep this switch <i class="fa-solid fa-toggle-on"></i>.

Only if you are a pro cyclist who will frequently exceed and average speed of 38 km/h (23.6mph) you can
<i class="fa-solid fa-toggle-off"></i> it.

## Disconnect Button
By pressing the _DISCONNECT FROM STRAVA_ Button, the app is calling the de-authorize URL of Strava's OAUTH flow 
(https://www.strava.com/oauth/deauthorize) and remove the ACCESS_TOKEN from the application settings.

GPSLogger will not delete any previously uploaded activities from Strava. 

# Connect your Account {#connect}

Connecting you existing Strava account with GPSLogger is done in three steps:

<span class="shot">![strava-01](/assets/img/gpsl/strava01.png)</span>
**Step 1.** If you want to connect GPSLogger with your Strava account you need to open the Application Settings >
Connect with Strava. Strava's usage policy requires that an app need to present the orange _Connect with Strava_ button,
that's the only reason for this additional dialog exists. So if you want to start the connection process. Push this
orange _Connect with Strava_ button to actually start the sequence.
<br class="shot-end">

<span class="shot">![strava-02](/assets/img/gpsl/strava02.png)</span>
**Step 2.** The application will open a default browser window, loading the Strava OAuth authorize Page that will
present you the default Strava Login page (URL: https://www.strava.com/oauth/authorize).

You need to provide your Strava credentials - the login dialog is served from strava.com, so their own privacy policy
applies.<br class="shot-end">

<span class="shot">![strava-03](/assets/img/gpsl/strava03.png)</span>
**Step 3.** After you have logged into Strava, you will be presented with a confirmation dialog, if you really want to
allow GPSLogger to upload activities to your Strava profile.

The Confirm-Dialog also informs you, that GPSLogger will be able to _View public data about your profile (required)_.
GPSLogger never does that. It's a restriction of Strava's API, that an app that want's to upload an activity needs to
have this additional right. GPSLogger only requests _**scope=activity:write**_.

So if you still want to connect GPSLogger with your Strava account, complete the binding by pressing the orange
_Authorize_ button.

You can withdraw this authorization at any time - either from your Strava profile - or directly in the GPSLogger
Settings.

Ok - once this process is completed GPSLogger will receive a so-called ACCESS_TOKEN from Strava - this TOKEN can be only
used by GPSLogger in order to upload activities to your Strava profile. GPSLogger does not know your strava account name
nor your password.

If you ar interested you can read more about [Strava's OAuth Authentication flow on their developers website](https://developers.strava.com/docs/authentication/).
<br class="shot-end">
---
title: <i class="fa-solid fa-truck-medical"></i> Emergency Alerting
menu-title: <i class="fa-solid fa-truck-medical fa-fw"></i>&nbsp;Emergency Alert
---
# Overview

GPSLogger can automatically send an eMail notification when you do not move a specified distance in a certain time. In
order to use this feature you need to authorize GPSLogger to use an eMail account (since the eMail will be sent from
this account) to the recipient(s).

> This feature was introduced around 2012 - seeing in the year 2022 Apple Watch 7 ads in TV, advertising the **brand
> new** feature of an automated emergency call where the latitude and longitude coordinates will be submitted as
> text-to-speech seams to be ridiculous. Yes it's nice, that you watch will make an automated call (if you are not able
> to do so) - but the watch needs either an eSIM or a paired phone (in range) and obviously the same restriction as for
> the GPSLogger II Emergency Alert function applies: the device needs to be online (a network connection is mandatory).

# Requirements

- [Configured eMail account](./8140-email.html)
- [Emergency Alert Settings](./8150-emergency.html)
  - A time delay (that is not **OFF**) specified
  - A minimum distance > 0 specified
  - At least one valid recipient specified
- <i class="fa-solid fa-toggle-off"></i> [AutoPause feature](./8010-general.html#autopause) 
- GPSLogger is actually recording (not **STOPPED** or **PAUSED**)
- If previously canceled: You have to be traveled more than the _minimum distance_ in the configured _time_ again
- Device needs to be **Online** (since eMails can be only send, if the device is online)

# Theory of Operation

When you are using GPSLogger to record your movement, then it seems to be some sort of natural that the app is able to 
realized when you have stopped moving. This currently be archived by using your settings - if you **do not move** the
specified distance in the specified time, then the app assumes something (serious) has happened and going to send the
previously configured email to the recipient(s) - the eMail also include the current position, a link to GoogleMap, as
well as the complete KML file of your activity (so the recipient can see what path you have followed).

Please note that the notifications will be **only send when GPSLogger II is in logging mode** - if you stop logging (or
enter the pause mode) **no alert's will be sent**.

> It makes a lot of sense to inform the person who is going to receive this email in advance, that you have configured
> an application that could send automatically an email in your name, in the case of an emergency.
>
> **Please take the time and agree on procedure that should be followed, once such an email arrives.** 

So e.g. when you are hiking, then you have an approximated average speed of 2-3 km/h (0.5 - 0.8 meter per second) - 
also assuming you make short rests of 2-5minutes in between, then selecting as **time delta** 5 minutes and select a
**minimum distance** of 150 m - 240 m (in the [Emergency Alert Settings](./8150-emergency.html)) would be fine.

<i class="fa-solid fa-hand-point-up"></i> You don't have to focus on calculating your average speed. When not
moving, your GPS position is jumping around (sometimes just a few meters - sometimes it can be 25 m or more - this
mainly depends on from the signal quality from the satellites). When you add some meters to this 'signal tremor'
(jitter) and then use this value ('maximum jumping distance') as _minimum travel distance_ you should be safe. 

> Personally I have configured 75 m - since moving 75 m in 5 minutes means a speed of 0.9 km/h which is doable
> as average speed on my activities. 

<i class="fa-solid fa-warning"></i> When you make use of Auto-PAUSE feature of the application, the app can not send an
Emergency Alert that is based on a minimal movement calculation.

# Information that an Emergency Alert was sent

<span class="shot">![shot1](/assets/img/gpsl/emergency-sent.png)</span> No matter if you have selected to be able to
intercept an Emergency Alert or not - once the application have triggered the send process of an Emergency alert to the
configured recipient(s) that app will show you a none-cancelable dialog like this one here.

**<i class="fa-solid fa-hand-point-up"></i> So when ever you see this dialog it's strongly recommended getting in contact
with the recipients of the alert eMail.**

# Option to intercept the Emergency Alerting
It can happen, that when you have enabled the _Emergency Alert_ functionality that you will accidentally send an eMail
cause you make a longer rest and forgot to pause/stop the recording - or you are just moving slower than usual e.g.
cause of a steep climb.

<span class="shot">![shot1](/assets/img/gpsl/emergency-cancel.png)</span> When
[<i class="fa-solid fa-toggle-on"></i> Show intercept Dialog](./8150-emergency.html), then the app is going to show you for
**one minute** an additional dialog and will **play an alert sound** (in an endless loop) in order to make you aware
that the app is going to send out an Emergency Alert email to your configured recipient(s) shortly.

Additionally, to the continuously looped audio alert, a timer is 'ticking' in the dialog that is shown to be able to
intercept the alerting process. If you do not press _Intercept alert_ in this 'last-call' dialog, the app is going to
send out the alert email without further notice.<br class="shot-end">

So by enabling the _Show intercept Dialog_ the Emergency Alert will be delayed by one additional minute.

## Select an Intercept-Alert Sound

The audio notification will use the configured sound for the 'Pace'-Notification. If you haven't configured on, the
sound used for the _WayPoint Reached_ Notification will be used.

If this is also not configured, that the app will use the DEFAULT device NOTIFICATION sound, if that's not configured
then the DEFAULT device ALARM sound will be used and the final fallback sound is the DEFAULT device RINGTONE.

So the complete fallback chain is
- GPSLogger Settings: Pace NOTIFICATION Sound 
- GPSLogger Settings: WayPoint Reached NOTIFICATION  Sound
- Device Settings: DEFAULT NOTIFICATION Sound
- Device Settings: DEFAULT ALERT Sound
- Device Settings: DEFAULT RINGTONE Sound

# What you should do, when you have received an Emergency Alert eMail from GPSLogger {#incaseofanemergency}

OK - you received an Emergency Alert eMail from GPSLogger - this means, somebody you know is currently not able to move
or respond to an alert on his mobile device. The eMail you have received was sent automatically - it's quite reasonable
that the person is unconscious and could not make any call for help by himself.

Of curse, you can double-check by give the sender ob the eMail a phone call - but don't be surprised if he will not pick
up the call.

What you should do? Hopefully you have agreed on a procedure to follow with the sender - now is the moment for **your**
action.

With the eMail you have received:
- A link to GoogleMaps showing the current location of the device caused the alert (a link, like this one)<br/>
  [https://maps.google.com/?q=HERE_2022-01-21T12:19:56.167Z@47.39553088,11.22492661&z=12](https://maps.google.com/?q=HERE_2022-01-21T12:19:56.167Z@47.39553088,11.22492661&z=12)<br/>
  \[_clicking on the link will show you the position of the device in GoogleMaps_\]
 
- The location as plain text in Latitude/Longitude format (like this example)<br/>
  **latitude: 47.39553088 | longitude: 11.22492661**
 
- A KML-File showing you the route your contact have traveled to far (this can be used in order to see what route have
  been taken in order to reach the position where the possible accident has happened).

If you received such an eMail by surprise - and did **not agreed on a procedure** - then you are in a bit of tricky
position.

What just has happened: An application installed on a smartphone, detected that it's owner did not move a certain
distance in a time defined by the owner of the device. This detection caused an automated email - the one you just have
received. 

There is a probability that the sender of the email has had an accident and need help. Unfortunately I am not able to
give your here any additional advise what would be **your appropriate reaction**.

> In my GPSLogger Settings I have configured my wife as recipient and agreed with her on the following procedure, **IF**
> she is ever going to receive such an Emergency Alert email from me, she will do:
1. Try to give me a phone call
2. If I do not respond to this call in 2 Minutes she will call an ambulance and submit my position provided in the eMail
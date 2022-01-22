---
title: <span class='material-icons'>show_chart</span> Elevation Data optimizations
sub-title: GPS based elevation information can be so bad
menu-title: "<span class='material-icons fa-fw' style='width: 1.042em;'>show_chart</span>&nbsp;Elevation Data"
menu-mobile: Elevation Data
---

# Using Barometer based Elevation - Theory of operation {#too}

With GPSLogger it's possible to capture the barometer data - from the arriving barometer sensor data the app can
calculate an internal 500ms average value and then use the avg pressure value as base to calculate your current
elevation.

Few things I would like to explain additionally:

- The app stores the barometer sensor value - from that stored pressure value the elevation value will be calculated
  during display/export time - To calculate the actual elevation you can base it on the yearly avg pressure at 15°C at
  sea level - with this formula you can calculate with a given pressure the current altitude - but of course this will
  be not quite correct since the pressure is changing weather wise - and we do not have a constant temp of 15°C (so I
  decided against that)... What I do is that I calculate the elevation based on the actual pressure change - this
  generates a two small additional challenges: what is the base pressure? what is your starting elevation?

- I decided a simple approach to calculate the base pressure and base elevation - When you start the application the app
  going to track the current GPS based elevation and the actual pressure - when you start the recording I calculate the
  average GPS elevation and average pressure of the last 30 seconds. Then I use these average values for the actual
  elevation calculation (BaseGPSElevation + currentPressure/BasePressure) - by doing this, the elevation calculation
  should be IMHO quite weather and mostly temperature Independent...<br/><br/>
  **Warning some Physics & Math here** - In the actual formula the temperature is used in Kelvin - this temp in K will
  then be divided by 0.0065 and used as multiplier for the relation of the both pressure values -> so at 0°C the factor
  is 42023 and at 30°C the factor is 46638 - so the difference between both factors is 1,1098 - this will result in a
  difference of 10cm when a pressure change happens at 0°C compared to the same pressure delta at 30°C<br/><br/>
  I do not know how drastically the temperature is going to change during your rides - my initial train of though here
  is, that a delta of 10°C might will happen... If temp will change more drastically I can add some things in the
  post-processing that will allow you to take the temp change also into account (therefore would be cool if you take a
  device that record the temp over time with you) - I think I have seen some bike computers doing that... \[there are
  really few phones that have a external temp sensor - cause the device itself generates quite some heat\]

- The app records the gps elevation and the barometer value separate from each other - so in the internal file format
  there are always two values present - during GPX Export the user have to decide which value he want to write into the
  elevation data field

**So before you start with the recording it would be good to stay at least 30sec at the same location...** starting
recording while driving up or downhill will result in none-plausible BaseElevation & BasePressure values... Then the
calculated pressure based elevation values will be also not correct - BUT there is no reason to jump out of the window
in this case - when you correct after the recording the both base values you should also get finally good elevation
values.
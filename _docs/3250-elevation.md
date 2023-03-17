---
title: <span class='material-icons'>show_chart</span> Elevation Data optimizations
sub-title: GPS based elevation information can be so bad
menu-title: "<span class='material-icons fa-fw' style='width: 1.042em;'>show_chart</span>&nbsp;Elevation Data"
menu-mobile: Elevation Data optimizations
---

# Overview - Improving Elevation data
The app has implemented two independent functionalities to improve the elevation data provided from the GPS signal.   

- Use a Mean Sea level altitude reference - correction of WGS84 elevation information to EGM2008
- Make use of Barometer data in order to detect altitude changes (if sensor is available) 

# WGS84 vs. EGM2008

TLDR; The elevation information provided via GPS is actually not want you want.

> I don't want to waste you time with all the details & reasons why it is what it is - and also I don't want to
> start a discussion here & now as to if there are better alternatives to EGM2008 or not (you are invited to start one in
> the [forum](https://forum.emacberry.com/viewforum.php?f=207)).

What's important to know is, that [GPSLogger will record a _GeoIdHeight_](./1100-data.html#gps) (and if this data is not
available, the app will post-calculate it). This _GeoIdHeight_ will be used, to correct the WGS84 elevation data to
something that comes quite close to the elevation information we use here on planet earth.

As already described in the [How GPSLogger will log your data Section](./1100-data.html#core), all GPS data will be
recorded as it is, and the MSL correction (when enabled) will be applied when the data is displayed.

If you want to read the full story, use the following Wikipedia link as a good start point:
- [The 'Earth Gravitational Model' article](https://en.wikipedia.org/wiki/Earth_Gravitational_Model)

The use of the Mean Sea level altitude reference is enabled by default - you can disable it in the Application
Settings > General Settings > Altitude Reference Model <i class="fa-solid fa-toggle-off fa-fw"></i>

# Using Barometer based Elevation - Theory of operation {#too}

With GPSLogger it's possible to capture barometer data - from the barometer sensor data the app can
calculate an internal 500ms average value and then use the avg pressure value as base to calculate your current
elevation.

A few things I would like to explain additionally:

- The app stores the barometer sensor value - from that stored pressure value the elevation value will be calculated
  during display/export time - To calculate the actual elevation you can base it on the yearly avg pressure at 15 °C
  and sea level - with this formula you can calculate with a given pressure the current altitude - but of course this
  will be not quite correct since the pressure is changing weather wise - and we do not have a constant temp of 15 °C
  (so I decided against that)... What I do is that I calculate the elevation based on the actual pressure change - this
  generates two small additional challenges: what is the base pressure? and what is your starting elevation?

- I decided a simple approach to calculate the base pressure and base elevation - When you start the application the app
  is going to track the current GPS based elevation and the actual pressure - when you start recording I calculate the
  average GPS elevation and average pressure of the last 30 seconds. Then I use these average values for the actual
  elevation calculation (BaseGPSElevation + currentPressure/BasePressure) - by doing this, the elevation calculation
  should be IMHO quite weather and mostly temperature Independent...<br/><br/>
  **Warning some Physics & Maths here** - In the actual formula the temperature used is Kelvin - this temp in K will
  then be divided by 0.0065 and used as the multiplier for the relation of both the pressure values -> so at 0 °C the factor
  is 42023 and at 30 °C the factor is 46638 - so the difference between both factors is 1,1098 - this will result in a
  difference of 10 cm when a pressure change happens at 0 °C compared to the same pressure delta at 30 °C<br/><br/>
  I don't know how drastically the temperature is going to change during your rides - my initial train of though here
  is, that a delta of 10 °C might happen... If temp changes more drastically I can add some things in the
  post-processing that will allow you to also take the temp change also account (therefore it would be cool if you take a
  device that records the temp over time with you) - I think I have seen some bike computers doing that... \[there are
  really few phones that have an external temp sensor - because the device itself generates quite some heat\]

- The app records the gps elevation and the barometer values separate from each other - so in the internal file format
  there are always two values present - during GPX Export the user has to decide which value should be written into the
  elevation data field

## <i class="fa-solid fa-hand-point-up fa-fw"></i> Preparation before Start Recoding {#preparation} 

**Before you start with the recording, its recommended being stationary for at least 30sec**. The best thing you can do is to put
your device on something solid/stable like a table, the ground or the roof of your car. To allow the Barometer sensor to
calibrate itself.

When you start the app while moving up or down hill and then start the recording, this will result in non-plausible
BaseElevation & BasePressure values. Then the calculated pressure based elevation values will also not be correct. BUT
there is no reason to jump out of the window in this case. It's possible to correct both base values after the recording
in order to finally get good elevation values. This _adjustment_ is not an easy task, but you don't have to be a hacker.

1. Export the Path as JSON
2. Open the JSON file in a text editor like Notepad
3. Search for the fields _basealt_ (, _basemslalt_) and _basepsi_ and edit them
4. Save the file & import the JSON into GPSLogger

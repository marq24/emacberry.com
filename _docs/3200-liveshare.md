---
title: <i class="fa-solid fa-location-arrow"></i> Live Location Sharing
sub-title: + <i class="fa-solid fa-face-smile-beam"></i> HappyPartner - HappyLife
menu-title: <i class="fa-solid fa-location-arrow fa-fw"></i>&nbsp;Live Sharing
---
# Overview

With GPSLogger it's possible to frequently share your live location with others. Who is going to be able to access your
location is totally up to you. The app does **not offer an additional backend-service** which is sharing your current
location - all is happening from your device only. The sharing happens either simply by emailing or the app can
frequently send your location to a custom URL in a given format. Once the location has been sent to such a URL is beyond
the control of the app - use this feature wisely.

The _HappyPartner - HappyLife_ is an extension of the regular share-current-location functionality that was build into
GPSLogger almost since the first day. Initially called _HappyWife - HappyLife_, the function has been renamed in 2022.
The intention of this function is to let a recipient (or multiple) know your current location after a certain amount of
time.

> When I am on a solo cycling tour, then my wife knows, I usually return after 2 hours. When I am not back at home
> after a certain time Gaby is going to start to get a bit nervous. Of course, she can give me a call or check otherwise
> where the heck I am, **or** she's simply going to receive frequent emails from GPSLogger when I am not back home after
> 2 hours, letting her know my current location (so she can judge, if I will return shortly - or if it's going to
> take another 4 hours).

# Requirement 
- App needs to be able to send eMails (be online)
<br/>**or**<br/> 
- The app must be able to complete a URL request in some other way
 
# Sharing your location

In order to be able to share you location you need to **start the recording process** - the sharing will continue when
you are pausing the recording.

You have the option to share your location in three different ways: 
- Sharing by email
- Sharing via an own backend / generate custom URL requests
- Sharing by executing a TASKER-TASK

<i class="fa-solid fa-hand-point-up fa-fw"></i> All these three options can be combined with each other.

## Start sharing your location after a delay

As described above you might not want to instantly share your location once you start with your activity - therefore you
can specify in the application settings an initial delay. Only if your activity takes longer then this initial delay the
sharing process will be started.

You can specify such a delay via: Application Settings > Sharing Location Information > HappyPartner HappyLife

## Share via eMail

Specify a recipient (or multiple recipients), specify a subject that should be used and additionally specify the content
of the email that will be sent by the application. Additionally, to your custom body the app will add (used location
values are just example):

```mail

Current Location: https://maps.google.com/?q=HERE_2022-01-21T12:19:56.167Z@47.39553088,11.22492661&z=12
Lat: 47.39553088
Lon: 11.22492661
Course: 234°
Speed: 3.2 km/h

Sent via GPSLogger II - https://www.emacberry.com/gpslogger.html
```

## Share your location via TASKER

Please [see the dedicated TASKER Integration section of this manual](./3900-tasker.html#share).

## Share your location via a custom URL

You can specify a custom URL to which GPSLogger going to send a simple GET-Request including our current position as
decimal latitude & longitude values, as well as your Android Device ID (in case you want to be able to distinguish
between multiple GPSLogger instances on your backend) as URL parameters, all as plain text, not encoded & **not
encrypted**. A timout of 5 seconds for the request will be used.

The GET-REQUEST will have the following format:

`[YOUR_SERVER_URL]?lat=[LATITUDE_AS_DECIMAL_NUMBER]&lon=[LONGITUDE_AS_DECIMAL_NUMBER]&id=[YOUR_DEVICE_ID]`

As example, if you have an own server/domain and you want to collect your locations there, then you can write some small
request processing code yourself and deploy it on your server. Assuming your domain is called _www.anyfancydoma.in_, and
you have written a PHP script called _incoming_ that going to process the requests, then you should specify in the
application settings the URL _https://www.anyfancydoma.in/incoming.php_.

The resulting requests the app generate will look then like this (just as example - of course lat, lon and id values
will be different): 

`https://www.anyfancydoma.in/incoming.php?lat=47.39553088&lon=11.22492661&id=FA4F044F7321DBF4`

Please note that there is no backend available @ emacberry.com that would handle live location requests - simply cause
of privacy concerns that would come with hosting this kind of data.

Here is some example PHP code that is able to process GPSLogger live location sharing requests and store this data into
a local mysql database table with the name _gpslogger_live_ (the config.php have to contain your database credentials):

```php
<?php
    header("Pragma: public"); 
    header("Expires: " . gmdate("D, d M Y H:i:s", time() + 60) . " GMT");
    header("Cache-Control: must-revalidate, post-check=0, pre-check=0"); 
    header("Content-Type: image/png");

    if(!empty($_REQUEST["lat"]) && !empty($_REQUEST["lon"])){
        require('./config.php');
        if (defined('ALL_DBOK')){
            $con = mysqli_connect($dbhost, $dbuser, $dbpasswd);
            if (!$con){
                //die('Could not connect: ' . mysql_error());
            } else{
                mysqli_select_db($con, $dbname);
            
                // logging the incomming live location...
                $id = $_REQUEST["id"];
                $lon = $_REQUEST["lon"];
                $lat = $_REQUEST["lat"];

                // only required when you do in-range queries later..    
                $sin_lat_rad = sin($lat * 180 / M_PI );
                $sin_lng_rad = sin($lng * 180 / M_PI );
                $cos_lat_rad = cos($lat * 180 / M_PI );
                $cos_lng_rad = cos($lng * 180 / M_PI );
			
                $insert = sprintf("INSERT INTO your_location_live_data (id, lat, lng,
                        sin_lat_rad, sin_lng_rad, cos_lat_rad, cos_lng_rad)
                        VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s');",
                    mysqli_real_escape_string($con, $id),
                    mysqli_real_escape_string($con, $lat),
                    mysqli_real_escape_string($con, $lng),
                    mysqli_real_escape_string($con, $sin_lat_rad),
                    mysqli_real_escape_string($con, $sin_lng_rad),
                    mysqli_real_escape_string($con, $cos_lat_rad),
                    mysqli_real_escape_string($con, $cos_lng_rad)
                );    
    
                mysqli_query($con, $insert);									

                mysqli_close($con);
            }
        }
    }else{
        http_response_code(404);
    }
?>
```

A config.php template - _???_ have to be replaced with your mysql db values
```php
<?php
    $dbhost = '???';
    $dbport = '???';
    $dbname = '???';
    $dbuser = '???';
    $dbpasswd = '???';
    @define('ALL_DBOK', true);
?>
```

Creating the MySQL db with the possibility to create in-rage queries 
```sql
CREATE TABLE `your_location_live_data` (
    `id` char(40) COLLATE utf8_bin NOT NULL,
    `lat` double NOT NULL,
    `lng` double NOT NULL,
    `sin_lat_rad` decimal(10,10) DEFAULT NULL,
    `sin_lng_rad` decimal(10,10) DEFAULT NULL,
    `cos_lat_rad` decimal(10,10) DEFAULT NULL,
    `cos_lng_rad` decimal(10,10) DEFAULT NULL,
    `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`, `ts`),
    KEY `sin_lat_rad` (`sin_lat_rad`,`sin_lng_rad`,`cos_lat_rad`,`cos_lng_rad`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
COMMIT;
```
---
title: GPSLogger II Manual
sub-title: An App-Project that started as small hobby (in early 2009) has developed into an All-In-One solution over the time
menu-title: Docs
layout: doc
permalink: gpsl/manual.html
---
> Please be so kind and have in mind that GPSLogger II have a long history - features that have been initially
> developed have been adjusted over time - so there is always the chance that this documentation is outdated at certain
> areas - if you come across such a section please let us know (or simply fork the project on GitHub, make the
> adjustments and create a pull request - TIA!).

{:style="text-align:center;"}
![shot1](/assets/img/gpsl/app-icon-xxl.png){:style="width:50%; display:block; margin-left:auto; margin-right:auto"}

---

## DISCLAIMER
This software is provided **AS IS**, without a warranty of any kind. ALL EXPRESS OR IMPLIED CONDITIONS, REPRESENTATIONS
AND WARRANTIES, INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT,
ARE HEREBY EXCLUDED. emacberry.com AND ITS LICENSORS SHALL NOT BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A
RESULT OF USING, MODIFYING OR DISTRIBUTING THE SOFTWARE OR ITS DERIVATIVES. IN NO EVENT WILL emacberry.com OR ITS
LICENSORS BE LIABLE FOR ANY LOST REVENUE, PROFIT OR DATA, OR FOR DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR
PUNITIVE DAMAGES, HOWEVER CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF THE USE OF OR INABILITY TO
USE SOFTWARE, EVEN IF emacberry.com HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

This software is not designed or intended for use in on-line control of aircraft, air traffic, aircraft navigation or
aircraft communications; or in the design, construction, operation or maintenance of any nuclear facility. This software
is not designed or intended for use while operating any motorized vehicle. Licensee represents and warrants that it will
not use or redistribute the Software for such purposes.

No guarantee is made for accuracy or reliability for any purpose whatsoever.

---

## You are invited to contribute to this manual
In the past I have used a total different approach to create & work on websites - by make use of 
[Jekyll](https://github.com/jekyll/jekyll) I hope it will become easier to participate in the creation process of this
manual. You will find on top of every page a _<i class="fa-solid fa-pen-to-square"></i>&nbsp;Improve this page_ link that will bring you
to the public GitHub repository.

---

## Used Symbols

| <span class="material-icons fa-fw">info</span> | Information |
| <i class="fa-solid fa-hand-point-up fa-fw"></i> | Hint / Tip |
| <i class="fa-solid fa-warning fa-fw"></i> | Warning \| Caution \| Danger |
| <i class="fa-solid fa-toggle-on fa-fw"></i> | Indicates a setting/option in the application settings has to be enabled |
| <i class="fa-solid fa-toggle-off fa-fw"></i> | Indicates a setting/option in the application settings has to be disabled |
| <i class="fa-solid fa-square-check fa-fw"> | Indicates a setting/option in the application settings has to be checked |
| <i class="fa-solid fa-square fa-fw"></i> | Indicates a setting/option in the application settings has to be un-checked |
| <i class="fa-solid fa-list fa-fw"></i> | Indicated a setting/option in the application settings where you can select a value from a given list |
| <i class="fa-solid fa-square-pen fa-fw"> | Indicated a setting/option in the application settings that requires a number or text input |
| ABC > XYZ | In the application settings/section with the name **_ABC_** select item/section/setting **_XYZ_** |

## Use of metric system for Units
This manual use the metric system in all descriptive texts and examples. The app supporting different unit formats like:
_Metric_, _Imperial_ (feet & yard) or _Nautical_ and will adopt its behavior to your selection.

---

# Simplified Privacy Policy<br/>How GPSLogger II will process your data? {#dataprocessing}

## Principle

> I take the protection of your personal data **very seriously** and treat personal data with the utmost care,
> confidentiality and in accordance with the legal data protection regulations and this data protection declaration.

## Processing operations

GPSLogger II processes personal data only if they are necessary for the app functions. The data will be saved on your
**mobile device only**.

## Transfer of data to third parties

When using the export options (KML, FIT, GPX or CSV), the location (and additional sensor) data will be stored in the
selected format on your local device only. Please use these export files wisely. When using the Emergency Alert
function, your current location (and path) will be transferred as eMail via the internet to the selected eMail
recipient. Please note, that eMails are in general imperceptible & read by 3'rd party. When using the Sharing Location
Information function, your current location will be transferred either as eMail via the internet to the selected eMail
recipient or will be sent vie the internet to the server URL you have specified. Please use with appropriate care. When
using the Share Path functionality, the complete path (date, location) will be transferred via the internet to
emacberry.com server and will be made available to the PUBLIC. Everyone that know the provided share URL (which contains
no encryption or key) can see this location data over the internet. When you share a path, there will be no connection
between you (the user) or the device used for the upload - so the upload does not contain any additional personalized
data. When using this functionality, the emacberry.com privacy policy applies.

[https://www.emacberry.com/pp/pp1.html](https://www.emacberry.com/pp/pp1.html)

When using the On the fly navigation/detour functionality, your current & target location will be transferred via the
internet to the openrouteservice.org server. When using the Openrouteservice, the openrouteservice.org privacy policy
applies.

[https://openrouteservice.org/privacy-policy/](https://openrouteservice.org/privacy-policy/)

When using the Import from Routing Server functionality, your current location will be transferred via the internet to
emacberry.com server in order to search for routes that have been created in the last 5min in your area. The sent
location data will not be stored on emacberry.com server and be only used for processing the request. When using the
Push-Route functionality from the https://route.emacberry.com website, the emacberry.com privacy policy applies.

[https://www.emacberry.com/pp/pp1.html](https://www.emacberry.com/pp/pp1.html)

When you update the list of available OpenMapData provides GPSLogger II will connect to emacberry.com server in order to
download the list of currently supported map providers. This update can be triggered manually, or it will be
automatically executed with every update of the application. The request will contain your device model, the os version
and app version and a user independent generated random id. This data will be used for internal statistics only. This is
the only price you pay. Your current ID: %s Generate a new random ID When using the OpenMapData functionality (basically
_the Map View_), the corresponding privacy policies of the selected map data providers applies. GPSLogger II will
request map tiles from the selected providers and this implies that this requests contain area information (BoundingBox)
which might be (but don't have to be) in relation to your location. When using the Upload to Strava function, the
location (and additional sensor) data is transferred via the internet to the Strava servers. When using Strava, the
Strava privacy policy applies.

[https://www.strava.com/legal/privacy](https://www.strava.com/legal/privacy)

## Right of revocation

By revoking the privacy policy of GPSLogger II, the app is not functional and therefore cannot be used. Deletion of your
personal data GPSLogger II stores your data exclusively on the mobile device. this data can be deleted by uninstalling
GPSLogger II. You must delete created backups or export files. This backup data can be found on the device in the
_GPSLogger II_ folder of your Downloads.
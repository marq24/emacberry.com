---
title: <i class="fa-solid fa-share-nodes"></i> Share your Path with the public
sub-title: Not really with the public, but technically <b>everybody knowing the link will have access</b>.
menu-title: <i class="fa-solid fa-share-nodes fa-fw"></i>&nbsp;Share a Path
---

# Overview

From the PathManager of GPSLogger you have the possibility to share your path with others. By using this feature you make
your recording **public available** via the emacberry.com webserver which is currently hosted by hosting-monster.com.

It is important, that you understand that when you make use of this sharing feature that data of this specific path will
be uploaded to emacberry.com webserver and will be stored there **without any connection to you or your device**. The
only reference is a so-called
UUID ([Universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)) which is generated
for every path automatically.

The UUID is a more or less random 32 digit HexNumber (0-9, A-F) and should be some sort of unique across the world. If
GPSLogger generate two times the same UUID then let's have a big party! An example UUID looks like this
_7E84A3D9-9517-4A09-9CB0-FF5C36F9C472_ and is in general pretty though (if not impossible) to guess.

Once the path have been uploaded **everybody knowing the link-url** is able to view **your path** without any additional
restriction (like a login or providing an additional token) - so technically **your data is public accessible**.

Please understand that this _none human friendly_ link-url is only a compromise, and I fully can understand that this
approach is **not satisfying your personal data protection requirements**. In such a case: **please don't use this
feature**.

If you would like to share your activities but want to have full control who is able to access the data once you shared,
please use a different service that allow you to upload one of the given export file formats.

# Requirements
- Internet connection to upload the path data to emacberry.com
- **Willingness to make your data public** only protected by a kind of cryptic link-url

# Example ShareLink-URL

Please check out the current website that will show your shared path by following the
link [https://www.emacberry.com/appsrv/gpsl/index.html?uuid=7E84A3D9-9517-4A09-9CB0-FF5C36F9C472](https://www.emacberry.com/appsrv/gpsl/index.html?uuid=7E84A3D9-9517-4A09-9CB0-FF5C36F9C472).

This is how a share-link-url is going to look like, when you will use <i class="fa-solid fa-share-nodes fa-fw"></i>
_Share via emacberry.com_ from the PathManager's <i class="fa-solid fa-circle-chevron-down"></i> more-menu. The
resulting link will look like the above one - but obviously **with a different UUID**.

<span class="shot">![web-share-example](/assets/img/gpsl/web-share.png)</span>
The page itself display some meta-data of you path like distance, duration and start & end time (in GMT), a speed and
elevation profile and the most important part: the map with your path.

You can select a different map type, zoom and when you hover with your mouse over the profile the corresponding location
in the map will get an additional popup with the location meta-data (distance, time, speed & elevation).

It's not the most fancy page in the world - but have in mind it's all for **free** (this does not imply that you have to
accept every crap). If you have any improvements - I am happy to hear from you.<br class="shot-end"/>

# End Sharing & Remove the path from the emacberry.com Server

If you want to remove a previously shared path from the emacberry.com server you can open PathManager, scroll to the
corresponding path, open the <i class="fa-solid fa-circle-chevron-down"></i> more-menu and then select the
<i class="fa-solid fa-trash"></i> _Remove Share from emacberry.com_ entry.

**Please note that the device have to be able to establish a online connection to perform a server request to fulfill
your deletion request**.

## Fallback - Request the manual path deletion from the emacberry.com Server 

Since there is no connection between a user (or device) and a shared path - the only existing reference is the UUID. The
only person who have access to the UUID of a path is you (and the people you provided the share-link of the path).

If you don't have the share link any longer, than the only way to access a path's UUID is by exporting it as JSON file.
In this exported JSON there is a field called _uuid_. So if you want that a certain path you previously uploaded to
emacberry.com webserver should be deleted: Open a support ticket and providing the UUID. The request will be completed
within **60 working days**, but you will not get a reply from the support (aka me). Requests that does not contain a
valid/existing UUID will be instantly deleted.

You can request the deletion by sending an email to help@support.emacberry.com.
---
title: <i class="fa-solid fa-gears"></i> F-Droid Tutorial
sub-title: Add the GPSLogger II repository to F-Droid (hosted via my MAPS Server @ home https://maps.emac.de/)
---

# Overview

You will need to add our repository to your F-Droid client (on your Android device). We will only show steps for adding
to the official F-Droid app. There are two ways to add an F-Droid repository.

<i class="fa-solid fa-warning fa-fw"></i> In case GPSLogger II is **already installed** on your device, make sure to **backup your application data**.
**Uninstall** GPSLogger II before proceeding and reinstall it once your are done following the instructions below. After that **import your backup**.

# Install Procedure

## The first of these is by scanning QR code or clicking link.

![fdroid-repo](/assets/img/gpsl/fdroid.png)
1. Scan the QR code or click [this link](fdroidrepo://maps.emac.de/fdroid/repo?fingerprint=57073767C5CF374F0759CDD93685795D83CA0249D33E205C9D0E585629530976).
   <br/>After scanning, a FDroid Dialog will appear 
3. Click `OK`. The emacberry repository will be added.
4. Go to F-Droid's search and search for `GPSLogger II`. Click the listing for GPSLogger II.
5. Scroll down to the versions tab. Expand both of the tabs for the highest numbers at the top. Press `INSTALL` on the
   one that says Repository: `emacberry Repository (for GPSLogger II)`.

Note: If you have installed GPSLogger previously via another Source, you might not be able to see (or install) the
GPSLogger II version because it has a different signature. To see it, enable "Include incompatible versions" from
F-Droid settings. To install it, first make a database backup of your existing version, uninstall it, then install the
new one and restore your backup.

## Or you can add GPSLogger II manually.

1. Open your F-Droid client.
2. Go to <i class="fa-solid fa-gear"></i> settings and click `Repositories`.
3. Click the <i class="fa-solid fa-plus"></i> to add emacberry Repository (for GPSLogger II).
4. In the pop-up, after `https://` paste the following
   link: [copy me!](https://maps.emac.de/fdroid/repo/?fingerprint=57073767C5CF374F0759CDD93685795D83CA0249D33E205C9D0E585629530976)
   You don't need to add to the fingerprint field as the link provided will automatically fill it.
5. Click `OK`. The repository will save and show it as unsigned until all repositories are refreshed. This is because
   the F-Droid app didn't compared the fingerprints yet. It will tell you if they do not match. If you want, you can
   also check it by hand:
   `5707 3767 C5CF 374F 0759 CDD9 3685 795D 83CA 0249 D33E 205C 9D0E 5856 2953 0976`
7. Go to F-Droid's search and search for `GPSLogger II` and click the listing for GPSLogger II.
8. Scroll down to the versions tab. Expand both of the tabs for the highest numbers at the top. Press `INSTALL` on the
   one that says Repository: `emacberry Repository (for GPSLogger II)`.

Note: If you have installed GPSLogger previously via another Source, you might not be able to see (or install) the
GPSLogger II version because it has a different signature. To see it, enable "Include incompatible versions" from
F-Droid settings. To install it, first make a database backup of your existing version, uninstall it, then install the
new one and restore your backup.

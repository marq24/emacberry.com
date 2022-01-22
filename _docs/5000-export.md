---
title: <i class="fa-solid fa-floppy-disk"></i> Export & <i class="fa-solid fa-envelope"></i> eMail
menu-title: <i class="fa-solid fa-envelope fa-fw"></i>&nbsp;Export & eMail
---

# Overview
Import & export  - exchange files - see also the integrated eMail options (for your convienience) 

# Requirements
- File System related Permissions: _WRITE_EXTERNAL_STORAGE_ & _READ_EXTERNAL_STORAGE_

# Some General Notes
With Android 11 / SDK30 (and the Google Play Store requirement to support SDK30 since November 2021) it has become
quite complicated to export files.

I can fully understand the motivation from Google behind the changes with SDK30 - but it makes it quite complicated for
existing users to understand, why it's no longer possible what have been so convenient in the past few years. The
general train of thought is, that Apps should only be able to access their on files and directories. This situation is
quite similar to iOS - with the only difference that the iOS users are used to this since the first day.

Nevertheless, I stop whining here - I just felt the need to explain the reasons behind the exporting/importing changes -
and that I did not had the intention to ruin your life when I released GPSLogger 2.0.0.195.

# Access exported files in the **share** folder
As just stated in the general notes it had become quite difficult for a normal app like GPSLogger to get read/write
access on _none default application folders_.

## A brief (simplified) introduction to storages on Android
### _Internal_ application storage
This storage is only available for the app - it's typically part of your device build in storage, and it's not
accessible for the user (if the device is not rooted - but that's anyhow a total different story).

### _External_ application storage {#ext-storage}
By calling the storage _external_ you might already think, that this means an external/additional SD-Card - but this is
not the case for Android - Every storage that is not _internal_ is labeled as _external_. So even Android devices
without an extra SD-Card slot have an external storage. To my best knowledge this _internal external_ storage is
labeled in most of the cases as _emulated_ or _embedded_ storage/sd-card (or a combination).

### Permissions to access external storage
When you want to read/write the _external_ Storage the app needs to request additional permissions from the user -
these permissions are called _READ_EXTERNAL_STORAGE_ & _WRITE_EXTERNAL_STORAGE_. The app request both permissions on
application start. It's up to you to grant or deny these permission requests - but obviously without the permission to
access the _external_ storage it's impossible for the app to create a file that you could access afterwards.

It's correct that when you are user grant EXTERNAL_STORAGE read & write access that the app would have the possibility
to scan the complete content of the external storage and use it for _what-ever-you-might-think-of_.

**YES** that thought is correct - the app would have this possibility. But this is **not the case** - the app does not
anything like that, please see also [my motivation to develop this app and provide it for free](../1000-intro/#motivation).

The fear that the app could be a potential, hidden data collector is anyhow minimized with Android11 / SDK30, since
then the OS restrict the access drastically as described above.

## ALL Version

All exports will be stored in a folder called **share** - the location of this folder depends on your Android Version,
on the version of the app you are using as well on the GPSLogger application settings. Yes this is a nightmare!

Ok let's tackle the GPSLogger application settings first.

If your device supports multiple external storages (e.g. the _Emulated external_ **and** an additional SD-Card), then
you have the opportunity via the application settings > Storage Settings > Storage Location for Path & Map Data to
select the external storage the app should use ([see also External application storage](#ext-storage)).

If you don't have an additional external SD-Card (probably in most of the cases), then this setting **does not have any
effect for the export functionality**.

So ok now let's have a look at the different application version, but one final note before that, the different folder
locations have the \[_storage_root_\] in common. The location of this _storage_root_[^1] can varray from device to device
from manufacture to manufacture (and obviously from the external storage that you have configured).

## Since GPSLogger v2.0.0.204

`[storage_root]/Android/media/com.emacberry.gpslogger/share`

This folder should be accessible from other applications (like file-managers or email clients). **BUT**
<i class="fa-solid fa-warning"></i> Important to know - this folder, and it's complete content will be removed when you
are uninstalling the application from your device.

## Between v2.0.0.195 and v2.0.0.204

This becomes hopefully obsolete quite soon - between November 2021 and February 2022 a suboptimal version of GPSLogger
was released.

`[storage_root]/Android/data/com.emacberry.gpslogger/files/share`

Unfortunately this folder is only accessible by GPSLogger itself and very few others apps (excluding Googles own _Files_
application). You can access this folder for sure, by connecting your phone via a USB cable with your PC/Mac and then
browse into the folder with the Explorer/Finder.

You might be able to access this folder with an app that is listed in _OS Settings > Apps > Special app access > All
files access_ apps. But even then, there is no guarantee that an app with this special right will show you the content
of the `[storage_root]/Android/data/` folder or any of its children.

<i class="fa-solid fa-warning"></i> Important to know - this folder, and it's complete content will be removed when you
are uninstalling the application from your device.

## Before GPSLogger v2.0.0.195

`[storage_root]/GPSLogger II`

**Big sigh** that was just so easy and convenient to use - but it's no longer possible for an application to read or
write in such global folders.

This folder will not be removed when you are uninstalling the application from your device. That was one of the reasons
why it was so convenient to use.

## File formats {#formats}

### KML \[Keyhole Markup Language\]

### FIT \[Flexible and Interoperable\] {#fit}

### GPX (v1.0)

### GPX (v1.1)

### CSV

### GPS NMEA-Sentences as TXT

### UUID 0x's as CSV

### JSON (GPSlogger2)

### Original GPSLogger II GPL

---
[^1]: The actual location on your device of the _storage_root_ can vary from device to device - please find here some 
      examples (but have in mind that are **just** examples):
      - `/sdcard/`
      - `/storage/emulated/`
      - `/storage/self/primary/`
      - `/storage/E5B1-1917/` (a _real_ external SD-Card)
      - `/mnt/sdcard/`
      - `/misc/android/` (e.g. used on BlackBerry 10)
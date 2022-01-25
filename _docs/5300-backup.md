---
title: <i class="fa-solid fa-floppy-disk"></i> Backup & Restore
menu-title: <i class="fa-solid fa-floppy-disk fa-fw"></i>&nbsp;Backup & Restore
---

> need revision

# Using Backup & Restore

With the build v2.0.0146 the overall implementation have been changed from an AsynchronousTask to a Background-Service.
This implies that the backup & restore progress will be shown as Android Notifications

<span class="shot">![welcome](/assets/img/gpsl/backup01.png)</span><br class="shot-end"/>

<span class="shot">![welcome](/assets/img/gpsl/backup02.png)</span>
So when you select Backup (or Restore) **from the App Settings** the current app show a new Window **with three disabled
buttons** and starts the Backup (or Restore) Service - so additionally to this dialog (_I can not do anything here_) the
app is doing something as a service - the progress can be viewed as the notification. Please wait till the progress have
reached the end - and 'yes' it could happen, that the bar will jump back to 0% and restart from the scratch - that's no
bug - then the app is verifying that the restored path data is present in the local path-database.
<br class="shot-end"/>

### Why we have this sub-dialog when it does not have any meaningful functionality when using Backup & Restore from the Application Settings?

Starting from Android 8 you can add additional App-Shortcuts to your application - these shortcuts can be accessed by
tab & hold the app icon in the launcher.

<span class="shot">![welcome](/assets/img/gpsl/backup03.png)</span>
It's strongly recommended to use Backup - but mainly the **Restore** function via this shortcut - this will make the
complete restore process so much smoother since the app itself is not running (and accessing resource that might be
changed during the restore process - like location of the internal databases)<br class="shot-end"/>

## Restore after a fresh App Installation

When you reinstall GPSLogger on your device (e.g. on a new Device) the app of course will use its default/initial
settings - when restoring a backup that contains a larger number of previously recorded path the app need to regenerate
the internal database. This Process can take quite a while, and you might terminate the app (while it's still recreating
the database entries). When in your have configured in your previous installation of GPSLogger that the app should use
an alternative storage location, and you restore such a backup to a fresh installed GPSLogger, then after the restoring
process has been completed an additional data movement have to be performed. This add extra complexity to the restore
process and add additional processing time.

In any case when after a restore (for whatever reason) your PathManager does not show you all your previously existing
paths, then please: a) Select '**Sync Data...**' and wait a while (the sync process needs to reopen all existing gpl
files on your device and check the metadata with the data that is currently stored in the database - depending on the
IO performance of your device and the number of path this can take up to 30min or even longer). The second thing you can
do is, after the data sync is completed you can regenerate all thumbnails also via the PathManager Menu 'Recreate all
Thumbnails...'
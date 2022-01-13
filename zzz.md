

---

Here is a text[^1] that have a footnote

[^1]: This is a bit longer footnote text
    that will be wrapped

---


```java
package com.emacberry;

import android.app.Activity;
import android.app.KeyguardManager;
import android.content.Context;
import android.os.Build;
import android.util.Log;

import androidx.annotation.RequiresApi;
import androidx.fragment.app.FragmentActivity;

@RequiresApi(api = Build.VERSION_CODES.O)
public class BaseActivityLockCheckerApi26 {

    private static KeyguardManager km;
    private static KeyguardManager.KeyguardDismissCallback kdallback;
    private static final String LOG_TAG = "LockCheckerApi26";

    @RequiresApi(api = Build.VERSION_CODES.O)
    public static boolean isInLockStateApi26(FragmentActivity act) {
        boolean ret = false;
        try {
            if (km == null) {
                km = (KeyguardManager) act.getSystemService(Context.KEYGUARD_SERVICE);
            }
            ret = km.isKeyguardLocked();
        } catch (Throwable t) {
            Log.d(LOG_TAG, "" + t.getMessage());
        }
        return ret;
    }
}

```
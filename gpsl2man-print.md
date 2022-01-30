---
title: GPSLogger II Manual [<i>PRINT-VERSION</i>]
sub-title: <b><i>-NOT FOR SALE / NOT FOR REPRINT -</i></b>
layout: doc-print
permalink: gpsl/docs/9998-print.html
---
> Before you going to print this manual - please considered if this is necessary - save our environment!  

![shot1](/assets/img/gpsl/app-icon-xxl.png){:style="width:55%; display:block; margin-left:auto; margin-right:auto"}

---

# DISCLAIMER
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

# Used Symbols

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

# Use of metric system for Units
This manual use the metric system in all descriptive texts and examples. The app supporting different unit formats like:
_Metric_, _Imperial_ (feet & yard) or _Nautical_ and will adopt its behavior to your selection.

---

{% for doc in site.docs -%}
    {%- if doc.sub-title -%}
<h1 class="post-title">{{ doc.title }}<br/><span style="font-size: 50%">{{ doc.sub-title }}</span></h1>
    {%- else if doc.title -%}
<h1 class="post-title">{{ doc.title }}</h1>
    {%- endif -%}
<p>{{ doc.content | markdownify | replace: 'href="./', 'noref="./' | replace: 'href="#', 'noref="#' }}</p>
---
{% endfor -%}

---
title: GPSLogger II Manual [<i>PRINT-VERSION</i>]
sub-title: <b>NOT FOR SALE</b>
layout: doc-print
permalink: gpsl/gpslogger_manual-printversion.html
---
> Before you going to print this manual - please considered if this is necessary - save our environment!  
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

{% for doc in site.docs %}
<!--h2><a href="{{ doc.url }}">{{ doc.name }} - {{ doc.position }}</a></h2-->
  <!--hr/>
  collection: {{ doc.collection}}
  <br/>path: {{ doc.path}}
  <br/>rel_path: {{ doc.relative_path}}
  <br/>url: {{ doc.url}}
  <br/>date: {{ doc.date}}-->
  <p>{{ doc.content | markdownify }}</p>
{% endfor %}

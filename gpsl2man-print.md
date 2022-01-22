---
title: GPSLogger II Manual [<i>PRINT-VERSION</i>]
sub-title: <b><i>-NOT FOR SALE / NOT FOR REPRINT -</i></b>
layout: doc-print
permalink: gpsl/docs/9999-print/index.html
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

{% for doc in site.docs -%}
    {%- if doc.sub-title -%}
<h1 class="post-title">{{ doc.title }}<br/><span style="font-size: 50%">{{ doc.sub-title }}</span></h1>
    {%- else if doc.title -%}
<h1 class="post-title">{{ doc.title }}</h1>
    {%- endif -%}
<p>{{ doc.content | markdownify }}</p>
---
{% endfor -%}

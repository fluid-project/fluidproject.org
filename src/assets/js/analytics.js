/*
Copyright OCAD University
Licensed under the New BSD license. You may not use this file except in
compliance with this License.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/fluidproject.org/master/AUTHORS.md.
*/
"use strict";
var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
    var u = "https://analytics.inclusivedesign.ca/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "7"]);
    var d = document, g = d.createElement("script"), s = d.getElementsByTagName("script")[0];
    g.type = "text/javascript"; g.async = true; g.defer = true; g.src = u + "matomo.js"; s.parentNode.insertBefore(g,s);
})();

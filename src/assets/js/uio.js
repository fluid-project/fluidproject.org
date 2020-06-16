/*
Copyright OCAD University
Licensed under the New BSD license. You may not use this file except in
compliance with this License.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/fluidproject.org/master/AUTHORS.md.
*/

"use strict";
var uio = uio || {};
(function ($, fluid) {

    uio.setupUIO = function (path) {
        path = path || "";
        fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
            terms: {
                "templatePrefix": path + "lib/infusion/src/framework/preferences/html",
                "messagePrefix": path + "lib/infusion/src/framework/preferences/messages"
            },
            "tocTemplate": path + "lib/infusion/src/components/tableOfContents/html/TableOfContents.html",
            "tocMessage": path + "lib/infusion/src/framework/preferences/messages/tableOfContents-enactor.json"
        });
    };
})(jQuery, fluid);

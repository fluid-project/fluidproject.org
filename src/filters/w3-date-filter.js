/*
Copyright OCAD University
Licensed under the New BSD license. You may not use this file except in
compliance with this License.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/fluidproject.org/master/AUTHORS.md.
*/

"use strict";
module.exports = function w3cDate(value) {
    const dateObject = new Date(value);
    return dateObject.toISOString();
};

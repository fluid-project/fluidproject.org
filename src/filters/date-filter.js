/*
Copyright OCAD University
Licensed under the New BSD license. You may not use this file except in
compliance with this License.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/fluidproject.org/main/AUTHORS.md.
*/
"use strict";
const appendSuffix = n => {
    var s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
module.exports = function dateFilter(value) {
    const dateObject = new Date(value);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayWithSuffix = appendSuffix(dateObject.getDate());

    return `${dayWithSuffix} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
};

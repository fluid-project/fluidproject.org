/* eslint-env es6 */
/* eslint-disable no-console */
"use strict";
module.exports = function w3cDate(value) {
    const dateObject = new Date(value);

    return dateObject.toISOString();
};

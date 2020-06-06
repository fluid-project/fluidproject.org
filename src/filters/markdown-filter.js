
/*
Copyright OCAD University
Licensed under the New BSD license. You may not use this file except in
compliance with this License.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/fluidproject.org/master/AUTHORS.md.
*/
/* eslint-disable */
"use strict";
const markdownIt = require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true
});

module.exports = function markdown(value) {
    return markdownIt.render(value);
};

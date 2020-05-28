/* eslint-env es6 */
/* eslint-disable no-console */
"use strict";
const markdownIt = require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true
});

module.exports = function markdown(value) {
    return markdownIt.render(value);
};

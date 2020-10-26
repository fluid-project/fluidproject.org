/*
Copyright OCAD University
Licensed under the New BSD license. You may not use this file except in
compliance with this License.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/fluidproject.org/main/AUTHORS.md.
*/
/* jslint browser: true */
/* global window document */
"use strict";
var link = window.location.pathname;
var index = document.getElementById("indexnav");
var aboutnav = document.getElementById("aboutnav");
var projectsnav = document.getElementById("projectsnav");
var infusionnav = document.getElementById("infusionnav");
var newsnav = document.getElementById("newsnav");
if (link === "/" || link === "/index.html") {
    index.setAttribute("class", "button current");
}
else if (link === "/about.html") {
    aboutnav.setAttribute("class", "button current");
}
else if (link === "/projects.html") {
    projectsnav.setAttribute("class", "button current");
}
else if (link === "/infusion.html") {
    infusionnav.setAttribute("class","button current");
}
else {
    newsnav.setAttribute("class","button current");
}

/*
Copyright 2017 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.
*/

/* eslint-env node */
"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Project package file destination.
        pkg: grunt.file.readJSON("package.json"),
        eslint: {
            all: ["**/*.js"]
        },
        jsonlint: {
            all: ["package.json", ".eslintrc.json"]
        },
        clean: {
            infusion: "src/files/lib/infusion",
            foundation: "src/files/lib/foundation"
        },
        copy: {
            // Copy external front end dependencies into appropriate directories
            frontEndDependencies: {
                files: [
                    // Infusion & UIO
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/dist/",
                        src: "infusion-all.js",
                        dest: "./src/files/lib/infusion"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/components/tableOfContents/",
                        src: "**/*",
                        dest: "./src/files/lib/infusion/src/components/tableOfContents/"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/dist/assets/src/framework/preferences/css",
                        src: "*",
                        dest: "./src/files/lib/infusion/src/framework/preferences/css"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/framework/preferences",
                        src: ["**/*", "!**/js/**"],
                        dest: "./src/files/lib/infusion/src/framework/preferences"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/framework/core/css",
                        src: "fluid.css",
                        dest: "./src/files/lib/infusion/src/framework/core/css"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/lib/jquery/ui/css",
                        src: "**",
                        dest: "./src/files/lib/infusion/src/lib/jquery/ui/css"
                    },
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/lib/fonts",
                        src: "*",
                        dest: "./src/files/lib/infusion/src/lib/fonts"
                    },
                    // Normalize
                    {
                        expand: true,
                        cwd: "./node_modules/infusion/src/lib/normalize/css/",
                        src: "*",
                        dest: "./src/files/lib/infusion/src/lib/normalize/css"
                    },
                    // Foundation
                    {
                        expand: true,
                        cwd: "./node_modules/foundation-sites",
                        src: "**",
                        dest: "./src/files/lib/foundation"
                    }
                ]
            }
        }
    });

    // Load the plugin(s):
    grunt.loadNpmTasks("fluid-grunt-eslint");
    grunt.loadNpmTasks("grunt-jsonlint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");

    // Custom tasks:
    grunt.registerTask("default", ["clean", "installFrontEnd"]);
    grunt.registerTask("installFrontEnd", "Install front-end dependencies from the node_modules directory after 'npm install'", ["copy:frontEndDependencies"]);
    grunt.registerTask("lint", ["eslint", "jsonlint"]);
};

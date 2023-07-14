"use strict";

const fs = require("fs");

const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const fluidPlugin = require("eleventy-plugin-fluid");

// Import filters
const dateFilter = require("./src/filters/date-filter.js");
const markdownFilter = require("./src/filters/markdown-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");

// Import transforms
const parseTransform = require("./src/transforms/parse-transform.js");

// Import data files
const site = require("./src/_data/site.json");

module.exports = function (config) {
    // Filters
    config.addFilter("dateFilter", dateFilter);
    config.addFilter("markdownFilter", markdownFilter);
    config.addFilter("w3DateFilter", w3DateFilter);


    // Transforms
    config.addTransform("parse", parseTransform);

    // Passthrough copy
    config.addPassthroughCopy({"src/assets/images": "assets/images"});
    config.addPassthroughCopy({"src/assets/js": "assets/js"});
    config.addPassthroughCopy({"src/lib": "lib"});
    config.addPassthroughCopy({"src/assets/stylesheets": "assets/stylesheets"});
    config.addPassthroughCopy({"src/news/images": "news/images"});

    // Custom collections
    config.addCollection("news", collection => {
        return [
            ...collection.getFilteredByGlob("./src/news/*.md")
        ];
    });
    // The following collection is used to distribute posts into different pages. However, the default pagination has not been set in fluidproject.org and all posts are shown on single page
    config.addCollection("postFeed", collection => {
        return [...collection.getFilteredByGlob("./src/news/*.md")]
            .reverse()
            .slice(0, site.maxPostsPerPage);
    });

    // Plugins
    config.addPlugin(rssPlugin);
    config.addPlugin(syntaxHighlight);
    config.addPlugin(fluidPlugin);

    // 404
    config.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {

                bs.addMiddleware("*", (req, res) => {
                    const content_404 = fs.readFileSync("dist/404.html");
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.writeHead(404);
                    res.end();
                });
            }
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes"
        },
        templateFormats: ["html", "md"],
        htmlTemplateEngine: "liquid",
        passthroughFileCopy: true
    };
};

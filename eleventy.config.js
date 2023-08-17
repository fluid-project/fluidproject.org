"use strict";

const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const fluidPlugin = require("eleventy-plugin-fluid");

// Import filters
const dateFilter = require("./src/_filters/date-filter.js");
const markdownFilter = require("./src/_filters/markdown-filter.js");
const w3DateFilter = require("./src/_filters/w3-date-filter.js");

// Import transforms
const parseTransform = require("./src/_transforms/parse-transform.js");

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
    config.addPlugin(fluidPlugin, {
        css: {
            enabled: false
        },
        sass: {
            enabled: false
        }
    });

    return {
        dir: {
            input: "src"
        },
        templateFormats: ["html", "md", "njk"],
        htmlTemplateEngine: "liquid",
        passthroughFileCopy: true
    };
};

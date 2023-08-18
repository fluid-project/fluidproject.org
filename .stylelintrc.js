"use strict";

module.exports = {
    extends: "stylelint-config-fluid",
    plugins: ["stylelint-use-logical-spec"],
    ignoreFiles: ["_site/**/*.css", "src/assets/stylesheets/**"],
    rules: {
        "custom-property-pattern": null,
        "import-notation": "string",
        "selector-anb-no-unmatchable": null,
        "selector-class-pattern": null,
        "liberty/use-logical-spec": [
            "always",
            { except: ["float", "top", "left", "right", "bottom"] }
        ]
    }
};

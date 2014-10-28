    $(document).ready(function () {
        fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
            "templatePrefix": "lib/infusion/src/framework/preferences/html/",
            "messagePrefix": "lib/infusion/src/framework/preferences/messages/",
            "tocTemplate": "lib/infusion/src/components/tableOfContents/html/TableOfContents.html",
            components: {
                prefsEditorLoader: {
                    options: {
                        iframeRenderer: {
                            markupProps: {
                                src: "html/SeparatedPanelPrefsEditorFrame.html"
                            }
                        }
                    }
                }
            }
        });
    });

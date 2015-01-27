    $(document).ready(function () {


        var domain = window.location.origin; /* FLUID-5590:
        News posts are nested in a subdirectory, and UIO does not work on those
        pages because the relative path is wrong. To get around this issue, we
        determine the root URL of the client's location using window.location.origin
        and use that to set an absolute path instead.

        Consequently this work-around would break UIO for all pages if the Fluid
        website is not running from a root path. i.e. UIO would break if Fluid site
        is served from user.example.com/fluid/ but would work if served from
        user.example.com/ */


        fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
            "templatePrefix": domain + "/lib/infusion/src/framework/preferences/html/",
            "messagePrefix": domain + "/lib/infusion/src/framework/preferences/messages/",
            "tocTemplate": domain + "/lib/infusion/src/components/tableOfContents/html/TableOfContents.html",
            components: {
                prefsEditorLoader: {
                    options: {
                        iframeRenderer: {
                            markupProps: {
                                src: domain + "/html/SeparatedPanelPrefsEditorFrame.html"
                            }
                        }
                    }
                }
            }
        });
    });

# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    plugins:
        redirector:
            redirects:
                # source: destination
                "index.php/news":"/news.html"
                "projects":"/projects.html"
                "index.php/projects":"/projects.html"
                "about-us/our-mission":"/about.html"
                "about-us/our-funder":"/about.html"
                "about-us/contact-us":"/about.html"
                "getinvolved":"/index.html"
                "partners/fluid-academic-partners":"/index.html"
                "products/infusion/download-infusion":"/infusion.html"
                "products/infusion":"/infusion.html"
                "products/infusion/infusion.html":"/infusion.html"
                "pipermail/fluid-work":"http://lists.idrc.ocad.ca/pipermail/fluid-work/"
                "pipermail/fluid-announce":"http://lists.idrc.ocad.ca/pipermail/fluid-announce"
                "pipermail/infusion-users":"http://lists.idrc.ocad.ca/pipermail/infusion-users"
                "pipermail/fluid-talk":"http://lists.idrc.ocad.ca/pipermail/fluid-talk/"
                "pipermail/vulab-users":"http://lists.idrc.ocad.ca/pipermail/vulab-users/"
                "pipermail/commits":"http://lists.idrc.ocad.ca/pipermail/commits/"
                "pipermail/design-commits":"http://lists.idrc.ocad.ca/pipermail/design-commits/"
                "pipermail/security-announce":"http://lists.idrc.ocad.ca/pipermail/security-announce/"

    watchOptions: preferredMethods: ['watchFile','watch']
    templateData:
        site:
            # URL for server if it is not the root.
            # Change this value to match your server. No trailing slash.
            # Default: http://localhost:9778
            url: "http://localhost:9778"

            styles: [
                "lib/infusion/src/framework/preferences/css/Enactors.css"
                "lib/infusion/src/framework/preferences/css/PrefsEditor.css"
                "lib/infusion/src/framework/preferences/css/SeparatedPanelPrefsEditor.css"
                "lib/foundation/css/foundation.css"
                "css/style.css"
                "css/contrast.css"
                "http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700,100"
                "http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700"
            ]

            scripts: [
                "/lib/infusion/infusion-all.js"
                "/js/uio.js"
            ]

    collections:
          news: ->
              @getCollection("html").findAllLive({relativeOutDirPath: 'news'},[{date: -1}])
          sitenav: ->
              @getCollection("html").findAllLive({isPage: true, navigationIndex: $exists: true},[{navigationIndex: 1}])
}

# Export the DocPad Configuration
module.exports = docpadConfig

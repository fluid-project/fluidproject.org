# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    watchOptions: preferredMethods: ['watchFile','watch']
    templateData:
        site:
            #Production URL with http:// and no trailing slash. i.e. http://example.com
            url: "http://localhost:9778"

    collections:
          news: ->
              @getCollection("html").findAllLive({relativeOutDirPath: 'news'},[{date:-1}])
}

# Export the DocPad Configuration
module.exports = docpadConfig

# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  plugins:
    moment:
      formats: [
        {raw: '@document.postdate', format: 'MMMM Do YYYY', formatted: 'humanDate'}
        {raw: '@document.postdate', format: 'YYYY-MM-DD', formatted: 'computerDate'}
      ]
    
  watchOptions: preferredMethods: ['watchFile','watch']
  templateData:
    site:
      styles: [
        "lib/infusion/src/framework/preferences/css/fss/fss-text-prefsEditor.css"
        "lib/infusion/src/framework/preferences/css/Enactors.css"
        "lib/infusion/src/framework/preferences/css/PrefsEditor.css"
        "lib/infusion/src/framework/preferences/css/SeparatedPanelPrefsEditor.css"
        "/lib/Foundation/css/foundation.css"
        "/css/style.css"
        "/css/contrast.css"
        "http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700,100"
        "http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700"
      ]
      
      scripts: [
        # Infusion will go here.
        "lib/infusion/infusion-custom.js"
        "js/uio.js"
      ]
      
      postDatetime: (date, format="YYYY-MM-DD") -> return moment(date).format(format)
      postDate: (date, format="MMMM DD, YYYY") -> return moment(date).format(format)
}

# Export the DocPad Configuration
module.exports = docpadConfig
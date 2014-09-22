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
        "/lib/Foundation/css/foundation.css"
        "/css/style.css"
        "http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700,100"
        "http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700"
        "fonts/fluid-star.woff"
        "fonts/fluid-star.ttf"
        "lib/Infusion/framework/preferences/css/fss/fss-theme-bw-prefsEditor.css"
        "lib/Infusion/framework/preferences/css/fss/fss-theme-wb-prefsEditor.css"
        "lib/Infusion/framework/preferences/css/fss/fss-theme-by-prefsEditor.css"
        "lib/Infusion/framework/preferences/css/fss/fss-theme-yb-prefsEditor.css"
        "lib/Infusion/framework/preferences/css/fss/fss-theme-lgdg-prefsEditor.css"
        "lib/Infusion/framework/preferences/css/fss/fss-theme-dglg-prefsEditor.css"
        "lib/Infusion/framework/preferences/css/fss/fss-text-prefsEditor.css"
        "lib/Infusion/lib/jquery/ui/css/fluid-web-theme-by/by.css"
        "lib/Infusion/lib/jquery/ui/css/fluid-web-theme-yb/yb.css"
        "lib/Infusion/lib/jquery/ui/css/fluid-web-theme-bw/bw.css"
        "lib/Infusion/lib/jquery/ui/css/fluid-web-theme-wb/wb.css"
        "lib/Infusion/lib/jquery/ui/css/fluid-web-theme-lgdg/lgdg.css"
        "lib/Infusion/lib/jquery/ui/css/fluid-web-theme-dglg/dglg.css"
        "lib/Infusion/framework/preferences/css/PrefsEditor.css"
        "lib/Infusion/framework/preferences/css/SeparatedPanelPrefsEditor.css"
      ]
      
      scripts: [
        "lib/Infusion/infusion-custom.js"
      ]
      
      postDatetime: (date, format="YYYY-MM-DD") -> return moment(date).format(format)
      postDate: (date, format="MMMM DD, YYYY") -> return moment(date).format(format)
}

# Export the DocPad Configuration
module.exports = docpadConfig
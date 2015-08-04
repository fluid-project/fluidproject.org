# Fluid Project Website

This repository contains the files needed to build a copy of the Fluid Project website.

This is not an immediately deployable version of the website - [docpad](http://docpad.org/) is used to build the site from source files.

# To Build Locally

1. Install DocPad if it isn't already installed: `sudo npm install -g docpad`

2. Get the required node modules: `npm install`

3. Edit `docpad.coffee` URL value to reflect your target URL (with no trailing slash). The default value is `http://localhost:9778`. For local testing and development, you should keep this default value.

4. Run docpad from the fluid-website directory `docpad run`.

5. Open `http://localhost:9778/` to see the website.

# To deploy to gh-pages:

1. Start by working from a clone of the repository you want to deploy to. This step is important, otherwise your output may deploy to the wrong location.

2. Change the ``url:`` value in the docpad.coffee to match your deployed gh-pages URL. If you intend to deploy to a custom domain, the URL value should match the target URL: `url: "www.example.com"`
If deploying to gh-pages URL, the URL would look like this: `url: "username.github.io/fluidproject.org"`
3. Deploy to gh-pages, run: `docpad deploy-ghpages --env static`. By doing this, docpad will generate the site to the remote gh-pages branch.

# To deploy to a personal webserver

1. Change the ``url:`` value in the docpad.coffee to match your deployed URL.
2. Run: ``` > docpad generate --env static ```
3. Copy the contents of ```./out/``` directory to your server.

## Notes

- Modifications can be done to any source file or directory except for the contents of the ``out/`` directory. The ``out`` directory and its contents are not to be versioned since it contains the generated output made by docpad from the source files and are overwritten.

- The 404 error page will only appear when deployed to the *root* of a gh-pages domain or gh-pages custom domain. It will not appear when deployed locally or when deployed through a gh-pages (sub) project. To test the 404 error page, either load the 404.html directly in a browser, or deploy to the root of a gh-pages domain.

- There are known issues regarding relative and absolute paths. See [FLUID-5588](http://issues.fluidproject.org/browse/FLUID-5588) and [FLUID-5570](http://issues.fluidproject.org/browse/FLUID-5590).


## Plugins used

The following plugins are used in this website. They a provided here as a reference:

* docpad installed - https://docpad.org/
* docpad handlebars plugin - https://github.com/docpad/docpad-plugin-handlebars/
* moment plugin - https://www.npmjs.org/package/docpad-plugin-moment
* markdown plugin - https://github.com/docpad/docpad-plugin-marked
* stylus plugin - https://www.npmjs.org/package/docpad-plugin-stylus
* eco plugin - https://github.com/docpad/docpad-plugin-eco
* gh-pages plugin - https://github.com/docpad/docpad-plugin-ghpages
* redirector plugin - https://www.npmjs.org/package/docpad-plugin-redirector

## License

The Fluid Project website is available under [Creative Commons Attribution License](http://creativecommons.org/licenses/by/3.0/).

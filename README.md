# Fluid Project Website

This repository contains the files needed to build a copy of the Fluid Project website.

This is not an immediately deployable version of the website - [11ty](http://11ty.dev/) is used to build the site from source files.

# To Build Locally

1. Get the required node modules: `npm install`
2. Run eleventy from the fluid-website directory `npm run eleventyport`.
3. Open `http://localhost:9778/` to see the website. 

# To deploy to a personal webserver

1. Run: `npm run generate`
2. Copy the contents of `./dist/` directory to your server.

## Notes

- Modifications can be done to any source file or directory except for the contents of the `out/` directory. The `out`
  directory and its contents are not to be versioned since it contains the generated output made by docpad from the
  source files and are overwritten.
- The 404 error page will only appear when deployed to the *root* of a gh-pages domain or gh-pages custom domain. It
  will not appear when deployed locally or when deployed through a gh-pages (sub) project. To test the 404 error page,
  either load the 404.html directly in a browser, or deploy to the root of a gh-pages domain.

## License

The Fluid Project website is available under [Creative Commons Attribution License](http://creativecommons.org/licenses/by/3.0/).

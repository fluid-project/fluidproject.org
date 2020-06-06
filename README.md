# Fluid Project Website

1. This repository contains the files needed to build a copy of the Fluid Project website.
2. This is not an immediately deployable version of the website.
3. [11ty](http://11ty.dev/) is used to build the site from source files.

## To Build Locally

1. Get the required node modules: `npm install`
2. Run [eleventy](http://11ty.dev) from the fluid-website directory `npm run eleventyport`.
3. Open `http://localhost:9778/` to see the website.

## To deploy to a personal webserver

1. Run: `npm run build`
2. Copy the contents of `./dist/` directory to your server.

## Notes

1. Modifications can be done to any source file or directory except for the contents of the dist/ directory.
2. The dist directory are not to be versioned since it is the generated output made by 11ty from the source files.
3. The changed source files in dist directory gets overwritten at build time.

## License

The Fluid Project website is available under [Creative Commons Attribution License](http://creativecommons.org/licenses/by/4.0/).

# Fluid Project Website

This repository contains the files needed to build a copy of the Fluid Project website,
it is not an immediately deployable version of the website.
[11ty](http://11ty.dev/) is used to build the site from source files.

## To Build Locally

1. Get the required node modules: `npm install`
2. Run [11ty](http://11ty.dev) from the fluid-website directory `npm run start`.
3. Open `http://localhost:8080/` to see the website.

## To build locally using Docker

You can serve the website from a [Docker](https://docs.docker.com/get-docker) container.

Once you have Docker installed, run the following commands to build a Docker image and start
a container:

* Build the image: `docker build -t fluidproject .`
* Run the container: `docker run --name fluidproject -p 8000:80 fluidproject`

The website will be available at [http://localhost:8000](http://localhost:8000)

If you make changes to the website, repeat the steps to build the image and start a new container.

## To deploy to a Personal Webserver

1. Run: `npm run build`
2. Copy the contents of `./dist/` directory to your server.

## Notes

* Modifications can be done to any source file or directory except for the contents of the `dist` directory.
* The `dist` directory is not versioned since it contains the generated output made by 11ty from the source files,
  and the files in `dist` are overwritten at build time.
* The changed source files in dist directory gets overwritten at build time.

## License

The Fluid Project website is available under [Creative Commons Attribution License](http://creativecommons.org/licenses/by/4.0/).

# Fluid Project Website

This repository contains the files needed to build a copy of the Fluid Project website.

This is not an immediately deployable version of the website - [docpad](http://docpad.org/) is used to build the site from source files.

## Requirements

Download and install the following packages before building the Fluid website:

* docpad installed - https://docpad.org/
* docpad handlebars plugin - https://github.com/docpad/docpad-plugin-handlebars/
* moment plugin - https://www.npmjs.org/package/docpad-plugin-moment
* markdown plugin - https://github.com/docpad/docpad-plugin-marked
* stylus plugin - https://www.npmjs.org/package/docpad-plugin-stylus
* eco plugin - https://github.com/docpad/docpad-plugin-eco


## How to Build for Local Development

1. Clone the fluid website repository
```
> git clone <fluid-website-git-repo>
```

2. Run docpad from the fluid-website directory
```
> cd fluidproject.org
> docpad run
```
   There should be output similar to this:
```
info: Generated 377/379 files in 13.422 seconds
info: Watching setup starting...
info: Watching setup
info: The action completed successfully
```

3. Open http://localhost:9778/ to see the website.

**Note:** docpad runs its own webserver for development. To create a deployable version of the website, see "Building a Deployable Version" below.

## Making Changes and Deploying to Github Pages

Modifications can be done to any source file or directory except for the contents of the ``out/`` directory. The ``out`` directory and its contents are not to be versioned since it contains the generated output made by docpad from the source files and are overwritten.

Pull requests for the modified source files are submitted to the project master repository, and is reviewed by another contributor.

Once the pull request is satisfactory, the reviewer merges the changes. The reviewer also generates the gh-pages content from the updated master.

To generate the gh-pages content, the reviewer does the following:

1. Clone the master repository https://github.com/fluid-project/fluidproject.org

2. Install the gh-pages plugin:
```
> docpad install ghpages
```
3. Check the ``docpad.coffee`` has the proper URL for the production environment. Change the value if required.

4. Then run the github pages deploy command:
```
> docpad deploy-ghpages --env static
```

Completeing these 3 steps will:
- create generate output files under the ``/out/`` directory
- create a new ``gh-pages`` branch in the remote master github repository if it doesn't already exist
- push the files in the ``out`` directory to the remote ``gh-pages`` branch.

For more information on the gh-pages plugin, see: https://github.com/docpad/docpad-plugin-ghpages.

## License

The Fluid Project website is available under [Creative Commons Attribution License](http://creativecommons.org/licenses/by/3.0/).

# Fluid Project Contribution Guidelines

Fluid is an open, collaborative project to improve the user experience and inclusiveness of open source software.
The Fluid community consists of an international team of partners, individuals, and institutions focused on designing inclusive, ﬂexible, customizable, user-centered interfaces. 


The Fluid Project website is built using 11ty

## To run the project locally:
1. Clone the project locally using `git clone https://github.com/fluid-project/fluidproject.org.git`
1. Go to the folder directory where you cloned the project in terminal by usin `cd fluidproject.org`
1. Get the required Node.js modules: `npm install`
1. Run eleventy from the fluid-website directory `npm run eleventyport`.
1. Open `http://localhost:9778/` to see the website. 

**Contributions to the project can be made in following ways:**

### Contribution towards building features for the project.*
  - There are several features that still require attention.
    - Improving the User interface of submitted answers.
    - Search functionality among the site data.
    - Support for Comments.
### Submitting new blog posts or news articles*
   - Go to the `src/posts` folder
   - Create a new Markdown file with title in the following format - `YYYY-MM-DD-{News Article Name with underscores in place for spaces}.md`.
   - Use the YYYY-MM-DD-newsarticlename.md file as template. 
   - Update the date, title and permalink in the front matter.
   - Your article must use the following template for 11ty to process it properly.
   - The template is as follows:
      `---`
      `layout: layouts/post`
      `title: Title of News Article`
      `date: 'YYYY-MM-DD'`
      `tags: post`
      `permalink: YYYY-MM-DD-newsArticleName.html`
      `---`
      `Content Data`

### Reporting Issues or Bugs in the repository
  - Go to  `https://github.com/fluid-project/fluidproject.org/issues/new/choose`
  - Choose the appropriate Issue template from "Bug Report" and "Feature Request"
  - Add Title and Description as per given in the template.
  - Click on 'Submit New Issue'.

**The directory structure is as follows:**

| Folder            | Description                                                                                                                                                                                                                         |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `_.github`        | A list of files and folders which are ignored. It includes the issue and Pull Requests templates for the fluid Project Repository along with node_modules.                                                                          |
| `src`             | Contains all the files needed to build the site using 11ty. This includes the content for all pages and news articles, CSS files, layout and partial templates, and JavaScript files.                                               |
| `.eleventy.js`    | The Configuration file used by 11ty in order to build the site. Specifies the collections for 11ty, [passthrough copy files](https://www.11ty.dev/docs/copy/), and other settings including the source folder for input and output. |
| `.eleventyignore` | Contains folder which are ignored by Eleventy while building the site.                                                                                                                                                              |
| `.gitignore`      | A list of files and folders which won't be tracked by Git.                                                                                                                                                                          |
| `.eslintrc.json`  | [EsLint configuration data](https://eslint.org/docs/user-guide/configuring).                                                                                                                                                        |
| `.eslintignore`   | A list of files and folders which won't be passed through ESLint                                                                                                                                                                    |
| `AUTHORS.md`      | List of copyright holders and contributors                                                                                                                                                                                          |
| `Gruntfile.js`    | Grunt file used to copy data from node_modules and do linting process.                                                                                                                                                              |
| `package.json`    | Pinned list of dependencies required to build the site.                                                                                                                                                                             |
| `README.md`       | Read Me file provides introduction to the repository.                                                                                                                                                                               |

### Pull Requests

After a Pull Request (PR) has been submitted, one or more members of the community will review the contribution. This
typically results in a back and forth conversation and modifications to the PR. Merging into the project repo is a
manual process and requires at least one [Maintainer](https://wiki.fluidproject.org/display/fluid/Fluid+Maintainers) to
sign off on the PR and merge it into the project repo. You may wish to ping a Maintainer on the
[#fluid-work](https://wiki.fluidproject.org/display/fluid/IRC+Channel) IRC channel,
[fluid-work](https://lists.idrc.ocad.ca/mailman/listinfo/fluid-work) mailing list, and/or on the PR itself.

If you still have any qeries/doubts regarding the project, feel free to visit [Get Involved](https://wiki.fluidproject.org/display/fluid/Get+Involved) page of our wiki to connect with us.

# Fluid Project Contribution Guidelines

Fluid is an open, collaborative project to improve the user experience and inclusiveness of open source software.
The Fluid community consists of an international team of partners, individuals, and institutions focused on designing
inclusive, ﬂexible, customizable, user-centered interfaces.

The Fluid Project website is built using [11ty](https://www.11ty.dev/)

## To run the project locally

1. Clone the project locally using `git clone https://github.com/fluid-project/fluidproject.org.git`
2. Go to the directory where you cloned the project in terminal using `cd fluidproject.org`
3. Get the required Node.js modules using `npm install`
4. Run eleventy from the fluid-website directory `npm run start`
5. Open `http://localhost:8080/` in a browser to see the website.

## Contributions to the project can be made in following ways-

### Contribution towards building features for the project

- Go to [Issues page](https://github.com/fluid-project/fluidproject.org/issues) in order to report some bug or suggest
  an improvement/enhancement or a new feature.
- Use the Issues template and Pull Request template provided in the `.github` folder for reporting new issues or submitting
  new Pull Request.

### Submitting new news articles

- Go to the `src/YYYY-MM-DD-newsarticletemplate.md` file
- Create a new Markdown file with title in the following format
  - `YYYY-MM-DD-{News Article Name with underscores in place for spaces}.md`.
- Use the YYYY-MM-DD-newsarticlename.md file as template.
- Update the date, title and permalink in the front matter.
- Your article must use the following template for 11ty to process it properly:
      `---`
      `layout: layouts/post`
      `title: Title of News Article`
      `date: 'YYYY-MM-DD'`
      `filename: Short URL for news. May contain Capital Items but no spaces`
      `---`
      `Content Data`

- The URL for news articles is generated from the date and title metadata.
- If filename metadata is present, then output filename will be created using the date and filename
  (instead of the default date and title filename). Use this option if the article title is too long
  for a good filename, or for supporting legacy posts with unusual naming.
- The use of filename metadata in front matter is optional and should be used only if
  automatic filename of {date}-{title} is not sufficient.

### Reporting Issues or Bugs in the repository

- Go to  `https://github.com/fluid-project/fluidproject.org/issues/new/choose`
- Choose the appropriate Issue template from "Bug Report" and "Feature Request"
- Add Title and Description as per given in the template.
- Click on 'Submit New Issue'.

## The directory structure is as follows

| File or Folder            | Description                                                                                                                                                                                                                         |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `.github`        | Directory containing the Issue templates as well as GitHub Actions workflow configuration files                                                                          |
| `src`             | Contains all the files needed to build the site using 11ty. This includes the content for all pages and news articles, CSS files, layout and partial templates, and JavaScript files.                                               |
| `.eleventy.js`    | The Configuration file used by 11ty in order to build the site. Specifies the collections for 11ty, [passthrough copy files](https://www.11ty.dev/docs/copy/), and other settings including the source folder for input and output. |
| `.eleventyignore` | A list of files and folders which are ignored by Eleventy while building the site                                                                                                                                                              |
| `.gitignore`      | A list of files and folders which won't be tracked by Git.                                                                                                                                                                          |
| `.eslintrc.json`  | [ESLint configuration data](https://eslint.org/docs/user-guide/configuring).                                                                                                                                                        |
| `.eslintignore`   | A list of files and folders which won't be passed through ESLint                                                                                                                                                                    |
| `AUTHORS.md`      | List of copyright holders and contributors                                                                                                                                                                                          |
| `Gruntfile.js`    | Grunt file used to copy data from node_modules and do linting process.                                                                                                                                                              |
| `package.json`    | Contains scripts and a list of dependencies required to build the site, as well as general information about the repository                                                                                                                                                                             |
| `README.md`       | Read Me file provides introduction to the repository.                                                                                                                                                                               |

### Pull Requests

After a Pull Request (PR) has been submitted, one or more members of the community will review the contribution. This
typically results in a back and forth conversation and modifications to the PR. Merging into the project repo is a
manual process and requires at least one [Maintainer](https://wiki.fluidproject.org/display/fluid/Fluid+Maintainers) to
sign off on the PR and merge it into the project repo. You may wish to ping a Maintainer on the
[#fluid-work](https://wiki.fluidproject.org/display/fluid/IRC+Channel) IRC channel,
[fluid-work](https://lists.idrc.ocad.ca/mailman/listinfo/fluid-work) mailing list, and/or on the PR itself.

If you have any questions or comments regarding this repository, feel free to visit
[Get Involved](https://wiki.fluidproject.org/display/fluid/Get+Involved) page of our wiki to connect with us.


Clone the Forked Repository:

git clone <forked_repository_url>
cd <forked_repository_directory>
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
Configure the Upstream Remote:

 
git remote add upstream <original_repository_url>
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
Create a New Branch and Switch to It:

 
git checkout -b <new_branch_name>
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
Make Changes and Commit Them:

 
git status  # Optional: to view the status of your changes
git add <file(s)_to_add>  # Add specific files or use "." to add all changes
git commit -m "Commit message"
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
Fetch Upstream Changes and Rebase Your Branch:

 
git fetch upstream
git rebase upstream/master
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------

Push the Changes to Your Forked Repository:

git push origin <new_branch_name>
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
Create a Pull Request:

Go to your forked repository on GitHub and create a pull request from your newly pushed branch to the original repository.

Update Your Forked Branch:

If the original repository has new changes after you created the pull request, you can update your forked branch by following these steps:

php
 
git checkout <new_branch_name>
git fetch upstream
git rebase upstream/master
git push origin <new_branch_name> --force
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------

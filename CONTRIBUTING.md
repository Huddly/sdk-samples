# Contributing to @huddly/sdk

✨ Thanks for contributing to our sdk code samples! ✨

As a contributor, here are some of the guidelines we would like you to follow:
- [How can I contribute?](#how-can-i-contribute)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Coding rules](#coding-rules)

Also, we strongly recommend that you read [How to Contribute to Open Source](https://opensource.guide/how-to-contribute).

## How can I contribute?
You as a user of our sdk module are the perfect candidate for contributing on improving our code samples: typo corrections, clarifications, more examples (rest api, azure iot ...).

Please try to be concise and clear when writing documentation, use links when appropriate and write examples if deemd necessary to help the reader understand better.

### Give feedback on issues
Contribute on submitted issues by discussing implementation, structure, extended use cases etc. Give feedback or provide additional information.

### Fix bugs or add new use cases
Fork the code sample github repo and submit a pull request. Use the labels to indicate the nature of the new feature (or bugfix) and request reviews from some of the [@huddly/maintainers](https://github.com/orgs/Huddly/teams/app).

## Submitting a Pull Request
Good pull requests, no matter if they are patches, improvements, or new features, are a fantastic help. Please make sure your Pull Requests remain focused in scope and don't have unrelated commits.

**It is Important** to ask first before you decide to go ahead and work on a significant pull request (e.g. implementing new features, refactoring) if you don't want to spend time on implementing something that might end up not being merged into main branch.

If you are unfamiliar with the procedure of creating a Pull Request, fear not. [Here is a great tutorial](https://opensource.guide/how-to-contribute/#opening-a-pull-request) on how to do just that :)

Here is a summary of the steps to follow:

1. [Set up the workspace](#set-up-the-workspace)
2. Go to the corresponding sample folder and install the dependencies:
```bash
$ git checkout main
$ git pull upstream main
$ cd huddly_l1
$ rm -rf node_modules
$ npm i
```
3. Create a new topic branch to contain your feature, change, or fix:
```bash
$ git checkout -b <topic-branch-name>
```
4. Make your code changes, following the [Coding rules](#coding-rules)
5. Push your topic branch up to your fork:
```bash
$ git push origin <topic-branch-name>
```
6. [Open a Pull Request](https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request) with a clear title and description.

**Tips**:

- For ambitious tasks, open a Pull Request as soon as possible with the `[WIP]` prefix in the title, in order to get feedback and help from the community.
- [Allow Huddly maintainers to make changes to your Pull Request branch](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork). This way, we can rebase it and make some minor changes if necessary. All changes we make will be done in new commit and we'll ask for your approval before merging them.

## Coding rules

### Source code

To ensure consistency and quality throughout the source code, all code modifications must have:
- No [linting or code formatting](#lint) errors
- [Valid commit message(s)](#commit-message-guidelines)
- Documentation for new examples using a Readme.md file for getting started
- Updated documentation for modified examples

### Commit message guidelines

In order to structure a commit in a clean, understandable and parsable way, we use an npm module called `commitizen`. Using  [commitizen](https://github.com/commitizen/cz-cli) you will be promted with a wizard that asks you a few meta questions about your commit. Please keep in mind that the commit messages will be included in the release notes, therefore it is important that you use the proper way of creating a git commit message.

Install `commitizen` on your development environment as a global npm module by running the following command:

```
npm install -g commitizen
```
This will create a git alias on your development environment which you can use in the following way:
* Proceed with your normal development workflow
* Stage your changes using `git add`
* Run `git cz` to start the interactive commit message CLI

SDK has a pre-commit hook that runs `prettier-check` and `build` npm scripts before each commit. Make sure that these checks pass before you run `git cz` as all meta information given on the interactive mode will be discarded if the pre-commit hook fails.

**NOTE** We require that you have properly formatted commits when submitting a PR.

**Tips**:

If you are used to creating a lot of commits before submitting a pull request, you can create standard git commits during development. However, when preparing your feature branch for PR and merge, make sure you do the following:
- Squash all yourt commits in one (if possible)
- Create a new commit using `git cz` with a proper commit message
- Rebase your commits so that all your previously squashed commits are rebased into your last properly formatted commit. Use that commit to submit the PR.

Examples:
```commit
Author: Brikend Rama <brikend@huddly.com>
Date:   Wed Jun 5 09:41:05 2019 +0200

feat(release-process): added plugins for aiding release process

Using the commitizen and az-conventional-changelog dependenceis it is possible to structure the
commit message in a proper and standard way which will help possible another module for generating the release notes when releasing a new version of the sdk dependency
```

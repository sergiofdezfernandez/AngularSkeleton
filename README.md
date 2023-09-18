# AngularSkeleton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.
This is a test repository that has the basic configurations of an angular environment with formatter, linter and commit controller.

## Description

How to enhance development flow with tools which allow you ensure your commits following code style rules, passing rules etc...

## Tools

Husky is based on git hooks which are scripts executed before and after any command on git, for example we can create git pre-commit hook in order to execute linter and test battery which are executed before doing commit, if everything goes well commit is executed otherwise the commit won't be executed. With this way we ensure that our repository is always in a good state with passed tests and with the right code style.

Lint-staged we only execute the linter throug the staged files by saving us the rest of files which are supposed to be in a the correct state. With this way we improve the performance.

## lint-staged config

All files with those extensions must execute eslint.
file : [.lintstagedrc]()
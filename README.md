<p align="center">
<a href="https://lab900.com" target="_blank">
    <img src="https://lab900.github.io/angular-libraries/assets/images/logo-duo-dark.svg" width="100">
</a>
<h1>Lab900 - Angular UI library</h1>

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

</p>

A set of Angular 11+ form components built on top of [Angular Material](https://material.angular.io/). \
View the [showcase](https://lab900.github.io/angular-libraries/) for guides & examples

## Getting started

- [UI library](https://lab900.github.io/angular-libraries/ui/getting-started)

## Dev setup

1. Go to project root in terminal
2. $ npm i --legacy-peer-deps
3. $ npm run watch:ui
4. $ npm run start

## Automatic deployment via Google Cloud

1. Start working from the dev branch for new features. Make pull requests to dev before merging.
2. Any push to dev will automatically trigger a deploy to NPM with an alpha release (e.g. 3.0.1-alpha.1). The alpha build numbers are automatically incremented and the main version is kept.
3. Any push to main will automatically trigger a deploy to NPM with the version found in lib/package.json. This means you need to manually set the version in the package.json to release a full version.

## Manual Deploy to NPM (deprecated)

1. $ npm login
2. $ ./deploy.sh
3. Commit and push version increment to repository

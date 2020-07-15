# Welcome to huntweb 👋
[![License: GPL--3.0](https://img.shields.io/badge/License-GPL--3.0-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)

> Application developed in the **Starter / ReactJS** course by **Rocketseat**.
> It consists of a frontend interface to expose the API built in the [node-api project](https://z10nn.github.io/Rocketseat/Starter/NodeJS/node-api/), displaying the web products registered in the Mongo database.

## Online preview
* To help visualize the application, an online preview was set up using [Rocketseat's API](https://rocketseat-node.herokuapp.com/api/products) as backend: **[click here](https://z10nn.github.io/Rocketseat/Starter/ReactJS/huntweb/build) to see it.**

## Prerequisites
* Make sure you have installed all of the following prerequisites on your machine:
  * [Git](https://git-scm.com/downloads);
  * [Node.js](https://nodejs.org/en/download/) with npm package manager.

## Installation
### Development Server
1. Clone the repository
```sh
$ git clone git@github.com:z10nn/Rocketseat.git
```
2. Do *[BrowserRouter](https://github.com/rafgraph/spa-github-pages#usage-instructions)* replacement
```sh
$ cd Rocketseat/Starter/ReacJS/huntweb/
$ vim routes.js
```
```javascript
--- <BrowserRouter basename="/Rocketseat/Starter/ReactJS/huntweb/build" />
+++ <BrowserRouter>
```
3. Install node modules
```sh
$ npm install
```

### Production Server
* [React deployment documentation](https://create-react-app.dev/docs/deployment/#github-pages)
* [GitHub Pages](https://github.com/rafgraph/spa-github-pages#usage-instructions)

## Usage
### Development Server
```sh
$ npm run start
```

### Production Server
```sh
$ npm run build
```
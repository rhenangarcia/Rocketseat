# Welcome to huntapp 👋
[![License: GPL--3.0](https://img.shields.io/badge/License-GPL--3.0-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)

> Application developed in the **[Starter / React Native](https://rocketseat.com.br/starter)** course by **[Rocketseat](https://rocketseat.com.br/)**.
> It consists of a mobile application to expose the API built in the [node-api project](https://z10nn.github.io/Rocketseat/Starter/NodeJS/node-api/), displaying the web products registered in the Mongo database.

## Online preview
* To help visualize the application, an online preview was set up using [Rocketseat's API](https://rocketseat-node.herokuapp.com/api/products) as backend: **[click here](https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?autoplay=true&debug=true&device=iphone6s&deviceColor=black&embed=true&orientation=portrait&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXKernelLaunchUrlDefaultsKey%22:%22exp:%2F%2Fexpo.io%2F@z10n%2F1f4916%2BEuyPBsMWf%22,%22EXKernelDisableNuxDefaultsKey%22:true%7D&scale=75&osVersion=13.3) to see it on iPhone 6S or [here](https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=true&debug=true&device=nexus5&deviceColor=black&embed=true&launchUrl=exp:%2F%2Fexpo.io%2F@z10n%2F1f4916%2BAmgycRogk&orientation=portrait&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXKernelLaunchUrlDefaultsKey%22:%22exp:%2F%2Fexpo.io%2F@z10n%2F1f4916%2BAmgycRogk%22,%22EXKernelDisableNuxDefaultsKey%22:true%7D&scale=75&osVersion=8.1) to see it on Nexus 5.**

## Prerequisites
* Make sure you have installed all of the following prerequisites on your machine:
  * [Git](https://git-scm.com/downloads);
  * [Node.js](https://nodejs.org/en/download/) with npm package manager;
  * [Android emulator](https://react-native.rocketseat.dev/android/emulador) **or/and** [iOS simulator](https://react-native.rocketseat.dev/ios/macos).

## Installation
1. Clone the repository
```sh
$ git clone git@github.com:z10nn/Rocketseat.git
```
2. Install node modules
```sh
$ cd Rocketseat/Starter/React\ Native/huntapp/
$ npm install -g yarn
$ yarn install
```

## Usage
### Development Environment (Android)
* Start Android emulator.
```sh
$ yarn android
$ yarn start
```

### Development Environment (iOS)
* Start iOS simulator.
```sh
$ yarn ios
$ yarn start
```

### Production Environment
* [Android devices](https://reactnative.dev/docs/signed-apk-android)
* [iOS devices](https://readybytes.in/blog/how-to-deploy-a-react-native-ios-app-on-the-app-store)
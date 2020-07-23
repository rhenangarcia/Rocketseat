# Welcome to huntexpo 👋
[![License: GPL--3.0](https://img.shields.io/badge/License-GPL--3.0-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)

> [Expo version](https://expo.io/) of the application developed in the **[Starter / React Native](https://rocketseat.com.br/starter)** course by **[Rocketseat](https://rocketseat.com.br/)**.
> It consists of a mobile application to expose the API built in the [node-api project](https://rhenangarcia.github.io/Rocketseat/Starter/NodeJS/node-api/), displaying the web products registered in the Mongo database.
> [Why use Expo?](https://docs.expo.io/workflow/already-used-react-native/)

## Online preview
* To help visualize the application, an online preview was set up using [Rocketseat's API](https://rocketseat-node.herokuapp.com/api/products) as backend:
  * **[Click here](https://snack.expo.io/@z10n/1f4916)** to see it on browser;
  * **[Click here](https://expo.io/@z10n/huntexpo)** to know how to open inside the Expo app.

## Prerequisites
* Make sure you have installed all of the following prerequisites on your machine:
  * [Git](https://git-scm.com/downloads);
  * [Node.js](https://nodejs.org/en/download/) with npm package manager;
  * [Android emulator](https://react-native.rocketseat.dev/android/emulador) **or/and** [iOS simulator](https://react-native.rocketseat.dev/ios/macos);
  * *Optional: [Expo Android app](https://play.google.com/store/apps/details?id=host.exp.exponent) **or/and** [Expo iOS app](https://apps.apple.com/us/app/expo-client/id982107779).*

## Installation
1. Clone the repository
```sh
$ git clone git@github.com:rhenangarcia/Rocketseat.git
```
2. Install node modules
```sh
$ cd Rocketseat/Starter/React\ Native/huntexpo/
$ npm install -g yarn expo-cli
$ expo install
```

## Usage
### Development Environment (Android)
```sh
$ expo start
```
* To run on *Android emulator*:
  1. Start emulator;
  1. Press "a" on console.
* To run on *Android device*:
  1. Scan the QR code that console showed with the Expo app.

### Development Environment (iOS)
```sh
$ expo start
```
* To run on *iOS simulator*:
  1. Start simulator;
  1. Press "i" on console.
* To run on *iOS device*:
  1. Scan the QR code that console showed with the Camera app (be sure to have the Expo app installed).

### Production Environment
* [Publishing to Expo servers](https://docs.expo.io/workflow/publishing/)
* [Building standalone apps](https://docs.expo.io/distribution/building-standalone-apps/)

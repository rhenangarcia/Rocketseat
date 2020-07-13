# Welcome to node-api 👋
[![License: GPL--3.0](https://img.shields.io/badge/License-GPL--3.0-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)

> Application developed in the **Starter / NodeJS** course by **Rocketseat**.
> It consists of an API connected to a Mongo database performing basic CRUD operations to handle storage of web products.

## Prerequisites
Make sure you have installed all of the following prerequisites on your machine:
* [Git](https://git-scm.com/downloads);
* [Node.js](https://nodejs.org/en/download/) with npm package manager;
* [Docker](https://docs.docker.com/engine/install/) **or** [MongoDB](http://www.mongodb.org/downloads) running on the default port (27017).

## Installation
### With Docker
```sh
$ docker pull mongo
$ git clone git@github.com:z10nn/Rocketseat.git
$ cd Rocketseat/Starter/NodeJS/node-api/
$ npm install
```

### With MongoDB
```sh
$ git clone git@github.com:z10nn/Rocketseat.git
$ cd Rocketseat/Starter/NodeJS/node-api/
$ npm install
```

## Usage
### With Docker
```sh
$ docker run --name mongodb -p 27017:27017 -d mongo
$ node server.js
```
* Access [http://localhost:3001/api/products](http://localhost:3001/api/products) on your browser.

### With MongoDB
```sh
$ node server.js
```
* Access [http://localhost:3001/api/products](http://localhost:3001/api/products) on your browser.

## API documentation
### *Product* data model
```
{
  "title": String,
  "description": String,
  "url": String,
  "createdAt": Date
}
```

### HTTP methods
* `GET` **/products&page=*PAGE_NUMBER***
  * Show detailed products list using pagination query.
* `GET` **/products/id**
  * Show product details by ID.
* `POST` **/products**
  * Create product sending a JSON body.
* `PUT` **/products/id**
  * Update product by ID sending a JSON body.
* `DELETE` **/products/id**
  * Delete product by ID.
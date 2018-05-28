# Friend-Finder-Node-Express
> ### Example of Expressjs + Nodejs codebase containing real world examples (API's through User Input and Server Setup) that simulates an online dating app. 

This repo is functionality in-complete — PRs and issues welcome it's 90% done!!

## Project Overview

In this example, I created a dating app called Friend Finder with Expressjs and Nodejs. This app takes user input through a form and displays their best match. 

# View Demo  

To view demo click on this link: ([Heroku Demo Link](https://floating-depths-56039.herokuapp.com))

# Getting started Locally 

To get the Node server running locally:

- Clone this repo ([GIT](https://github.com/dointhedev/Node.js-MySQL-CLI-APP.git))
- Install Nodejs on your Mac ([Download](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew))
- `npm install` to install all required dependencies
- load the .sql file locally and make sure the credentials match up. 
- `node server.js` to start the node application.


# Code Overview

## Dependencies
- [body-parser](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
- [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework (for servers) for node.
- [path](https://www.npmjs.com/package/path) - This is an exact copy of the NodeJS ’path’ module published to the NPM registry.

## Dev Dependencies

- [nodmon](https://www.npmjs.com/package/nodemon) - nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

## Application Structure

- `server.js` - The entry point to our application for the customer user type.
- `/routes` - The routes of this application.
- `/public` - All public facing assets are in this directory
- `/data` - Data objects for this app.





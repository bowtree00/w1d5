var chalk = require("chalk");

var message = chalk.red("Hello ") + chalk.black.bgGreen.bold("World");
console.log(message);
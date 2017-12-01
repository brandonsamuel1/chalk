var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World!") + chalk.blue(" My ") + chalk.italic("name ") + chalk.blue("is ") + chalk.magenta("Brandon ");
console.log(message);
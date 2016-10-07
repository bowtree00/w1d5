// Requires the module
// 
//var getsFunction = require('./firstModule.js').myModulesFunction

var getsFunction = require('./firstModule.js');

// var test = getsFunction;

// console.log("This is: ", typeof test);
console.log(getsFunction.myModulesFunction());
#!/usr/bin/env node
const weather = require("./lib/weather");
const args = process.argv.slice(2);

// console.log(args);
const [city, country] = args;
weather(city, country).then(console.log).catch(console.error);
// calling a weather will give an api
// it has to be at the very first line, doesnt matter if on server or local #! this will trigger the Shebang, command line- for any unix app always starts with #!

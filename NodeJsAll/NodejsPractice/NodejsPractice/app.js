'use strict';
// callback

/* setTimeout(function () {
    console.log("Hello wolrd");
}, 2000);
console.log("Timer is on");

console.log(process);  */

// blocking synchronous

/* var fs = require("fs");
var content = fs.readFileSync("hi.txt");
console.log(content.toString());
console.log("My name is"); */

// non blocking

var fs = require("fs");
fs.readFile("hi.txt", function (err,content)
{
    if (err)
        return console.error(err);
    console.log(content.toString());
});
console.log("My name is");
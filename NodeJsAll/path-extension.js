var path = require("path");

var filename = "C:\NodeJsPractice\file-dirnames.js";

var extensionName = path.extname(filename);
var baseName = path.basename(filename);

console.log(extensionName);
console.log(baseName);
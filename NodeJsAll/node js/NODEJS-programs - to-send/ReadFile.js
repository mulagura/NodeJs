var fs=require("fs");
var content=fs.readFileSync("Details.txt");
console.log(content.toString());
console.log("Proceeding to other db steps");


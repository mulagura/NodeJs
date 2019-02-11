var fs = require("fs");

var filename = "somedata.txt";

fs.stat(filename,function(err,allstats)  // 
{

console.log(filename);
console.log();         // empty line for space
console.log(allstats);
console.log("file size is:",+Math.round(allstats.size/1024));   // in kb and rounding off
console.log();

var size = Math.round(allstats.size);

console.log(size);

if(allstats.isFile())
{
	console.log("file it is");
}
if(allstats.isDirectory())
{
	console.log("its directory");
}

console.log();

console.log("birthtime of file is:" + allstats["birthtime"]);

});
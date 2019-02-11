var fs = require("fs");
var http = require("http");

var readStream = fs.createReadStream("Test.txt","");

var writeStream = fs.createWriteStream("Test2.txt","");

var des = readStream.pipe(writeStream);     /* it reads data and writes data*/

console.log(des);  /*returns all properties*/
console.log(des.path);   /*returns path of piped file*/

/*and*/


var fs = require("fs");
var http = require("http");

http.createServer(function(req,res)
{

	res.writeHead(200,{'content-type':'text/plain'});

	var readStream = fs.createReadStream("sample.mp4","");

	readStream.pipe(res);   /*writes text file in html as text/plain*/

	/*res.end("Hi");
*/
}).listen(1234);

console.log("Its Live on localhost:1234");
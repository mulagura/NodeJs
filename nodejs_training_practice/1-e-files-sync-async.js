var http = require("http");
var fs = require("fs");

http.createServer(function(req,res)
{
  res.writeHead(200,{"content-type":"text/plain"});
	res.end("Hello Ram");
}).listen(1234);

fs.readFile("1-e-files-sync-async.txt","utf8",function(err,data)
{
  if (err) return console.error(err);
  console.log(data);
});

// var readSync = fs.readFileSync("1-e-files-sync-async.txt","utf8");
// console.log(readSync);

fs.writeFile("1-e-files-sync-async.txt","data changed",function(err)
{
  if (err) return console.error(err);
  console.log('The file has been saved!');
});


var read = fs.readFileSync("1-e-files-sync-async.txt", "utf8");   /*reads file synchoronsly*/

console.log(read);

var write = fs.writeFileSync("Test1.txt", read);    /*writes file synchoronsly*/

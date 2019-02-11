var http = require("http");
var fs = require("fs");

http.createServer(function(req,res)
{
  res.writeHead(200,{"content-type":"text/plain"});
	res.end("Hello Ram");

}).listen(1234);

var directory = __dirname;
console.log(directory);

fs.readdir(directory,function(err,data)
{
  if (err) return console.error(err);
  console.log(data);
});

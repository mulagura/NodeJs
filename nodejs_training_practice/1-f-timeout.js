var http = require("http");

http.createServer(function(req,res)
{
  res.writeHead(200,{"content-type":"text/plain"});
	res.end("Hello Ram");
}).listen(1234);

var arr = ["mangoes","Berries","japon","cheeseballs"];
console.log("length of an array is:",+arr.length);

for(var i=0;i<arr.length;i++)
{

  setTimeout(function(err){
    if (err) return console.error(err);
    console.log("Hii tik tok");
  },5000);

}

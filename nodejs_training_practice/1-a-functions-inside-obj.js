var http = require("http");

http.createServer(function(req,res)
{
  res.writeHead(200,{"content-type":"text/plain"});
	res.end("Hello Ram");

}).listen(1234);

var obj = {
    myVar:"Ram",
    myFunction:function(a,b)
    {
      return a+b;
    }
};
var sum = obj.myFunction(2,3);
var name = obj.myVar;
console.log("Sum is:"+sum);
console.log("Name is:"+name);

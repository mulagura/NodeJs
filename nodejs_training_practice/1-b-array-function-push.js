var http = require("http");

http.createServer(function(req,res)
{
  res.writeHead(200,{"content-type":"text/plain"});
	res.end("Hello Ram");

}).listen(1234);

// push variable into array
var arr = ["sita","Ram","Laxman"];
var another = "Hanuman";
arr.push(another);
console.log(arr);

// push function through var refence into array
function myFunction(a,b)
{
  return a+b;
}
var sum = myFunction(2475885,984689234);
arr.push(sum);
console.log(arr);

// push function
function multiply( a,b) {
  return a*b;
}
arr.push(multiply(10,20));
console.log(arr);

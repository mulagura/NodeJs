var http = require("http");

http.createServer(function(req,res)
{
	res.writeHead(200,{'Content-Type':'application/json'});

	var jsonObj = {

		name: "Ram Mulagura",
		age: 23
	};

	res.end(JSON.stringify(jsonObj));

}).listen(1234);

console.log("Its Serving on localhost:1234");
var http = require("http");

http.createServer(function(req,res)
{
	var text = "Hi this Ram Mulagura";
	var con_length = text.length;
	res.writeHead(200,
		{
			"Content-Length": con_length,
	        "Content-Type": "text/plain"
	    });
	res.end(text);
	//console.log(con_length);
}).listen(1234);
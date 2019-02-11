var http = require("http");
var fs = require("fs");

http.createServer(function(req,res)
{
	console.log("Requested ulr is : " + req.url);   /*this is url you requested on browser*/

    if(req.url === '/home' || req.url ==='/')
    {
    	res.writeHead(200,{'Content-Type':'text/html'});
    	var readStream = fs.createReadStream("pipe.html","");
    	readStream.pipe(res);
    }

    else
    {

		res.writeHead(200,{'Content-Type':'application/json'});
		
		var jsonObj = {

			name : "Nee kenduku",
			age : "cheppanu"
		};

		res.end(JSON.stringify(jsonObj));      /* this is response you get on browser*/
    }

}).listen(1234);

console.log("Hey its live on localhost:1234");
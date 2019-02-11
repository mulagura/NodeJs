var http = require("http");


http.createServer(function(req,res)
{
  res.writeHead(200,{"content-type":"text/plain"});
	res.end("Hello Ram");
}).listen(1234);

var options = {
  host: 'www.yahoo.com',
  port: 80,
  path: '/upload',
  method: 'POST'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();

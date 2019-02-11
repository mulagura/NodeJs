var fs = require("fs");
var net = require("net");
var filename = process.argv[2];

var server = net.createServer(function(connection)
{
		//console.log(process.argv);
		console.log("connected...!!");
		connection.write(JSON.stringify({
			type:'watching';
			file:'filename';
		}) + "\n" );
});
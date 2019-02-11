var fs = require("fs");
var file = "data.txt";

fs.readFile(file,"utf-8",function(err,data)
{
	if (err) throw err;
	else
	{
		console.log(data);
	}
});

//error catching

process.on("uncaughtException",function(err)
{
	console.log("caught an error bro !!")
});
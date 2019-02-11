var fs = require("fs");
var path = require("path");

var file = "C:\NodeJsPractice\file-dirnames.js";

fs.exists(file,function(err,data)
{
	if(err) throw err;
	else
	{
		console.log("Path exists and path is :" +file);
	}
});
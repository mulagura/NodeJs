var fs = require("fs");
var file="data.txt";
var domain = require("domain").create();

domain.run(function()
{

fs.readFile(file,"utf-8",function(err,data)
{
	if (err) throw err;
	else
	{
		console.log(data);
	}
});

});

//error catching using domain

domain.on("error",function(err)
{
	console.log("Pattesa error ni");
});


/*or*/


var fs = require("fs");
var file="data.txt";
var domain = require("domain");

var msg = new domain.create();

msg.run(function()
{

fs.readFile(file,"utf-8",function(err,data)
{
	if (err) throw err;
	else
	{
		console.log(data);
	}
});

});

//error catching using domain

msg.on("error",function(err)
{
	console.log("Pattesa error ni");
});
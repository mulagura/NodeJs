var express = require("express");

var app = express();

app.get('/',function(req,res)          /*serves at localhost:1234*/
{
	res.send("This is Home or / page");    /*writing content on html page*/
});

app.get('/contact',function(req,res)    /*serves at localhost:1234/contact*/
{
	res.send("This is contact page");
});

app.listen(1234,function()      /*listens to port 1234 as http.listen*/
{
	console.log("I am serving at localhost:1234");
});
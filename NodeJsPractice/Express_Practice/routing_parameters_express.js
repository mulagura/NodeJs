var express = require("express");

var app = express();

/*var id = 12345;*/

app.get('/contact/:id',function(req,res)      /*passing id param*/
{
	res.send("This is contact page and id will be :" +req.params.id);  /*to get id use req.params.id*/
});

/*or
*/

var jsonStudent = 
{
	1 : 'Ram',
	2 : 'Mulagura'
};

/*or*/

var jsonStudent = 
{
	name : 'Ram',
	age : '23'
};

app.get('/contact1/:id',function(req,res)      
{
	res.send("This is contact page and id will be :" +jsonStudent[req.params.id]);  /*can acces jsonStudent obj here*/
});


app.listen(1234,function()   
{
	console.log("I am serving at localhost:1234");
});
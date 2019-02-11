/**
 * Demonstration of Express Views with Jade template
 */
var express=require('express'),
	path=require('path');
	
var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

app.get('/',function(req,res) {
	res.render('home',{firstParagraph:'Welcome to home page'});
});

app.get('/sample',function(req,res) {
	res.render('sample',{mobile:9880012345,para:'Some Para Text'});
});
	
app.listen(3000);
console.log("Access through http://localhost:3000/");	
	

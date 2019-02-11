var express = require('express'),
	path = require('path');
var app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home.html', function (req, res) {
   res.sendFile( __dirname + "/" + "home.html" );
});

app.get('/stylusindex', function (req, res) {

   // Prepare output in JSON format
   response = {
       num1:req.query.num1,
       num2:req.query.num2
   };
   console.log(response);
   var msg;
   if(parseInt(req.query.num1) > parseInt(req.query.num2))
	   msg ='Highest of '+ req.query.num1 + ' and '+ req.query.num2 +' is ' +req.query.num1  ;
   else 
	   msg = 'Highest of '+ req.query.num1 + ' and '+ req.query.num2 +' is ' +req.query.num2 ;
   
   res.render('stylusindex', { layout: 'stylus_layout', msg: msg});
   
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
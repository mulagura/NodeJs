/**
 * Demonstration of Express Views with Jade template
 */
var express = require('express'),
    path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/',function(req,res) {
	res.render('home');
});

app.get('/:viewname', function(req, res) {
    res.render(req.params.viewname);
});

app.listen(3000);
console.log('Access through http://localhost:3000/');

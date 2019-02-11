/**
 * Demonstration of Express Views with Jade template
 */
var express = require('express'),
    path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home',function(req,res) {
	res.render('home');
});

app.get('/employee', function(req, res) {
    res.render('employee');
});

app.listen(3000);
console.log('Access through http://localhost:3000/');

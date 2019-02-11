var express = require('express'),
    path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/',function(req,res) {
	res.render('home');
});

app.get('/sample', function(req, res) {
    res.render('sample');
});

app.listen(3000);
console.log('Access through http://localhost:3000/');

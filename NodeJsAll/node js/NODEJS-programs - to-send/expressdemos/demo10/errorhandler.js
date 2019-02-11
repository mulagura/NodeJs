/**
 * Demonstration of error handling in Express
 */
var express = require('express'),
    path = require('path');
var app = express();

 var notFound = function(req, res, next) {
    res.statusCode = 404;
    res.description = 'Not found';
    res.render('404');
}

var errorHandler = function(err, req, res, next) {
    res.statusCode = 500;
    res.description = 'Internal error';
    res.render('500');
}

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));


app.get('/', function(req, res) {
    res.send('Home page ...');
});

app.get('/employee', function(req, res) {
    res.render('employee');
});

app.get('/customer', function(req, res) {
    res.render('customer');
});

app.use(notFound);
app.use(errorHandler);

app.listen(3000);
console.log('Access through http://localhost:3000/');

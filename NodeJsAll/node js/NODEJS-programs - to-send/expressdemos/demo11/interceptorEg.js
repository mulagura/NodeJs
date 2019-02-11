/**
 * Demonstration of Express Interceptors
 */
var express = require('express');
var app = express();

var globalInterceptor = function(req, res, next) {
	console.log('GLOBAL INTERCEPTOR called');
	next();
}

var singleInterceptor = function(req, res, next) {
	console.log('SINGLE INTERCEPTOR called');
	next();
}

app.use(globalInterceptor);

app.get('/', function (req, res) {
    res.send('Get method of root ...');
});

app.get('/single', singleInterceptor, function(req, res) {
    res.send('Get method of single ...');
});

app.listen(3000);
console.log('Access through http://localhost:3000/');

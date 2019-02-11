/**
 * Demonstration of Request/response handling
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Welcome to express!');
});

app.get('/employee', function(req, res) {
    res.send('Welcome to employees section');
});

app.listen(3000);
console.log('Access through http://localhost:3000/');

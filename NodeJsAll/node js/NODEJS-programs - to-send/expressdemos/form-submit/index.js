/**
 * Demonstration of Request/response handling
 */
var express = require('express');
var employee=require('./employee');

var app = express();
app.get('/employee',employee.index);

app.listen(3000);
console.log('Access through http://localhost:3000/');

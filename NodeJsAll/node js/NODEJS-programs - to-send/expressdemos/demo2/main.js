var express = require('express');
var home=require('./home');
var employee=require('./employee');

var app = express();
app.get('/', home.index);
app.get('/employee',employee.index);
app.get('/employee/contacts',employee.contacts);

app.listen(3000);
console.log('Access through http://localhost:3000/');

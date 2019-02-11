var express = require('express');
var employee=require('./employee');

var app = express();
app.get('/employee/contacts',employee.contacts);
app.get('/employee/:id',employee.index);


app.listen(3000);
console.log('Access through http://localhost:3000/');

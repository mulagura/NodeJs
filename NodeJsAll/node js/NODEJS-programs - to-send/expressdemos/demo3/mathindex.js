var express = require('express');
var mathmodule=require('./mathmodule');

var app = express();
app.get('/math/add/:n1/:n2',mathmodule.add);
app.get('/math/product/:n1/:n2',mathmodule.product);


app.listen(3000);
console.log('Access through http://localhost:3000/');

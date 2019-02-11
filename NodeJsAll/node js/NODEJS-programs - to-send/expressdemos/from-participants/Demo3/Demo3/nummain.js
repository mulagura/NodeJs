var expressVar = require("express");
var numberVar = require("./numbers");

var app = expressVar();

app.get("/numbers/contact",numberVar.contact);
app.get("/numbers/:num1/:num2",numberVar.index);

app.listen(3000);
console.log("Access through http://localhost:3000/");
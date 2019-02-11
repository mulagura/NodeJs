/**
 * Demonstration of Express app.locals
 */
var express = require('express'),
    path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/demolocals', function (req, res) {
    res.render('demolocals');
});

app.locals.timeData = {datetime: new Date().toUTCString()};
app.locals.companyName = "Wipro Technologies";

app.listen(3000);
console.log('Access through http://localhost:3000/');

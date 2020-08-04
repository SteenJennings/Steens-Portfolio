var path = require('path');
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.type('text/html');
    res.sendFile("./HomePage.html",{root: path.join(__dirname, '.')})
});

app.get('/*', function (req, res) {
    // res.type('text/html');
    res.sendFile('.'+req.url,{root: path.join(__dirname, '.')})
});

app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(process.env.PORT || 5000)
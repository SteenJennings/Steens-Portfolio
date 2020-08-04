var path = require('path');
var express = require('express');

var app = express();

app.set('port', 2000);

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

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
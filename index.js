var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname)))

app.use("/Images", express.static(__dirname + '/Images'))

app.get('/', function (req, res) {
    res.type('text/html');
    res.sendFile(path.join(__dirname, 'HomePage.html'))
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, req.url))
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
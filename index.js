var fs = require('fs');
var http = require('http');
var path = require('path');
var https = require('https');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.set('view engine', 'pug')

// First looks for a static file: index.html, css, images, etc.
app.use('/static', function(req,res,next) {
    res.setHeader("Cache-Control", "public, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
    next()
})

app.use('/static', express.static(path.resolve(__dirname, './node_modules')));
app.use('/favicon.ico', express.static(path.resolve(__dirname, './assets/favicon.ico')));
app.use('/static', express.static(path.resolve(__dirname, './public')));
app.use('/static', express.static(path.resolve(__dirname, './dist')));
app.use('/static', function (req, res, next) {
    res.send(404); 
});

app.all('*', function (req, res, next) {

    res.sendFile('./dist/templates/index.html', {root: __dirname})

});

// Start up the server on the port specified in the config
server.listen(9999, '0.0.0.0', 511, function () {
    // // Once the server is listening we automatically open up a browser
    var open = require('open');
});

process.on('uncaughtException', function (err) {
    console.log(err);
});     
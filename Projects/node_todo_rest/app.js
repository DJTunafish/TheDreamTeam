/*

	Application entry (= main)
*/
var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
var index = require('./routes/index');
var todo = require('./routes/todo');

var app = express();

// CORS enable (if request from other domains)
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// The routes and routers
app.use('/', index);
app.use('/todo', todo);

app.use(function(err, req, res, next) {

    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});
app.listen(3000);

module.exports = app;

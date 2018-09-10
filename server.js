const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser')
require('./routes/index')(app);


//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);
app.use(express.static(__dirname));
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile('/public/views/index.html', {
        root: __dirname,
    });
});

app.get('/profile', function (req, res) {
    res.sendFile('/public/views/profile.html', {
        root: __dirname,
    });
});


let port = process.env.PORT || 8080;
let server = app.listen(port, function (req, res) {
    console.log('Url >>  http://localhost:' + port);
});
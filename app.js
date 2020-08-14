var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    res.send('hello World');
})

app.listen(3000);
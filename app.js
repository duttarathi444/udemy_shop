var express = require('express');
var body_parser = require('body-parser');

var app = express();

app.use('/',(req,res,next)=>{
    res.send('hello');
})

app.listen(3000);
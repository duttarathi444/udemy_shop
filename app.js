var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var adminRouter = require('./routers/admin');
var shopRouter = require('./routers/shop');
var errorcontrol = require('./controllers/error');

var app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use(errorcontrol.error);

app.listen(3000);
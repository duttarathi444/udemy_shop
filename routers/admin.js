var express = require('express');

var adminControl = require('../controllers/admin');
var router = express.Router();

router.get('/', adminControl.getAddProduct);

module.exports = router;
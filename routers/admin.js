var express = require('express');

var adminControl = require('../controllers/admin');
var router = express.Router();

router.get('/add-product', adminControl.getAddProduct);

router.get('/products', adminControl.getProducts);

router.post('/add-product', adminControl.postAddProduct);

module.exports = router;
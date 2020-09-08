var express = require('express');

var shopController = require('../controllers/shop');
var router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

module.exports = router;
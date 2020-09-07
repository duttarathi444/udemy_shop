var Product = require('../models/product');
exports.getIndex = (req, res, next) => {
    var product = new Product();
    product.fetchAll(product => {
        res.render('shop/index', {
            pageTitle: 'Shop',
            path: '/products',
            prods: product
        })
    })
}
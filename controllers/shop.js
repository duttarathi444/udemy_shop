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

exports.getProducts = (req, res, next) => {
    var product = new Product();
    product.fetchAll(product => {
        res.render('shop/product-list', {
            prods: product,
            pageTitle: 'All Product',
            path: '/products'
        })
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    })
}
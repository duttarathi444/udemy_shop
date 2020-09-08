var Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageurl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageurl, price, description);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const product = new Product();
    product.fetchAll(product => {
        res.render('admin/products', {
            pageTitle: 'Admin Products',
            path: '/products',
            prods: product
        })
    })
}
const fs = require('fs');
const path = require('path');
const process = require('process');

var p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = cb => {
    fs.readFile(p, (err, filecontent) => {
        if (err) {
            console.log('err');
        } else {
            if (!(filecontent.length == 0)) {
                cb(JSON.parse(filecontent));
            } else {
                cb([]);
            }
        }
    })
}

module.exports = class Product {
    constructor(title, imageurl, price, description) {
        this.title = title;
        this.imageurl = imageurl;
        this.price = price;
        this.description = description;
    }
    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        })
    }
}
const mongoose = require("mongoose");

const Product = mongoose.model('product', {
    productName: {
        type: String,
        require: true
    },
    productEnglishName: {
        type: String,
        require: true
    },
    productFamily: {
        type: String,
        require: true
    },
    productBrand: {
        type: String,
        require: true
    },
    productDesc: {
        type: String,
        require: true
    },
    productPrice: {
        type: String,
        require: true
    },
    productTag: {
        type: String,
        require: true
    },
     productPicture: {
        type: String,
        require: true
    },
    createdAt: {
        type: String,
        default: new Date()
    },
    jalaliDate: {
        type: String,
    },
});
module.exports = {
    Product
}
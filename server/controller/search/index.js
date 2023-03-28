const {
    Product
} = require("../../model/product");

const handleSearchProducts = async (req, res) => {
    const searchName = req.query.searchName;
    const filter = req.query.filter;
    const sort = req.query.sort;
    const price = req.query.price;


    let isProduct = null
    if (searchName === 'product-list') {

        isProduct = await Product.find({})
    } else if (searchName === 'most-populer') {
        isProduct = await Product.find({
            productTag: 'پرفروشترین'
        })
    } else if (searchName === 'offer') {
        isProduct = await Product.find({
            productTag: searchName
        })
    } else if (filter && searchName) {
        isProduct = await Product.find({
            productFamily: searchName,
            productBrand: filter
        })
    } else if (searchName) {
        isProduct = await Product.find({
            productFamily: searchName
        })
    }

    if (isProduct) {


        switch (sort) {
            case 'sortByMin':
                const sortProductsByMin = isProduct?.sort((a, b) => a.productPrice - b.productPrice)
                isProduct = sortProductsByMin
                break;
            case 'sortByMax':
                const sortProductsByMax = isProduct?.sort((a, b) => b.productPrice - a.productPrice)
                isProduct = sortProductsByMax
                break;
        }
        if(price){
            const filterdByPrice = isProduct.filter(item=>Number(item.productPrice)<=price)
            isProduct=filterdByPrice
        }
        return res.status(200).json({
            data: [isProduct]
        })
    }
    return res.status(404).json({
        message: 'محصولی یافت نشد!'
    })
}
module.exports = {
    handleSearchProducts,

}
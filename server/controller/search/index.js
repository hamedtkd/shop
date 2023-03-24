const {
    Product
} = require("../../model/product");

const handleSearchProducts = async (req, res) => {
    const searchName = req.query.searchName;
    let isProduct = null
    if (searchName === 'product-list') {
        isProduct = await Product.find({})
    }
    else if(searchName=== 'most-populer'){
        isProduct = await Product.find({
            productTag: 'پرفروشترین'
        })
    }   
    else if(searchName=== 'offer'){
        isProduct = await Product.find({
            productTag: searchName
        })
    }
    else {
        isProduct = await Product.find({
            productFamily: searchName
        })
    }
    if (isProduct)
        return res.status(200).json({
            data: [isProduct]
        })
    return res.status(404).json({
        message: 'محصولی یافت نشد!'
    })
}
module.exports = {
    handleSearchProducts,

}
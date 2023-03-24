const {
    Product
} = require("../../model/product");

const handleSearchProducts = async (req, res) => {
    const searchName = req.query.searchName;
    let isProduct = null
    if (searchName === 'product-list') {
        isProduct = await Product.find({})
    } else {
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
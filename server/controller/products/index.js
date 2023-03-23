const {
    Product
} = require("../../model/product")

const handleGetProductByTag = async (req, res) => {
    const {
        tag,
    } = req.body
    const isProduct = await Product.find({
        productTag: tag
    })
    if (!tag)
        return res.status(400).json({
            message: 'محصولی موجود نیست'
        })
    return res.status(200).json({
        // message: 'Users you craeted',
        isProduct
    })
}
const handleGetSingleProduct = async (req, res) => {
    const productId = req.query.productId;
    const isProduct = await Product.findById(
        productId
    )
    if (isProduct)
        return res.status(200).json({
            data: [isProduct]
        })
    return res.status(404).json({
        message:'محصولی یافت نشد!'
    })
}
module.exports = {
    handleGetProductByTag,
    handleGetSingleProduct
}
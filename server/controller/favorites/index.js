const moment = require("jalali-moment");

const {
    FavoriteProducts
} = require("../../model/Favorites");
const {
    Product
} = require("../../model/product");
const jwt = require('jsonwebtoken');

const handleAddToFavorit = async (req, res) => {
    const {
        data
    } = req.body

    const {
        authorization
    } = req.headers;

    if (!authorization) {
        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    };

    const token = authorization;

    try {
        const dataOfUser = jwt.verify(token, process.env.JWT_SECRET || 'secertCode-1241231252334');

        const isProduct = await FavoriteProducts ?.findOne({
            productId: data
        })
        if (isProduct) {
            const updateProduct = await FavoriteProducts ?.findOneAndRemove({
                productId: data
            })
            return (
                res.status(200).json({
                    message: 'این محصول از لیست مورد علاقه شما حذف شد!'
                }))
        } else {
            const foundProduct = await Product.findById(
                data
            )
            const date = new Date()
            const jalaliDate = moment(date.toLocaleDateString(), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD');

            const addToFavorite = new FavoriteProducts({
                productName: foundProduct ?.productName,
                productId: foundProduct ?._id,
                productDesc: foundProduct ?.productDesc,
                productPrice: foundProduct ?.productPrice,
                productTag: foundProduct ?.productTag,
                productEnglishName: foundProduct ?.productEnglishName,
                productFamily: foundProduct ?.productFamily,
                productBrand: foundProduct ?.productBrand,
                productPicture: foundProduct ?.productPicture,
                userId: dataOfUser.id,
                number: 1,
                jalaliDate

            })
            await addToFavorite.save()
            res.status(201).json({
                message: 'محصول شما با موفقیت به لیست مورد علاقه های شما اضافه شد!',
            })
        }
    } catch {

        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    }
}

const handleGetFromFavorite = async (req, res) => {
    const {
        authorization
    } = req.headers;


    if (!authorization) {
        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    };
    const token = authorization;
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET || 'secertCode-1241231252334');
        const foundProduct = await FavoriteProducts ?.find({})

        const filtredProduct = foundProduct ?.filter(item => item.userId === data.id)
        if (!filtredProduct) return res.status(404).json({
            message: "لیست غلاثه مندی های شما خالی است"
        })
        res.status(200).json({
            message: `شما ${filtredProduct.length} محصول در لیست  علاقه مندی ها دارین`,
            data: [filtredProduct],
        })
    } catch {
        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    }
}

const handleIsProduct = async (req, res) => {

    const {
        authorization
    } = req.headers;

    const {
        data
    } = req.body
    let isProduct = null

    if (!authorization) {
        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    };
    const token = authorization;
    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET || 'secertCode-1241231252334');
        const foundProduct = await FavoriteProducts ?.find({})
        const filtredProduct = foundProduct ?.filter(item => item.userId === userData.id)
        const filterById = filtredProduct.filter(item => item.productId === data)
        if (filterById==false ) {
            isProduct = false
            return res.status(404).json({
                message: "سبد محصول شما خالی است",
                data: isProduct,
            })
        } else {

            isProduct = true

        }

        res.status(200).json({
            message: 'این محصول در لیست علاقه مندی های شما هست!',
            data: isProduct,
        })
    } catch {
        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    }
}


module.exports = {
    handleIsProduct,
    handleGetFromFavorite,
    handleAddToFavorit
}
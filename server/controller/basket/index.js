const moment = require("jalali-moment");
const {
    Basket
} = require("../../model/Basket");
const {
    Product
} = require("../../model/product");
const jwt = require('jsonwebtoken');


const handleAddToBasket = async (req, res) => {
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
        const userData = jwt.verify(token, process.env.JWT_SECRET || 'secertCode-1241231252334');
        
        const isProduct = await Basket ?.findOne({
            productId: data
        })
        if (isProduct) {
            const updateProduct = await Basket ?.findOneAndUpdate({
                productId: data
            }, {
                number: (isProduct.number) + 1
            })
            res.status(200).json({
                data: (updateProduct.number) + 1
            })
        } else {
            const foundProduct = await Product.findById(
                data
            )

            const date = new Date()
            const jalaliDate = moment(date.toLocaleDateString(), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD');

            const addToBasket = new Basket({
                productName: foundProduct ?.productName,
                productId: foundProduct ?._id,
                productDesc: foundProduct ?.productDesc,
                productPrice: foundProduct ?.productPrice,
                productTag: foundProduct ?.productTag,
                productEnglishName: foundProduct ?.productEnglishName,
                productFamily: foundProduct ?.productFamily,
                productBrand: foundProduct ?.productBrand,
                productPicture:foundProduct ?.productPicture,
                userId:userData.id,
                number: 1,
                jalaliDate
    
            })

            await addToBasket.save()
            res.status(201).json({
                message: 'محصول شما با موفقیت به سبد خرید اضافه شد!',
                data: addToBasket.number
            })
    
        }

    } catch {
        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    }

}
const handleMinusToBasket = async (req, res) => {
    const {
        data
    } = req.body

    const isProduct = await Basket ?.findOne({
        productId: data
    })
    if (isProduct ?.number > 1) {
        const updateProduct = await Basket ?.findOneAndUpdate({
            productId: data
        }, {
            number: (isProduct.number) - 1
        })
        res.status(200).json({
            data: (updateProduct.number) - 1
        })
    } else {
        const removeProdut = await Basket.findOneAndDelete({
            productId: data
        }).then(
            res.status(200).json({
                data: 0
            })
        )
    }

}

const handleGetFromBasket = async (req, res) => {
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
        const userData = jwt.verify(token, process.env.JWT_SECRET || 'secertCode-1241231252334');
        const arr = []
        let finallyNum = 0
        const foundProduct = await Basket.find({})
        const filtredProduct= foundProduct.filter(item=>item.userId===userData.id)

        filtredProduct.map((p) => {
            arr.push(Number(p.productPrice) * p.number)
        })
        arr.map(i => {
            return finallyNum = finallyNum + i
        })
    
        if (!filtredProduct) return res.status(404).json({
            message: "سبد محصول شما خالی است"
        })
    
        res.status(200).json({
            message: 'محصول شما با موفقیت به سبد خرید اضافه شد!',
            data: [filtredProduct],
            finallyNum
        })

    } catch {

        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    }

}


module.exports = {
    handleAddToBasket,
    handleGetFromBasket,
    handleMinusToBasket
}
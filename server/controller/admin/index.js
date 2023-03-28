const {
    Product
} = require("../../model/product")

const sharp = require("sharp");

const moment = require('jalali-moment');
const { getPath } = require("../../utils/getPath");

const handleCreatProduct = async (req, res) => {
    const checkImage = (data) =>
        data ?.mimetype === "image/jpeg" ||
        data ?.mimetype === "image/png" ||
        data ?.mimetype === "image/jpg";

    const productPicture = req.files.productPicture
    if (checkImage(productPicture)) {
        await sharp(productPicture.data)
          .jpeg({ quality: 60 })
          .toFile(getPath(`public/uploads/${productPicture.md5 + productPicture.name}.jpg`))
          .catch((err) => console.log(err));
      } else {
        return res.status(400).json({
          errors: ["عکس با فرمت png یا jpg  آپلود شود !"],
        });
      }

    const {
        productName,
        productEnglishName,
        productDesc,
        productPrice,
        productTag,
        productFamily,
        productBrand,
    } = req.body
    if (!productName)
        return res.status(400).json({
            message: 'نام محصول خود را وارد کنید'
        })
    if (!productDesc)
        return res.status(400).json({
            message: 'توضیحات محص.ل خود را وارد کنید'
        })
    if (!productPrice)
        return res.status(400).json({
            message: 'قیمت محصول خود را وارد کنید'
        })
    if (!productTag)
        return res.status(400).json({
            message: 'تگ محصول خود را وارد کنید'
        })
    if (!productFamily)
        return res.status(400).json({
            message: 'دسته محصول خود را وارد کنید'
        })
    if (!productEnglishName)
        return res.status(400).json({
            message: 'نام انگلیسی محصول خود را وارد کنید'
        })
    if (!productBrand)
        return res.status(400).json({
            message: 'ّبرند محصول خود را وارد کنید'
        })
    const date = new Date()
    const jalaliDate = moment(date.toLocaleDateString(), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD');

    const newProduct = new Product({
        productPicture:productPicture?productPicture.md5 + productPicture.name + '.jpg':'',
        productName,
        productDesc,
        productPrice,
        productTag,
        productFamily,
        productBrand,
        productEnglishName,
        jalaliDate

    })
    await newProduct.save().then(res.status(201).json({
        message: 'محصول شما با موفقیت ثبت شد!',
    }))
}


// const handleGetProduct = async (req, res) => {
//     const {
//         productTag,

//     } = req.body
//     // if (!productTag)
//     //     return res.status(400).json({
//     //         message: 'نام محصول خود را وارد کنید'
//     //     })
//     const isProduct = await Product.find({
//         Product
//     })
//     if (!productTag)
//         return res.status(400).json({
//             message: 'محصولی موجود نیست'
//         })
//     return res.status(200).json({
//         // message: 'Users you craeted',
//         isProduct
//     })
// }

module.exports = {
    handleCreatProduct,
    // handleGetProduct,
}
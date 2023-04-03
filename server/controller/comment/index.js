const moment = require("jalali-moment")
const {
    Comments
} = require("../../model/Comments")
const {
    Product
} = require("../../model/product")

const jwt = require('jsonwebtoken');
const {
    Users
} = require("../../model/User");

const handleEnterComment = async (req, res) => {
    const {
        comment,
        productId,
        star
    } = req.body
    if (!comment) return res.status(400).json({
        message: 'نظر خود را در قسمت مربوط را وارد کنید',
    })
    if (!star) return res.status(400).json({
        message: 'امتیاز خود را در قسمت مربوط را وارد کنید',
    })

    const {
        authorization
    } = req.headers;

    const date = new Date()
    const jalaliDate = moment(date.toLocaleDateString(), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD');

    if (!authorization) {
        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    };
    const token = authorization;
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET || 'secertCode-1241231252334');
        const user = await Users.findOne({
            email: data.email
        })
        const newComment = new Comments({
            userName: user ? user.userName : data.email,
            comment: comment,
            star:star,
            productID: productId,
            jalaliDate
        })
        await newComment.save().then(
            res.status(200).json({
                message: 'نظر شما با موفقیت ثبت شد!',
            }))
    } catch {
        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    }
}


const handleFetchComments = async (req, res) => {
    const {
        data
    } = req.body
    const whichProduct = await Comments.find({
        productID: data
    })
    res.status(200).json({
        message: 'کامنت های دیگران پیدا شد',
        data: [whichProduct]
    })

}
module.exports = {
    handleEnterComment,
    handleFetchComments,
}
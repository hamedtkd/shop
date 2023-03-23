const bcrypt = require('bcrypt');
const moment = require('jalali-moment');
const {
    Users
} = require('../../model/User');

const jwt = require('jsonwebtoken');

const handleSignup = async (req, res) => {
    const {
        userName,
        password,
        email,
        confirmPassword
    } = req.body
    if (!password)
        return res.status(400).json({
            message: 'گذرواژه خود را وارد کنید'
        })
    if (!email)
        return res.status(400).json({
            message: 'ایمیل خود را وارد کنید'
        })
    if (!userName)
        return res.status(400).json({
            message: 'نام کاربری خود را وارد کنید'
        })
    if (!confirmPassword)
        return res.status(400).json({
            message: 'گذرواژه خود را دوباره وارد کنید'
        })
    if (password !== confirmPassword)
        return res.status(400).json({
            message: 'گذواژه های شما متفاوت هستند'
        })
    const isUser = await Users.findOne({
        email
    })
    if (isUser)
        return res.status(400).json({
            message: 'این ایمیل قبلا ثبت شده است'
        })
    const isUserName = await Users.findOne({
        userName
    })
    if (isUserName)
        return res.status(400).json({
            message: 'این نام کاربری قبلا ثبت شده است'
        })
    const date = new Date()
    const jalaliDate = moment(date.toLocaleDateString(), 'MM/DD/YYYY').locale('fa').format('YYYY/MM/DD');

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    const newUser = new Users({
        userName,
        email,
        password: hashedPass,
        jalaliDate
    })
    await newUser.save().then(res.status(201).json({
        message: 'شما با موفقیت ثبت نام شدین!',
    }))
}
const handleLogin = async (req, res) => {
    const {
        password,
        email,
    } = req.body
    if (!password)
        return res.status(400).json({
            message: 'گذرواژه خود را وارد کنید'
        })
    if (!email)
        return res.status(400).json({
            message: 'ایمیل خود را وارد کنید'
        })
    const isUserEmail = await Users.findOne({
        email
    })
    const isUserName = await Users.findOne({
        userName: email
    })
    let isUser =isUserEmail
    if (!isUserEmail) {
        if (isUserName) {
            isUser = isUserName
        } else {
            return res.status(404).json({
                message: 'این نام کاربری ثبت نشده است!'
            })
        }
    }
    bcrypt.compare(password, isUser.password, (error, result) => {
        if (result) {
            const tokenDetail = {
                id: isUser._id,
                email,
            }
            const token = jwt.sign(tokenDetail, process.env.JWT_SECRET||'secertCode-1241231252334')
            return res.status(200).json({
                message: 'شما با موفقیت وارد حساب خود شده اید!',
                token,
                userName:isUser?.userName,
                city:isUser?isUser?.city:""
            })
        }
        res.status(404).json({
            message: 'نام کاریری،ایمیل یا گذرواژه شما درست نیست!',

        })

    })
}

module.exports = {
    handleSignup,
    handleLogin
}
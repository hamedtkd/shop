const {
    Users
} = require("../../model/User");
const jwt = require('jsonwebtoken');

const handleAddProfile = async (req, res) => {
    const {
        name,
        familyName,
        email,
        post,
        adress,
        phoneNumber,
        userName,
        city,
    } = req.body

    const {
        authorization
    } = req.headers;

    let mail = null
    let newUserName=null

    if (!authorization) {
        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    };
    if (!phoneNumber)
        return res.status(400).json({
            message: 'شماره همراه خود را وارد کنید'
        })
    if (!name)
        return res.status(400).json({
            message: 'نام خود را وارد کنید'
        })
    if (!userName)
        return res.status(400).json({
            message: 'نام کاربری خود را وارد کنید'
        })
    if (!email)
        return res.status(400).json({
            message: 'ایمیل خود را وارد کنید'
        })
    if (!familyName)
        return res.status(400).json({
            message: 'نام خانوادگی خود را وارد کنید'
        })
    if (!adress)
        return res.status(400).json({
            message: 'آدرس محل زندگی خود را وارد کنید'
        })
    if (!post)
        return res.status(400).json({
            message: "کد پستی خود را وارد کنید"
        })
    const token = authorization;

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET || 'secertCode-1241231252334');
        const isUserEmail = await Users.findOne({
            email
        })
        const userWithLastEmail = await Users.findOne({
            email: data.email
        })
        const isUserName = await Users.findOne({
            userName: data.email
        })
        const id = userWithLastEmail ? userWithLastEmail._id : isUserName._id;
        if((userName===userWithLastEmail?.userName ) || (userName===isUserName?.userName)){

            newUserName = userWithLastEmail ? userWithLastEmail.userName : isUserName.userName;
        }else{

            newUserName=userName
        }

        if (data.email === email) {
            const user = await Users.findOneAndUpdate({
                email: data.email
            }, {
                name,
                familyName,
                email,
                post,
                adress,
                phoneNumber,
                userName,
                city,
            })
            const tokenDetail = {
                id: data.email,
                email,
            }
            const newToken = jwt.sign(tokenDetail, process.env.JWT_SECRET || 'secertCode-1241231252334')
            await user.save().then(
                res.status(200).json({
                    message: 'اطلاعات شما با موفقیت ثبت شد',
                    newToken,
                    newUserName,
                    city
                }))

        } else {


            if (userWithLastEmail) {
                return res.status(400).json({
                    message: 'این ایمیل قبلا ثبت شده است',
                })
            }
            isUserName ? mail = isUserName.email : mail = data.email

            const tokenDetail = {
                id,
                email,
            }
            const newToken = jwt.sign(tokenDetail, process.env.JWT_SECRET || 'secertCode-1241231252334')
            const user = await Users.findOneAndUpdate({
                email: mail
            }, {
                name,
                familyName,
                email,
                post,
                adress,
                phoneNumber,
                userName,
                city,
            })

            await user.save().then(
                res.status(200).json({
                    message: 'اطلاعات شما با موفقیت ثبت شد',
                    newToken,
                    newUserName,
                    city
                }))
        }

    } catch {
        return res.status(403).json({
            message: 'ابتدا باید وارد شوید'
        });
    }
    // if (isUser)
    //     return res.status(400).json({
    //         message: 'این ایمیل قبلا ثبت شده است'
    //     })

}
const handleAddFetchMyProfile = async (req, res) => {
    const {
        authorization
    } = req.headers;
    const token = authorization;
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET || 'secertCode-1241231252334');
        const isUserEmail = await Users.findOne({
            _id: data.id
        })
        delete isUserEmail.password;
        delete isUserEmail['password'];
        res.status(200).json({
            data: [isUserEmail]
        })
        // console.log(isUserEmail.remove('password'));

    } catch {
        res.status(404).json({
            message:'متاسفانه مشکلی پیش آمده و اطلاعات شما یافت نشد'
        })

    }

}
module.exports = {
    handleAddProfile,
    handleAddFetchMyProfile
}
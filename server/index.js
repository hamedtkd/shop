const appRootPath = require('app-root-path')

// const { User } = require('./model/User');

const express = require('express')

const cors = require('cors');

const mongoose = require('mongoose');
const { handleCreatUser, handleSendProduct } = require('./routes');
const fileUpload = require('express-fileupload');
const { urlencoded } = require('express');

const server = express()
// const { handleSaveUser } = require('./controller/Users');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/huifShop').then(res => {
    console.log('app conected')
});

server.use(cors())
server.use("/static", express.static(appRootPath + "/public"));

server.use(express.json({
    extended: false
}))
server.use(urlencoded({
    extended: true
}))
server.use(fileUpload({
    createParentPath:true,
    limits: { fileSize: 2 * 1024 * 1024 * 1024* 1024 * 1024},
}));

require('dotenv').config({
    path: appRootPath + 'src/config/env/.env'
})
// const userfinded=User.find()
// console.log(userfinded);
// server.use('/' ,handleSendDataFromDb );


server.use('/',handleCreatUser)
server.use('/',handleSendProduct)



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server runnig at:${PORT}`))
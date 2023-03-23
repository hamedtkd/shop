const mongoose = require("mongoose");

const Users = mongoose.model('users', {
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
      userName: {
        type: String,
        require: true
    },
    createdAt: {
        type: String,
        default: new Date()
    },
    jalaliDate: {
        type: String,
    },
    name:{
        type: String,
    },
    familyName:{
        type: String,
    },
    email:{
        type: String,
    },
    post:{
        type:String,
    },
    adress:{
        type:String,
    },
    phoneNumber:{
        type:Number,
    },
    city:{
        type:String,
    }
});
module.exports = {
    Users
}
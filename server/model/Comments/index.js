const mongoose = require("mongoose");

const Comments = mongoose.model('comments', {
      userName: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    productID: {
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
});
module.exports = {
    Comments
}
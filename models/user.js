const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    buildtype: {
        type: String,
        required: true,
        minlength: 3
    },
    sitelocation: {
        type: String,
        required: true,
        minlength: 3
    },
    sitearea: {
        type: String,
        required: true,
        minlength: 3
    },
    modelimg: {
        type: String,
        required: true
    },
    modelfile: {
        type: String,
        required: true
    },
    cloudinary_id1: {
        type: String
    },
    cloudinary_id2: {
        type: String
    },
    description: {
        type: String,
        required: true, 
        minlength: 3
    },
    timestamp:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("User", userSchema);
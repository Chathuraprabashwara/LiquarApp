const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:true

    },
    alcohol:{
        type:Number,
        required:true

    },
    imageLink:{
        type:String,
        required:true

    }
});

module.exports = mongoose.model('Posts',postSchema)
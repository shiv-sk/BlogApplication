const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog",
        required:true
    },
    comment:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
} , {timestamps:true});

const Comment = mongoose.model("Comment" , commentSchema);
module.exports = Comment;
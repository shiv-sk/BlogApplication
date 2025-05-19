const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        unique:true
    },
    content:{
        type:String,
        trim:true,
        required:true,
    },
    tag:{
        type:String,
        trim:true,
        enum:["Tech" , "Education" , "Entertainment" , "Music" , "Politics"],
        default:"Tech"
    },
    status:{
        type:String,
        trim:true,
        enum:["Published" , "Draft"],
        default:"Published"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
} , {timestamps:true});

const Blog = mongoose.model("Blog" , blogSchema);
module.exports = Blog;
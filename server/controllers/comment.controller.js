const asyncHandler = require("../utils/helpers/asyncHandler");
const ApiError = require("../utils/helpers/apiError");
const ApiResponse = require("../utils/helpers/apiResponse");
const Comment = require("../models/comment.model");

//new Blog Comment
exports.newComment = asyncHandler(async (req,res)=>{
    const {user , comment} = req.body;
    const {blogId} = req.params;
    if(!blogId){
        throw new ApiError(400 , "blogId is missing or not valid");
    }
    const existComment = await Comment.findOne({$and:[{user} , {blog:blogId}]});
    
    if(existComment){
        throw new ApiError(400 , "you have already Commented");
    }
    const newComment = await Comment.create({
        user,
        blog:blogId,
        comment
    })

    if(!newComment){
        throw new ApiError(500 , "comment is not created");
    }
    return res.status(201).json(
        new ApiResponse("new comment is" , newComment , 201)
    )
})

//get All Comments of a Specific Blog
exports.allCommentsofBlog = asyncHandler(async (req,res)=>{
    const {blogId} = req.params;
    if(!blogId){
        throw new ApiError(400 , "blogId is missing or not valid");
    }
    const allComments = await Comment.find({blog:blogId}).populate("user" , "name");
    
    if(allComments.length === 0){
        throw new ApiError(400 , "comments not found!");
    }
    return res.status(200).json(
        new ApiResponse("allComments are" , allComments , 200)
    )
})
const asyncHandler = require("../utils/helpers/asyncHandler");
const ApiError = require("../utils/helpers/apiError");
const ApiResponse = require("../utils/helpers/apiResponse");
const Like = require("../models/like.model");

exports.newLike = asyncHandler(async (req,res)=>{
    const {user} = req.body;
    const {blogId} = req.params;
    if(!blogId){
        throw new ApiError(400 , "blogId is missing or not valid");
    }
    const existLike = await Like.findOne({$and:[{user} , {blog:blogId}]});
    
    if(existLike){
        throw new ApiError(400 , "already liked a Blog");
    }
    const like = await Like.create({
        user,
        blog:blogId
    })
    if(!like){
        throw new ApiError(500 , "like is not created");
    }
    return res.status(201).json(
        new ApiResponse("new like is" , like , 201)
    )
})

//get All Likes of a Specific Blog
exports.allLikesofSpecificBlog = asyncHandler(async (req,res)=>{
    const {blogId} = req.params;
    if(!blogId){
        throw new ApiError(400 , "blogId is missing or not valid");
    }
    const allLikes = await Like.find({blog:blogId});
    
    if(allLikes.length === 0){
        throw new ApiError(400 , "likes not found!");
    }
    return res.status(200).json(
        new ApiResponse("allLikes are" , allLikes , 201)
    )
})
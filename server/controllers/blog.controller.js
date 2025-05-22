const asyncHandler = require("../utils/helpers/asyncHandler");
const ApiError = require("../utils/helpers/apiError");
const ApiResponse = require("../utils/helpers/apiResponse");
const Blog = require("../models/blog.model");

//create newBlog
exports.newBlog = asyncHandler(async (req,res)=>{
    const {title , content , tag , user} = req.body;
    const blog = await Blog.create({
        title,
        content,
        tag,
        user
    })
    if(!blog){
        throw new ApiError(500 , "blog is not created");
    }
    return res.status(201).json(
        new ApiResponse("new Blog is" , blog , 201)
    )
})

//check exist BlogTitle
exports.existBlogTitle = asyncHandler(async (req,res)=>{
    const { title } = req.query;
    if(!title){
        throw new ApiError(400 , "title is required");
    }
    const existBlogTitle = await Blog.findOne({title});
    if(existBlogTitle){
        throw new ApiError(400 , "title is alreadyExist");
    }
    return res.status(200).json(
        new ApiResponse("blogTitle is available" , {} , 200)
    )
})

//get All Blogs
exports.allBlogs = asyncHandler(async (req,res)=>{
    const blogs = await Blog.find();
    if(blogs.length === 0){
        throw new ApiError(500 , "blogs not found!");
    }
    return res.status(200).json(
        new ApiResponse("blogs are" , blogs , 200)
    )
})

//get a Single Blog
exports.getABlog = asyncHandler(async (req,res)=>{
    const {blogId} = req.params;
    if(!blogId){
        throw new ApiError(400 , "blogId is missing or not valid");
    }
    const blog = await Blog.findById(blogId);
    if(!blog){
        throw new ApiError(404 , "blog not found!");
    }
    return res.status(200).json(
        new ApiResponse("blogs is" , blog , 200)
    )
})

//get a user Blogs
exports.allUserBlogs = asyncHandler(async (req,res)=>{
    const {userId} = req.params;
    if(!userId){
        throw new ApiError(400 , "userId is missing or not valid");
    }
    //finding a specific user Blogs
    const blogs = await Blog.find({user:userId});
    if(blogs.length === 0){
        throw new ApiError(404 , "blogs not found!");
    }
    return res.status(200).json(
        new ApiResponse("user blogs are" , blogs , 200)
    )
})

//Edit a Blog
exports.editBlog = asyncHandler(async (req,res)=>{
    const {blogId} = req.params;
    if(!blogId){
        throw new ApiError(400 , "blogId is missing or not valid");
    }
    //Editing a Blog using Id
    const Editedblog = await Blog.findByIdAndUpdate(blogId , req.body , {new:true , runValidators:true});
    if(!Editedblog){
        throw new ApiError(400 , "blogs not found!");
    }
    return res.status(200).json(
        new ApiResponse("blog is edited!" , Editedblog , 200)
    )
})

//Delete a Blog
exports.deleteBlog = asyncHandler(async (req,res)=>{
    const {blogId} = req.params;
    if(!blogId){
        throw new ApiError(400 , "blogId is missing or not valid");
    }
    //Editing a Blog using Id
    const deletedblog = await Blog.findByIdAndDelete(blogId);
    if(!deletedblog){
        throw new ApiError(400 , "blogs not found!");
    }
    return res.status(200).json(
        new ApiResponse("blog is deleted!" , {} , 200)
    )
})
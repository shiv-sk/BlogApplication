const express = require("express");
const Router = express.Router();
const blogController = require("../controllers/blog.controller");
const validateInput = require("../middleware/validation.middleware");
const {newBlogSchema , editBlogSchema} = require("../utils/validation/blog.validation");
Router.route("/").get(blogController.allBlogs);
Router.route("/").post(validateInput(newBlogSchema) , blogController.newBlog);
Router.route("/unique/title").get(blogController.existBlogTitle);
Router.route("/:blogId").get(blogController.getABlog)
.patch(validateInput(editBlogSchema), blogController.editBlog)
.delete(blogController.deleteBlog);
Router.route("/user/blogs/:userId").get(blogController.allUserBlogs);
module.exports = Router
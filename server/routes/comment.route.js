const express = require("express");
const Router = express.Router();
const commentController = require("../controllers/comment.controller");
const validateInput = require("../middleware/validation.middleware");
const {newCommentSchema} = require("../utils/validation/comment.validation");
Router.route("/:blogId")
.get(commentController.allCommentsofBlog)
.post(validateInput(newCommentSchema) , commentController.newComment);
module.exports = Router
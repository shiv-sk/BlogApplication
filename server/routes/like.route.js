const express = require("express");
const Router = express.Router();
const likeController = require("../controllers/like.controller");
const validateInput = require("../middleware/validation.middleware");
const {newLikeSchema} = require("../utils/validation/like.validation");
Router.route("/:blogId")
.get(likeController.allLikesofSpecificBlog)
.post(validateInput(newLikeSchema) , likeController.newLike);
module.exports = Router
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const allowedOrigins = ["http://localhost:5173"];
const corsOption = {
    origin:function(origin , callback){
        if(!origin || allowedOrigins.includes(origin)){
            callback(null , true);
        }
        else{
            console.log("blocked by origin: " , origin)
        }
    },
    credentials:true,
    optionsSuccessStatus: 200
};
const cookieParser = require("cookie-parser");

//configuration
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static("static"));
app.use(cors(corsOption));
app.use(cookieParser());
app.use(helmet());


//user routes
const userRoutes = require("./routes/user.routes");
app.use("/api/v1/user" , userRoutes);

//blog routes
const blogRoutes = require("./routes/blog.routes");
app.use("/api/v1/blog" , blogRoutes);

//like routes
const likeRoutes = require("./routes/like.route");
app.use("/api/v1/like" , likeRoutes);

//comment routes
const commentRoutes = require("./routes/comment.route");
app.use("/api/v1/comment" , commentRoutes);

module.exports = app;
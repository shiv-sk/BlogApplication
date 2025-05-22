import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { baseUrl, getAndDeleteReq } from "../apiCalls/apiCalls";
import GenerateAvatar from "../component/Avatar";

export default function BlogDetail(){
    const [blog , setblog] = useState(null);
    const [isLoading , setIsLoading] = useState(false);

    const [blogLike , setBlogLike] = useState([]);
    const [isLikeLoading , setIsLikeLoading] = useState(false);

    const [blogComment , setBlogComment] = useState([]);
    const [isCommentLoading , setIsCommentLoading] = useState(false);

    const {blogId} = useParams();

    useEffect(()=>{
        const getBlog = async()=>{
            if(!blogId){
                return;
            }
            setIsLoading(true);
            try {
                const response = await getAndDeleteReq(`${baseUrl}/blog/${blogId}` , "get");
                if(response.status === "success"){
                    setblog(response?.data)
                }
            } catch (error) {
                console.error("get Blog error! " , error);
            }finally{
                setIsLoading(false);
            }
        }
        getBlog();
    } , [blogId]);

    useEffect(()=>{
        const getBlogLikes = async()=>{
            if(!blogId){
                return;
            }
            setIsLikeLoading(true);
            try {
                const response = await getAndDeleteReq(`${baseUrl}/like/${blogId}` , "get");
                if(response.status === "success"){
                    setBlogLike(response?.data || []);
                }
            } catch (error) {
                console.error("get BlogLike error! " , error);
            }finally{
                setIsLikeLoading(false);
            }
        }
        getBlogLikes();
    } , [blogId]);

    useEffect(()=>{
        const getBlogComment = async()=>{
            if(!blogId){
                return;
            }
            setIsCommentLoading(true);
            try {
                const response = await getAndDeleteReq(`${baseUrl}/comment/${blogId}` , "get");
                if(response.status === "success"){
                    setBlogComment(response?.data || []);
                }
            } catch (error) {
                console.error("get Blog error! " , error);
            }finally{
                setIsCommentLoading(false);
            }
        }
        getBlogComment();
    } , [blogId]);

    const handlePostComment = (e)=>{
        e.preventDefault();
        alert("comment Posted!");
    }

    const handleLikeClick = (e)=>{
        e.preventDefault();
        alert("Like button clicked! ");
    }
    return(
        <div className="flex flex-col items-center min-h-screen gap-4 py-5 px-4 bg-gray-50">
            <div className="max-w-2xl w-full bg-white p-6 rounded-xl shadow-md space-y-4">
                {
                    isLoading ? "Loading..." :
                    blog ? (
                        <>
                            <h2 className="text-2xl font-semibold">{blog.title || "BlogTitle"}</h2>
                            <p className="text-gray-700">{blog.content || "BlogContent"}</p>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                                <span className="bg-info text-white px-2 py-1 rounded-md">{blog.tag || "BlogTag"}</span>
                                <span className="bg-primary text-white px-2 py-1 rounded-md">{blog.status || "BlogStatus"}</span>
                                <span className="bg-neutral text-white px-2 py-1 rounded-md">
                                    {blog.createdAt ? new Date(blog?.createdAt).toDateString() : "BlogPublishedDate"}
                                </span>
                            </div>
                            {/* like */}
                            <div className="flex items-center gap-2 pt-2 border-t">
                                <button 
                                className="btn btn-neutral text-white shadow-lg border-b-2 border-b-neutral"
                                onClick={handleLikeClick}>Like</button>
                                <button className="btn btn-secondary text-white shadow-lg border-b-2 border-b-secondary">
                                    <span>
                                        {isLikeLoading ? "Loading..." : blogLike.length > 0 ? `${blogLike.length} Likes` : "0 Likes"}
                                    </span>
                                </button>
                            </div>
                        </>
                    ) : (<p>Blog not found!</p>)
                }
            </div>
            {/* comment Input */}
            <div className="max-w-2xl w-full bg-base-100 p-6 rounded-xl shadow-md space-y-4">
                <h3 className="text-lg font-medium">Comments</h3>
                <form className="flex justify-center items-center gap-2">
                    <textarea
                    className="textarea w-full"
                    placeholder="Write a comment..."
                    rows={3}/>
                    <button type="submit"
                    className="btn btn-warning text-white shadow-lg border-b-2 border-b-warning"
                    onClick={handlePostComment}>Post</button>
                </form>
                {/* showing comments */}
                <div className="border-t pt-4 space-y-4">
                    {
                        isCommentLoading ? "Loading..." :
                        blogComment && blogComment.length > 0 ? blogComment.map((comment)=>(
                            <div className="flex flex-wrap gap-1.5 bg-neutral p-3 rounded-lg shadow-md" key={comment._id}>
                                <div>
                                    <GenerateAvatar name={comment.user?.name || "Name"}/>
                                </div>
                                <div className="flex flex-col gap-2 text-sm text-gray-500">
                                    <p className="text-lg text-white">{comment.comment || "Comment"}</p>
                                    <span className="text-sm text-white">
                                        Posted: {comment.createdAt ? new Date(comment.createdAt).toDateString() : "Date"}
                                    </span>
                                </div>
                                
                            </div>
                        )) : (<p>no Comments!</p>)
                    }
                </div>
            </div>
        </div>
    )
}
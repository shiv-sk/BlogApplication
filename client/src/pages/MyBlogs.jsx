import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { baseUrl, getAndDeleteReq } from "../apiCalls/apiCalls";
import { toast } from "react-toastify";

export default function MyBlogs(){

    const {userId} = useParams();
    const [blogs , setBlogs] = useState([]);
    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        const getAllUserBlogs = async()=>{
            if(!userId){
                return;
            }
            try {
                const response = await getAndDeleteReq(`${baseUrl}/blog/user/blogs/${userId}`);
                if(response.status === "success"){
                    setBlogs(response?.data || []);
                }
            } catch (error) {
                console.error("error from getAllUsers Blogs!" , error);
                toast.error(error?.response?.data?.message || "server Error");
            }
        }
        getAllUserBlogs();
    } , [userId]);

    const handleOnClick = async(e , blogId)=>{
        e.preventDefault();
        if(!blogId){
            return;
        }
        try {
            const response = await getAndDeleteReq(`${baseUrl}/blog/${blogId}` , "delete");
            if(response.status === "success"){
                toast.success("blog is deleted refresh-page!");
            }
        } catch (error) {
            console.error("error from delete blog!" , error);
            toast.error(error?.response?.data?.message || "server Error! ");
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <div className="min-h-screen">
            <section className="md:h-screen flex flex-col justify-center items-center gap-4 py-5">
                <h1 className="text-lg font-semibold">MyBlogs</h1>
                <div className="flex justify-center items-center flex-wrap gap-1.5">
                    {
                        isLoading ? "Loading..." :
                        blogs && blogs.length > 0 ? blogs.map((blog)=>(
                            <div className="card bg-base-100 w-96 shadow-lg" key={blog._id}>
                                <div className="card-body">
                                    <h2 className="card-title">{blog.title}</h2>
                                    <p>{blog.content}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`/editblog/${blog._id}`}>
                                        <button className="btn btn-warning text-white text-lg shadow-lg border-b-2">Edit</button>
                                    </Link>
                                    <button
                                    type="button" 
                                    className="btn btn-warning text-white text-lg shadow-lg border-b-2" 
                                    onClick={(e)=>handleOnClick(e , blog._id)}>
                                        Delete
                                    </button>
                                    </div>
                                </div>
                            </div>
                        )) : (<p>Blogs not found!</p>)
                    }
                </div>
            </section>
        </div>
    )
}
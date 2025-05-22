import { useEffect, useState } from "react"
import { baseUrl, getAndDeleteReq } from "../apiCalls/apiCalls";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home(){
    const [allBlogs , setAllBlogs] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    useEffect(()=>{
        const getAllBlogs = async()=>{
            setIsLoading(true);
            try {
                const response = await getAndDeleteReq(`${baseUrl}/blog` , "get");
                if(response.status === "success"){
                    setAllBlogs(response?.data || []);
                }
            } catch (error) {
                console.error("error from AllBlogs! " , error);
                toast.error(error?.response?.data?.message || "server Error!");
            }finally{
                setIsLoading(false);
            }
        }
        getAllBlogs();
    } , [])
    return(
        <div className="min-h-screen">
            <section className="md:h-screen flex flex-col justify-center items-center gap-4 py-5">
                <h1 className="font-bold text-lg px-4 py-2">AllBlogs</h1>
                <div className="flex justify-center items-center flex-wrap gap-1.5">
                    {
                        isLoading ? "Loading..." :
                        allBlogs && allBlogs.length > 0 ? allBlogs.map((blog)=>(
                            <div className="card bg-base-100 w-96 shadow-lg" key={blog._id}>
                                <div className="card-body">
                                    <h2 className="card-title">{blog.title || "blogTitle"}</h2>
                                    <p>{blog.content || "blogContent"}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`/blog/detail/${blog._id}`}>
                                        <button className="btn btn-warning text-white shadow-lg border-b-2">More</button>
                                    </Link>
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
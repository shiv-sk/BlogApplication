import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { baseUrl, getAndDeleteReq, postAndPatchReq } from "../apiCalls/apiCalls";
import { toast } from "react-toastify";
export default function EditBlog(){
    const {blogId} = useParams();

    const [content, setContent] = useState('');
    const [isLoading , setIsLoading] = useState(false);
    const handleChange = (value)=>{
        setContent(value);
    }

    const [blogData , setBlogData] = useState({
        title:"",
        tag:"",
        user:""
    })

    const handleOnChnage = (e)=>{
        e.preventDefault();
        setBlogData({...blogData , [e.target.name]:e.target.value})
    }
    
    useEffect(()=>{
        if(!blogId){
            return;
        }
        const getBlog = async()=>{
            setIsLoading(true);
            try {
                const response = await getAndDeleteReq(`${baseUrl}/blog/${blogId}` , "get");
                if(response.status === "success"){
                    const data = response?.data;
                    setBlogData({
                        title:data.title,
                        user:data.user,
                        tag:data.tag
                    })
                    setContent(data.content);
                }
            } catch (error) {
                console.error("error from getBlog! " , error);
                toast.error(error?.response?.data?.message || "server Error");
            }finally{
                setIsLoading(false);
            }
        }
        getBlog();
    } , [blogId])

    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        if(!blogData || !content){
            return;
        }
        setIsLoading(true);
        try {
            const response = await postAndPatchReq(`${baseUrl}/blog/${blogId}` , "patch" , 
                {title:blogData.title , tag:blogData.tag , status:blogData.status, content}
            );
            if(response.status === "success"){
                toast.success(response.message || "blog is edited!");
            }
        } catch (error) {
            console.error("error from getBlog! " , error);
            toast.error(error?.response?.data?.message || "server Error");
        }finally{
            setIsLoading(false);
        }
    }
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4 py-5">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md shadow-base-300">
                <h1 className="text-center font-bold text-2xl mb-1.5 border-b-2 border-neutral shadow-lg rounded-lg py-1.5">Edit-Blog</h1>
                <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
                    <label htmlFor="title" className="text-sm font-medium mb-1">Title</label>    
                    <input
                    name="title"
                    id="title" 
                    type="text" 
                    placeholder="Blog1" 
                    className="input w-full"
                    value={blogData.title}
                    onChange={handleOnChnage}
                    required
                    />
                    <label htmlFor="content" className="text-sm font-medium mb-1">Content</label>
                    <ReactQuill value={content} onChange={handleChange} theme="snow" />
                    <label htmlFor="tag" className="text-sm font-medium mb-1">Tag</label>
                    <select value={blogData.tag} className="select" name="tag" onChange={handleOnChnage}>
                        <option disabled={true}>Pick a tag</option>
                        <option value={"Tech"}>Tech</option>
                        <option value={"Education"}>Education</option>
                        <option value={"Entertainment"}>Entertainment</option>
                        <option value={"Music"}>Music</option>
                        <option value={"Politics"}>Politics</option>
                    </select>
                    <button 
                    className="btn btn-warning w-full text-white text-lg shadow-lg border-b-2" 
                    type="submit" disabled={isLoading}>
                        {isLoading ? "Processing..." : "EditBlog"}
                    </button>
                </form>
            </div>
        </div>
    )
}
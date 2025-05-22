import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { baseUrl, getAndDeleteReq, postAndPatchReq } from '../apiCalls/apiCalls';
import { useDebounce } from 'use-debounce';

export default function NewBlog(){
    const [content, setContent] = useState('');
    const [isLoading , setIsLoading] = useState(false);
    const handleChange = (value)=>{
        setContent(value);
    }
    const handleOnChnage = (e)=>{
        e.preventDefault();
        setBlogData({...blogData , [e.target.name]:e.target.value})
    }
    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        if(!user || !user._id){
            toast.error("loging to add blog");
            return;
        }
        else if(titleCheckResults === "title is alreadyExist"){
            toast.error("title is already taken");
            return;
        }
        else if(content.trim() === ""){
            toast.error("blog content can not be empty!");
            return;
        }
        setIsLoading(true);
        try {
            const response = await postAndPatchReq(`${baseUrl}/blog` , "post" , {title:blogData?.title , user:user._id , content});
            if(response.status === "success"){
                toast.success("blog added!");
            }
        } catch (error) {
            console.error("error from new Blog! " , error);
            const errorMessage = error.response?.data?.message
            toast.error(errorMessage || "Server Error!");
        }finally{
            setIsLoading(false);
        }
    }
    const {user} = useAuth();
    const [blogData , setBlogData] = useState({
        title:"",
        tag:"",
    })
    const [debounceValue] = useDebounce(blogData.title, 3000);
    const [isTitleChecking , setIsTitleChecking] = useState(false);
    const [titleCheckResults , setTitleCheckResults] = useState(null);

    useEffect(()=>{
        const checkUniqueTitle = async()=>{
            if(!debounceValue){
                return;
            }
            setIsTitleChecking(true);
            setTitleCheckResults(null);
            try {
                const response = await getAndDeleteReq(`${baseUrl}/blog/unique/title/?title=${debounceValue}` , "get");
                // console.log(response);
                if(response.status === "success"){
                    setTitleCheckResults(response?.message)
                }
            } catch (error) {
                console.error("erro from checkUniqueTitle! " , error);
                setTitleCheckResults(error?.response?.data?.message || "server Error");
            }finally{
                setIsTitleChecking(false);
            }
        }
        checkUniqueTitle();
    } , [debounceValue])
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4 py-5">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md shadow-base-300">
                <h1 className="text-center font-bold text-2xl mb-1.5 border-b-2 border-neutral shadow-lg rounded-lg py-1.5">New-Blog</h1>
                <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
                    <label htmlFor="title" className="text-sm font-medium mb-1">Title</label>    
                    <input
                    name="title"
                    id="title" 
                    type="text" 
                    placeholder="Blog1" 
                    className="input w-full"
                    onChange={handleOnChnage}
                    required
                    />
                    <p>{isTitleChecking ? "TitleChecking..." : titleCheckResults ? titleCheckResults : ""}</p>
                    <label htmlFor="content" className="text-sm font-medium mb-1">Content</label>
                    <ReactQuill value={content} onChange={handleChange} theme="snow" />
                    <label htmlFor="tag" className="text-sm font-medium mb-1">Tag</label>
                    <select defaultValue="Pick a Tag" className="select" name="tag" onChange={handleOnChnage}>
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
                        {isLoading ? "Processing..." : "NewBlog"}
                    </button>
                </form>
            </div>
        </div>
    )
}
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function NewBlog(){
    const [content, setContent] = useState('');
    const [isLoading , setIsLoading] = useState(false);
    const handleChange = (value)=>{
        setContent(value);
    }
    const [blogData , setBlogData] = useState({
        title:"",
        content:"",
        tag:"",
        user:""
    })
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-4 py-5">
            <div className="max-w-sm w-full bg-base-100 p-6 rounded-lg shadow-md shadow-base-300">
                <h1 className="text-center font-bold text-2xl mb-1.5 border-b-2 border-neutral shadow-lg rounded-lg py-1.5">New-Blog</h1>
                <form className="flex flex-col gap-4">
                    <label htmlFor="title" className="text-sm font-medium mb-1">Title</label>    
                    <input
                    name="title"
                    id="title" 
                    type="text" 
                    placeholder="Blog1" 
                    className="input w-full"
                    required
                    />
                    <label htmlFor="content" className="text-sm font-medium mb-1">Content</label>
                    <ReactQuill value={content} onChange={handleChange} theme="snow" />
                    <label htmlFor="tag" className="text-sm font-medium mb-1">Tag</label>
                    <select defaultValue="Pick a Tag" className="select">
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
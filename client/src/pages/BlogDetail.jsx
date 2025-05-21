export default function BlogDetail(){
    return(
        <div className="flex flex-col items-center min-h-screen gap-4 py-5 px-4 bg-gray-50">
            <div className="max-w-2xl w-full bg-white p-6 rounded-xl shadow-md space-y-4">
                <h2 className="text-2xl font-semibold">Title</h2>
                <p className="text-gray-700">Content goes here. This is the blog body.</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                    <span className="bg-primary text-white px-2 py-1 rounded-md">Published</span>
                    <span className="bg-info text-white px-2 py-1 rounded-md">#React</span>
                    <span className="bg-neutral text-white px-2 py-1 rounded-md">May 20, 2025</span>
                </div>
                {/* like */}
                <div className="flex items-center gap-2 pt-2 border-t">
                    <button className="btn btn-secondary text-white shadow-lg border-b-2 border-b-secondary">
                        <span>12 Likes</span>
                    </button>
                </div>
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
                    className="btn btn-warning text-white shadow-lg border-b-2 border-b-warning">Post</button>
                </form>
                {/* showing comments */}
                <div className="border-t pt-4 space-y-4">
                    <div className="bg-gray-100 p-3 rounded-md">
                        <p className="text-sm text-gray-800">This is an example comment.</p>
                        <span className="text-xs text-gray-500">– User123, 2 hours ago</span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-md">
                        <p className="text-sm text-gray-800">This is an example comment.</p>
                        <span className="text-xs text-gray-500">– User123, 2 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
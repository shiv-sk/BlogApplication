import { useParams } from "react-router-dom"

export default function MyBlogs(){
    const {userId} = useParams();
    console.log(userId);
    return(
        <div className="min-h-screen">
            <section className="md:h-screen flex flex-col justify-center items-center gap-4 py-5">
                <h1>MyBlogs</h1>
                <div className="flex justify-center items-center flex-wrap gap-1.5">
                    <div className="card bg-base-100 w-96 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-warning w-full text-white text-lg shadow-lg border-b-2">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-warning">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-warning">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-warning">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-warning">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
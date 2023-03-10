import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { postContext } from "../context/posts.context"
import Navbar2 from "./Navbar/Navbar2";

export default function Post() {

    const { posts, getPosts } = useContext(postContext);

    useEffect(() => {
        getPosts();
    }, []);



    return (
        <>
        <Navbar2 />
            {posts.map(post => {
                return (
                    <div key={post._id} className="card mb-3 w-50 mx-auto" style={{ "max-width": "540px;" }}>
                        <div className="row g-0">
                            <div className="col col-md-4">
                                <img src={post.image} className="img-fluid rounded-start" alt={post.title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{post.title}</h4>
                                    <p className="card-text">{post.description}</p>
                                    <p className="card-text">Batch:{post.batch}</p>
                                    <p className="card-text">Price per unit: {post.price}€.</p>
                                    <p className="card-text"><small className="text-muted">{post.available}</small></p>
                                    <div className="col-6">
                                    <Link className="m-2 btn btn-info">Contact</Link>
                                    <Link to={`/post/${post._id}`} className="m-2 btn btn-info">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }

        </>
    )
}

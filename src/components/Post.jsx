import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { postContext } from "../context/posts.context"
import ChatPage from "../pages/ChatPage/ChatPage";
import ChatBox from "./ChatBox";
import Navbar2 from "./Navbar/Navbar2";

export default function Post() {

    const { posts, getPosts } = useContext(postContext);
    const[ showChat, setShowChat ] = useState(false)
    const { user } = useContext(AuthContext)
    console.log("USER DESDE POST", user)


    useEffect(() => {
        getPosts();
        setShowChat(false)
    }, []);

    const handleChat = () => {
        setShowChat(!showChat)
    }

    return (
        <>
        <Navbar2 />
            {!showChat && posts.reverse().map(post => {
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
                                    <button onClick={handleChat} test={post.title} className="m-2 btn btn-info">Contact</button>
                                    <Link to={`/post/${post._id}`} props={user} className="m-2 btn btn-info">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
                {showChat && <>
                <ChatBox  />
                <button onClick={handleChat} className="m-2 btn btn-info">Go back!</button>
                </>}


        </>
    )
}

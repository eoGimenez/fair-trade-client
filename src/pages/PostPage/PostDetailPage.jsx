import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postContext } from "../../context/posts.context";
import PostEdit from "../../components/PostEdit";
import PostService from "../../services/post.service";
import Navbar2 from "../../components/Navbar/Navbar2";
import ChatBox from "../../components/ChatBox";
import { AuthContext } from "../../context/auth.context";

export default function PostDetailPage(props) {
    const [post, setPost] = useState({});
    const { postId } = useParams();
    const { posts, getPosts } = useContext(postContext);
    const { user } = useContext(AuthContext)
    const [isOwner, setIsOwner] = useState(false)
    const navigate = useNavigate();

    const [showEdit, setShowEdit] = useState(false);
    const [showChat, setShowChat] = useState(false)

    const getPost = () => {
        const currentPost = posts.find(result => result._id === postId);
        setPost(currentPost);
        if (user._id === currentPost.author._id) {
            setIsOwner(true);
            console.log("IS OWNER",isOwner)
            return;
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    const toggleEdit = () => {
        setShowEdit(!showEdit);
    };

    const deleteHandler = () => {
        PostService.deletePost(post._id)
            .then(response => {
                navigate("/post");
            })
    };

    useEffect(() => {
        setShowChat(true)
    }, [post]);
    console.log("IS OWNER",isOwner)
    return (
        <>
            <Navbar2  />
            {!showEdit && <div className="card mx-auto" style={{ "width": "15rem" }}>
                <img src={post.image} className="card-img-top rounded-circle img-fluid" style={{ "width": "8rem" }} alt="Img" />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Batch: {post.batch}</li>
                    <li className="list-group-item">Price: {post.price}</li>
                    <li className="list-group-item">{post.category}</li>
                    {!post.available && <li className="list-group-item"><span>Out of Stock</span></li>}
                </ul>
            </div>}
            <div className="card-body my-3">
                {showEdit && <PostEdit toggleEdit={toggleEdit} getPost={getPost} postId={postId} getPosts={getPosts} setPost={setPost} currentPost={post} />}
                {isOwner && !showEdit && <button className="btn btn-warning mx-2" onClick={toggleEdit}>Edit</button>}
                {isOwner && !showEdit && <button className="btn btn-danger mx-2" onClick={deleteHandler}>Delete</button>}
            </div>

            {!isOwner && showChat && <ChatBox author={post.author} />}
        </>
    );
};
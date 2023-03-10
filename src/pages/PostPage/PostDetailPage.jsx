import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postContext } from "../../context/posts.context";
import PostEdit from "../../components/PostEdit";
import PostService from "../../services/post.service";
import Navbar2 from "../../components/Navbar/Navbar2";
//import { AuthContext } from "../../context/auth.context";

export default function PostDetailPage() {
    const [post, setPost] = useState({});
    const { postId } = useParams();
    const { posts, getPosts } = useContext(postContext);
    //const { currentUser, setCurrentUser} = useContext(AuthContext)

    //console.log("USER:", currentUser)

    const navigate = useNavigate();

    const [showEdit, setShowEdit] = useState(false);

    const getPost = () => {
        const currentPost = posts.find(result => result._id === postId);
        setPost(currentPost);
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
            console.log(response);
            navigate("/post");

        })
    }

    return (
        <>
        <Navbar2 />
            {!showEdit && <div className="card mx-auto" style={{ "width": "15rem" }}>
                <img src="https://bit.ly/sage-adebayo" className="card-img-top rounded-circle img-fluid" style={{ "width": "8rem" }} alt="user's avatar" />
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
                    {showEdit && <span className="mx-2 btn btn-info">Contact</span>}
                    {showEdit && <PostEdit toggleEdit={toggleEdit} getPost={getPost} postId={postId} getPosts={getPosts} setPost={setPost} currentPost={post} />}

                    {!showEdit && <button className="btn btn-warning mx-2" onClick={toggleEdit}>Edit</button>}
                    {!showEdit && <button className="btn btn-danger mx-2" onClick={deleteHandler}>Delete</button>}
                </div>
        </>
    );
};
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postContext } from "../../context/posts.context";
import PostEdit from "../../components/PostEdit";
import PostService from "../../services/post.service";
import Navbar3 from "../../components/Navbar/NavBar3";
import ChatBox from "../../components/ChatBox";
import { AuthContext } from "../../context/auth.context";
import "../../pages/PostPage/PostNewPage.css"
import "./PostDetailPage.css"


export default function PostDetailPage(props) {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const { posts, getPosts } = useContext(postContext);
  const { user } = useContext(AuthContext);
  const [isOwner, setIsOwner] = useState(false);
  const navigate = useNavigate();
 const [author, setAuthor]= useState({})
  const [showEdit, setShowEdit] = useState(false);
  const [showChat, setShowChat] = useState(false);

  
 
   
  

  const getPost = () => {
    let currentPost = posts.find((result) => result._id === postId);
    console.log("CURRENT POST", currentPost)
    setPost(currentPost);
    setAuthor(currentPost.author)
    if (user._id === currentPost.author._id) {
      setIsOwner(true)
      console.log("CURRENT- POST-getPost", isOwner)
      return;
    }
  };
  
  useEffect(() => {
    getPost();
    //eslint-disable-next-line
  }, []);

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const deleteHandler = () => {
    PostService.deletePost(post._id).then((response) => {
      navigate("/post");
    });
  };

  useEffect(() => {
    setShowChat(true);
  }, [post]);
  console.log("CURRENT- POST", isOwner)

  return (
    <>
      <Navbar3 />
    <div className="divRow">
      <div id="postdetailspage">

      {/* CARD POSTEO!! */}
      <div id="cardposteo">

      {!showEdit && (
        <div
        className="card mb-3 mx-auto  "
          id="details"
          style={{ width: "35rem" }}
        >
            <h1 className="card-title text-center fw-bold mt-5">{post.title}</h1>

          <img
            src={post.image}
            className="card-img-top rounded text-center"
            id="img "
            alt="..."
            style={{ width: "25rem" }}
          />
          <div className="card-body">
            <p className=" text-star">{post.description}</p>
            <p className="card-text text-star ">
              Batch : <spam> {post.batch} units</spam>
            </p>
            <p className="card-text text-star ">Price: {post.price}€</p>
            <p className="card-text text-star">{post.contract}</p>
            <p className="card-text text-star">{post.category}</p>
           
            {!post.available && (
              <p className="list-group-item">
                <span>Out of Stock</span>
              </p>
            )}
      <div className="card-body my-3">
        {showEdit && (
          <PostEdit
            toggleEdit={toggleEdit}
            getPost={getPost}
            postId={postId}
            getPosts={getPosts}
            setPost={setPost}
            currentPost={post}
          />
        )}
        {isOwner && !showEdit && (
          <button id="whitebutton" onClick={toggleEdit}>
            Edit
          </button>
        )}
        {isOwner && !showEdit && (
          <button className="btn btn-danger mx-2" onClick={deleteHandler}>
            Delete
          </button>
        )}
      </div>
          </div>
        </div>
      )}

     
      </div>

      {/* CARD POSTEO!! */}


     {/*  CARD ARTESANO!!!! */}
<>
<div id="cardartesano">
    {!isOwner &&  !showEdit && 
    <div className="card" >
  <div className="card-body d-flex align-items-sm-center">
  <img src={author.avatar} id="imagencardartisan" className="card-img-top rounded-circle mr-5" alt="..."/>
    <Link to={`/profile/${author._id}`}> Visit {author.name} {author.surname}  profile</Link>
  </div>
</div>  } 
</div>  
     {/*  CARD ARTESANO!!!! */}
       
</>

      {!isOwner && showChat && <ChatBox author={post.author} />}
      </div>
      </div>
    </>
  );
}

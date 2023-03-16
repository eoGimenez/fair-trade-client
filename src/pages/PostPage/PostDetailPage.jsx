import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postContext } from "../../context/posts.context";
import PostEdit from "../../components/PostEdit";
import PostService from "../../services/post.service";
import Navbar2 from "../../components/Navbar/Navbar2";
import ChatBox from "../../components/ChatBox";
import { AuthContext } from "../../context/auth.context";
import "../../pages/PostPage/PostNewPage.css"


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
      <Navbar2 />
    {/*    {!showEdit && (
        <div className="card mx-auto" style={{ width: "15rem" }}>
          <img
            src={post.image}
            className="card-img-top rounded-circle img-fluid"
            style={{ width: "8rem" }}
            alt="Img"
          />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Batch: {post.batch}</li>
            <li className="list-group-item">Price: {post.price}</li>
            <li className="list-group-item">{post.category}</li>
            {!post.available && (
              <li className="list-group-item">
                <span>Out of Stock</span>
              </li>
            )}
          </ul>
        </div>
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
          <button className="btn btn-warning mx-2" onClick={toggleEdit}>
            Edit
          </button>
        )}
        {isOwner && !showEdit && (
          <button className="btn btn-danger mx-2" onClick={deleteHandler}>
            Delete
          </button>
        )}
      </div>

      {!isOwner && showChat && <ChatBox author={post.author} />} */}



      {/* CARD POSTEO!! */}
      {!showEdit && (
        <div
          class="card mb-3 mx-auto border-0 "
          id="details"
          style={{ width: "35rem" }}
        >
          <div class=" ">
            <h1 class="card-title text-start fw-bold ">{post.title}</h1>
          </div>

          <img
            src={post.image}
            class="card-img-top rounded"
            id="img "
            alt="..."
          />
          <div class="card-body">
            <p class=" text-star">{post.description}</p>
            <p class="card-text text-star ">
              Batch : <spam> {post.batch} units</spam>
            </p>
            <p class="card-text text-star ">Price: {post.price}€</p>
            <p class="card-text text-star">{post.contract}</p>
            <p class="card-text text-star">{post.category}</p>
           
            {!post.available && (
              <p className="list-group-item">
                <span>Out of Stock</span>
              </p>
            )}
          </div>
        </div>
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
          <button className="btn btn-warning mx-2" onClick={toggleEdit}>
            Edit
          </button>
        )}
        {isOwner && !showEdit && (
          <button className="btn btn-danger mx-2" onClick={deleteHandler}>
            Delete
          </button>
        )}
      </div>

      {/* CARD POSTEO!! */}


     {/*  CARD ARTESANO!!!! */}
<>
    {!isOwner &&  !showEdit && 
    <div class="card" style={{width: "18rem"}}>
  <img src={author.avatar} class="card-img-top rounded-circle mr-2 "  width="300" alt="..."/>
  <div class="card-body">
    <Link to={`/profile/${author._id}`}> Visit {author.name} {author.surname}  profile</Link>
  </div>
</div>  }   
</>
       
     {/*  CARD ARTESANO!!!! */}

      {!isOwner && showChat && <ChatBox author={post.author} />}
    </>
  );
}

import { Link } from "react-router-dom";

function PostUser(props){

    const { user } = props;

    console.log("USER-POSTS-USER", user)
    return(
        <>
   <div id="posteos" >
        <span className="titlesPro">Your Posts:</span>
        <br/>
  <div className="posteosIn">{user.posts.map((post)=>{
    return(
        <>
        <Link to={`/post/${post._id}`}><p> {post.title}</p></Link>
        <div className="">
   {/*  <h5 className="card-title">Description:{post.description}</h5> */}
    <p className="card-text"> </p>
  </div>
  </>
    )
  })}</div>
  
</div>
  </>
    )
}

export default PostUser;
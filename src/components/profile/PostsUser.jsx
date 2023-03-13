import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

function PostUser(props){

    const { user, authenticateUser, isLoading, isLoggedIn ,currentUser} = props;

    console.log("USER-POSTS-USER", user)
    return(
        <>
   <div class="card border-success mb-3" style={{maxWidth: "18rem"}}>
  <div class="card-header">{user.posts.map((post)=>{
    return(
        <>
        <Link to={`/post/${post._id}`}><p>Title: {post.title}</p></Link>
        <div class="card-body text-success">
    <h5 class="card-title">Description:{post.description}</h5>
    <p class="card-text"> </p>
  </div>
  </>
    )
  })}</div>
  
</div>
  </>
    )
}

export default PostUser;
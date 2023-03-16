import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
//import "../../pages/ProfilePage/ProfilePage.css"

function PostUser(props){

    const { user, authenticateUser, isLoading, isLoggedIn ,currentUser} = props;

    console.log("USER-POSTS-USER", user)
    return(
        <>
   <div id="posteos" >
        <span className="titlesPro">Your Posts:</span>
        <br/>
  <div className="posteosIn">{user.posts.map((post)=>{
    return(
        <>
        <Link to={`/post/${post._id}`}><p>Title: {post.title}</p></Link>
        <div class="">
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
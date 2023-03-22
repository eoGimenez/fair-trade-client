import { Link } from "react-router-dom";
import "./ProfilePage.css"

function PostUser(props) {

  const { user } = props;

  console.log("USER-POSTS-USER", user)
  return (
    <>
      <div id="posteos" >
        <span className="titlesPro">Your Posts</span>
        <br />
        <div className="posteosIn">{user.posts.map((post) => {
          return (
              <div className="contenedorPosts" key={post._id}>
                <Link to={`/post/${post._id}`}><span className="linkStyle btn"><p>Title: {post.title}</p></span></Link>
                <p className="card-title">Description:{post.description}</p>
                <p className="card-text"> </p>
                <br />
                <hr />
              </div>
          )
        })}</div>

      </div>
    </>
  )
}

export default PostUser;
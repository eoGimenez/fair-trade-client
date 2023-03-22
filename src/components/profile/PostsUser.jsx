import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css"

function PostUser(props) {
  const [ truncate, setTruncate ] = useState(true)
  const { user } = props;
 
  const clickHandler = () => {
    setTruncate(!truncate)
  }

  let classDesc = "";
  if (truncate) classDesc = "text-truncate"

  return (
    <>
      <div id="posteos" >
        <span className="titlesPro">Crafts</span>
        <div className="posteosIn">{user.posts.map((post) => {
          return (
              <div className="contenedorPosts" key={post._id}>
                <Link to={`/post/${post._id}`}><span className="linkStyle btn"><p className="title">{post.title}</p></span></Link>
                <p className={"description d-inline-block " + classDesc} onClick={clickHandler}>{post.description} </p>
                <hr />
              </div>
          )
        })}</div>

      </div>
    </>
  )
}

export default PostUser;
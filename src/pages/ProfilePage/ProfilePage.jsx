import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import CommerceForm from "../../components/profile/CommerceForm";
import FormUser from "../../components/profile/FormUser";
import userService from "../../services/user.services";
import "./ProfilePage.css";
import PostUser from "../../components/profile/PostsUser";
import Navbar2 from "../../components/Navbar/Navbar2";
import "../../pages/PostPage/PostNewPage.css"


function ProfilePage() {
  const { userId } = useParams();
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  /*  console.log('PARAMS:', userId) */
  /* const [user, setUser] = useState('') */
  /*  const { usersCTX, getUsers} = useContext(userContext);  */
  /*  const { post, getPosts } = useContext(postContext); */

  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(false)

  const [sameUser, setSameUser] = useState(false);
  //console.log("CURRENTUSER", currentUser)

  /*  console.log("currentUserPost:", post); */

  /*   const getPost = () => {
      let currentUserPost = post.find((posts) => posts.author === user._id);
      setPostUser(currentUserPost);
    }; */

  useEffect(() => {
    userService.getUser(userId).then((response) => {
      setCurrentUser(response.data);
    
      if (userId === response.data._id) {
        setSameUser(true);
        return;
      }
    });
      //eslint-disable-next-line
  }, []);


  return (
    <>


   {/*    <div className="container"> */}
        {/* <div className="col col-lg-6"> */}
        <div className="row">
          <div id="divRow">
        <Navbar2 userFrom={currentUser} />
          {/* CURRENT USER!!!!! */}
          {currentUser ? (
            <div id="containerprofile">
              <div className="containerprofile">

                {/* INFO USUARIO!!!!! */}
                <div id="chau1">
                  <FormUser user={currentUser} sameUser={sameUser} />
                </div>
                {/* INFO USUARIO!!!!! */}

                {/* COMMERCE FORM */}
                <div className="text-center" id="chau2">
                  <CommerceForm user={currentUser} sameUser={sameUser} />
                </div>
                {/* COMMERCE FORM */}

                {/* POSTEOS!!!!! */}
                <div className="posteos">
                  <p>Your Posts: </p>
                  <PostUser user={currentUser} isLoading={isLoading} isLoggedIn={isLoggedIn} />
                </div>
              </div>
            </div>
          ) : <p><div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div></p>}
          {/* POSTEOS!!!!! */}

          {/* CURRENT USER!!!!! */}
        </div>

      {/* POSTEOS!!!!! */}

      {currentUser.role === "Artisan" && 
      <div className="posteos">
            <p>Crafts: </p>
            <PostUser user={currentUser} isLoading={isLoading} isLoggedIn={isLoggedIn} />
          </div>
          } </div>
          </div>
          ) :  <p><div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div></p>}
      {/* POSTEOS!!!!! */}
  {/* CURRENT USER!!!!! */}



      {/* CHAT!!!         */}
      <div id="chatjs">
      {!showChat && <button id="whitebutton" onClick={handleChat}  className="m-2 btn btn-info">
        Inbox
        </button>}
         {showChat && <>
        <InBox />
        <button id="whitebutton" onClick={handleChat} className="m-2 btn btn-info">
          Go back!
          </button>
      </>}
        {/* CIERRE RETURN!!!! */}
      </div>
      {/*  </div> */}
     {/*   </div> */}
    </>
  );
}

export default ProfilePage;

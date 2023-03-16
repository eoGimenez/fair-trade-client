/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import CommerceForm from "../../components/profile/CommerceForm";
import FormUser from "../../components/profile/FormUser";
import userService from "../../services/user.services";
import "./ProfilePage.css";
import PostUser from "../../components/profile/PostsUser";
import Navbar2 from "../../components/Navbar/Navbar2";
import InBox from "../../components/chat/InBox";
import "../../pages/PostPage/PostNewPage.css"


function ProfilePage() {
  const { userId } = useParams();
  const { user, isLoggedIn, isLoading } = useContext(AuthContext);
  /*  console.log('PARAMS:', userId) */
  /* const [user, setUser] = useState('') */
  /*  const { usersCTX, getUsers} = useContext(userContext);  */
  /*  const { post, getPosts } = useContext(postContext); */

  const [showChat, setShowChat] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const [sameUser, setSameUser] = useState(false);
  //console.log("CURRENTUSER", currentUser)

  /*  console.log("currentUserPost:", post); */

  /*   const getPost = () => {
      let currentUserPost = post.find((posts) => posts.author === user._id);
      setPostUser(currentUserPost);
    }; */

  /*   const getUser = () => {
      let currentUser = usersCTX.find(user => user._id === userId);
      console.log("CURRENT USER: ", currentUser);
      setUser(currentUser);
    }
    */
  useEffect(() => {
    /* authenticateUser(); */
    userService.getUser(userId).then((response) => {
      setCurrentUser(response.data);
      //console.log("RESPONSE-CURRENT-USER", response.data)

      if (userId === response.data._id) {
        setSameUser(true);
        return;
      }
    });
  }, []);
  const handleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>

     <div id="divRow">
      <Navbar2 userFrom={currentUser} />

    {/* CURRENT USER!!!!! */}
      {currentUser ? (<div id="containerprofile" >
        <div className="containerprofile">

        {/* INFO USUARIO!!!!! */}
          <div id="chau1"><FormUser user={currentUser} sameUser={sameUser} /></div>
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
           </div>) : <p>
            <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          </div>
        </p>}
      {/* POSTEOS!!!!! */}



    {/* CURRENT USER!!!!! */}



      {/* CHAT!!!         */}
      <div id="chatjs">
         {!showChat && <button id="whitebutton" onClick={handleChat}  className="m-2 btn btn-info">
          Contact
        </button>}
         {showChat && <>
        <InBox />
        <button id="whitebutton" onClick={handleChat} className="m-2 btn btn-info">
          Go back!
          </button>
      </>}
      </div>
        {/* CHAT!!!         */}

      </div> 

    {/* CIERRE RETURN!!!! */}
       
    </>
  );
}

export default ProfilePage;

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

function ProfilePage() {
  const { userId } = useParams();
  /*  console.log('PARAMS:', userId) */
  /* const [user, setUser] = useState('') */
  /*  const { usersCTX, getUsers} = useContext(userContext);  */
  const { user, isLoggedIn, isLoading } = useContext(AuthContext);
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

        {currentUser ? (
          <div id="containerprofile">
            <div className="containerprofile">
              <div className="col-7" id="chau1">
                <FormUser user={currentUser} sameUser={sameUser} />

                <div className="aboutme">
                  <div className="hola"></div>

                  <div className="text-center" id="chau2">
                    <CommerceForm user={currentUser} sameUser={sameUser} />
                  </div>
                </div>
                <div className="row mt-5">
                  <PostUser
                    user={currentUser}
                    isLoading={isLoading}
                    isLoggedIn={isLoggedIn}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p><div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div></p>
        )}
      </div>
      {!showChat && (
        <button onClick={handleChat} className="m-2 btn btn-info">
          Contact
        </button>
      )}
      {showChat && (
        <>
          <InBox />
          <button onClick={handleChat} className="m-2 btn btn-info">
            Go back!
          </button>
        </>
      )}
    </>
  );
}

export default ProfilePage;

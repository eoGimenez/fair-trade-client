/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import CommerceForm from "../../components/profile/CommerceForm"
import FormUser from "../../components/profile/FormUser";
import userService from "../../services/user.services";
import "./ProfilePage.css"
import PostUser from "../../components/profile/PostsUser"
import Navbar2 from "../../components/Navbar/Navbar2";

function ProfilePage() {
  const { userId } = useParams();
  /*  console.log('PARAMS:', userId) */
  /* const [user, setUser] = useState('') */
  /*  const { usersCTX, getUsers} = useContext(userContext);  */
  const { user, isLoggedIn, isLoading } = useContext(AuthContext);
  /*  const { post, getPosts } = useContext(postContext); */

  const [currentUser, setCurrentUser] = useState(null);
  console.log("CURRENTUSER", currentUser)

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
      setCurrentUser(response.data)
      console.log("RESPONSE-CURRENT-USER", response.data)
    })

  }, []);

  /* console.log("post: ", post); */
  const testCHAT = "e3517551f1d165805460"
  return (
    <>
      <Navbar />
      <Navbar2/>

      {currentUser ? (<div id="containerprofile" >
        <div className="containerprofile">
          <div className="chau1"><FormUser user={currentUser} />
          
          <div className="yo">
            {" "}
            <div className="hola">
            </div>

            <div className="chau2">
              <CommerceForm user={currentUser} />
            </div>
          </div>
          <div className="row mt-5">
            <PostUser user={currentUser} isLoading={isLoading} isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </div>
        </div>) : <p>Loading...</p>}

    </>
  );
}

export default ProfilePage;

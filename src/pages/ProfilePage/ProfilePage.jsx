/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Navbar2 from "../../components/Navbar/Navbar2";
import { useContext, useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import CommerceForm from "../../components/profile/CommerceForm"
import { postContext } from "../../context/posts.context";
import FormUser from "../../components/profile/FormUser";
import userService from "../../services/user.services";

function ProfilePage() {
  const { userId } = useParams();
  /*  console.log('PARAMS:', userId) */
  /* const [user, setUser] = useState('') */
  /*  const { usersCTX, getUsers} = useContext(userContext);  */
  const { user, isLoggedIn, isLoading } = useContext(AuthContext);
 /*  const { post, getPosts } = useContext(postContext); */

  const [currentUser, setCurrentUser] = useState(null); 

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
  })

  }, []);

  /* console.log("post: ", post); */
  const testCHAT = "e3517551f1d165805460"
  return (
    <>
      <Navbar2 />

      {currentUser ? (<div id="containerprofile" className="container  ">
        <div className="row ">
          <div className="col-5 /* vh-100 */">{/*  bg-primary */}<FormUser user={currentUser}/></div> 
          <div className="col-6  ">
            {" "}
            {/* bg-info */}
            <div className="container ">
              <div className="row">
               <CommerceForm user={currentUser}  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col bg-warning "> POSTEOS!!!!!</div>
              </div>
            </div>
          </div>
        </div>) : <p>Loading...</p>}
    


    </>
  );
}

          export default ProfilePage;

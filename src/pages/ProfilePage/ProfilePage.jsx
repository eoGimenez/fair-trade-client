/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Navbar2 from "../../components/Navbar/Navbar2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import CommerceForm from "../../components/profile/CommerceForm"
import { postContext } from "../../context/posts.context";
import FormUser from "../../components/profile/FormUser";

function ProfilePage() {
  /*  const { userId } = useParams(); */
  /*  console.log('PARAMS:', userId) */
  /* const [user, setUser] = useState('') */
  /*  const { usersCTX, getUsers} = useContext(userContext);  */
  const { user, authenticateUser } = useContext(AuthContext);
  const { post, getPosts } = useContext(postContext);

  const [postUser, setPostUser] = useState([]);

  console.log("currentUserPost:", post);
 

  const getPost = () => {
    let currentUserPost = post.find((posts) => posts.author === user._id);
    setPostUser(currentUserPost);
  };

  useEffect(() => {
    authenticateUser();

  }, []);

  console.log("post: ", post);

  return (
    <>
      <Navbar2 />

      <div id="containerprofile" className="container  ">
        <div className="row ">
          <div className="col-5 /* vh-100 */">{/*  bg-primary */}
          
              <FormUser user={user}  authenticateUser={authenticateUser} />
            
          </div>
          <div className="col-6  ">
            {" "}
            {/* bg-info */}
            <div className="container ">
              <div className="row">
               <CommerceForm  user={user}  authenticateUser={authenticateUser}/>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col bg-warning "> POSTEOS!!!!!</div>
              </div>
            </div>
          </div>
        </div>
    


    </>
  );
}

export default ProfilePage;

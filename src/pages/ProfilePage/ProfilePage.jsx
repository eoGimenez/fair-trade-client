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

  const { user, authenticateUser } = useContext(AuthContext)
  //const { userId } = useParams();
  //console.log('PARAMS:', userId)
  //const [user, setUser] = useState('')
  //const { usersCTX, getUsers} = useContext(userContext); 
  /* const {userId} = us */
  /* const userId = "64089a6f8523c7de64ad1eea" */

  //console.log("USERCXTPROFILE: ", usersCTX)

  /*   const getUser = () => {
      let currentUser = usersCTX.find(user => user._id === userId);
      console.log("CURRENT USER: ", currentUser);
      setUser(currentUser);
    }
    */
  useEffect(() => {
    authenticateUser();
  }, [])

  return (
    <>
      <Navbar2 />
      <div className="card mb-3" /* style="max-width: 540px;" */>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.surname}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              {/* //CLOUDINARY!!!!! 
        <img src={user.avatar} alt="Avatar" width={200}/> */}
            </div>
            {/* <ChatBox /> */}
            </div>
            </div>
            </div>
          </>
          );
}

          export default ProfilePage;

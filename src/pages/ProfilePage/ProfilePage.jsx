
import Navbar2 from "../../components/Navbar/Navbar2";
import { useContext, useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router";
import { userContext } from "../../context/user.context";

function ProfilePage() {

  const { id } = useParams();
  console.log('PARAMS:', id)
  const [user, setUser] = useState('')
  const { usersCTX, getUsers} = useContext(userContext); 
  /* const {userId} = us */
  /* const userId = "64089a6f8523c7de64ad1eea" */
 
  console.log("USERCXTPROFILE: ", usersCTX)

  const getUser = () => {
    let currentUser = usersCTX.find(user => user._id === id);
    console.log("CURRENT USER: ", currentUser);
    setUser(currentUser);
}

  useEffect(()=>{
   getUser();
  },[])

  return (
    <>
      <Navbar2 />
      <div className="card mb-3" /* style="max-width: 540px;" */>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.surname}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default ProfilePage;

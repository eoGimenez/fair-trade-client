import userService from "../../services/user.services";
import { userContext } from "../../context/user.context";
import Navbar2 from "../../components/Navbar/Navbar2";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Users(){

 const [users, setUsers] = useState()

 const {usersCTX, getUsers} = useContext(userContext);


 useEffect(()=>{
    getUsers()
   },[])
     
   console.log("userCXT:", usersCTX.length)
    return(
        <>
        <Navbar2 />

        {usersCTX.map((user)=>{
            return(
                <div className="card mb-3" k={user._id}/* style="max-width: 540px;" */>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{user.name}</h5>
                      <p className="card-text">{user.surname}</p>
                      <p className="card-text"><small className="text-muted">{user.commercename}</small></p>
                      <Link to={'/profile/'+ user._id}>Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
        })}
 
        </>
    )
}

export default Users;
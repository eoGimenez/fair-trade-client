import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import "./Navbar2.css";
import logoImg from "./navbarlogo.png";

function Navbar2() {
  const { logOutUser, user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState("")
  const [userRole, setUserRole] = useState("")
  const [currentUser, setCurrentUser] = useState({})
  setTimeout(() => {
    setCurrentUser(user)
  }, 50)
  useEffect(() => {
    setIsLoading(true)
  }, [])
  useEffect(() => {
    setTimeout(() => {

      setId(currentUser._id)
      setUserRole(currentUser.role)
      setIsLoading(false)
      console.log("USER EN ", currentUser)

    })

  }, [currentUser])

  return (
    <>
      <div className="container">
        <div className="raw">
          <div className="col col-sm-12 " id="navbar2">
            <ul>
              <li>
                <Link to="/" className="col col-sm-12">
                  <img src={logoImg} alt="Logo" /*style={{ height: 60, width: 500}}*/ />
                </Link>
              </li>
              {!isLoading &&
                <>
                  <li>
                    <Link to={`/profile/${id}`} className="active">
                      <i class="fa-solid fa-user"></i>    Profile
                    </Link>
                  </li>
                  <>
                    {userRole === "Artisan" &&
                      <li>
                        <Link to="/post/new" className="active">
                          <i class="fa-solid fa-plus"></i>   New Post
                        </Link>
                      </li>
                    }
                    <li>
                      <Link to="/post" className="active">
                        <i class="fa-solid fa-signs-post"></i>  Posts
                      </Link>
                    </li>

                    <li>
                      <button onClick={logOutUser} className="active">
                        <i class="fa-solid fa-right-from-bracket"></i>   Log Out
                      </button>
                    </li>
                  </>
                </>}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar2;

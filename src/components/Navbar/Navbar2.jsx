import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import "./Navbar2.css";
import logoImg from "./navbarlogo.png";

function Navbar2() {
  const { logOutUser, isLoggedIn, user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setRole(user.role)
    setIsLoading(false)
  }, 500)

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

          <li>
            <Link to= {`/profile/${user._id}`}  className="active">
            <i class="fa-solid fa-user"></i>    Profile
            </Link>
          </li>
          {!isLoading && <>
            {role=== "Artisan" &&
            <li>
              <Link to="/post/new" className="active">
                <i class="fa-solid fa-plus"></i>   New Craft
              </Link>
            </li>
           }
          <li>
            <Link to="/post" className="active">
              <i class="fa-solid fa-signs-post"></i>  Crafts
            </Link>
          </li>

          <li>
            <button onClick={logOutUser} className="active">
              <i class="fa-solid fa-right-from-bracket"></i>   Log Out
            </button>
          </li>
          </>}
        </ul>
      </div>
      </div>
      </div>


    </>
  );
}

export default Navbar2;

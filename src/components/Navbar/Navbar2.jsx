import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { useEffect } from "react";
import "./Navbar2.css";
import logoImg from "./navbarlogo.png";

function Navbar2() {
  const { logOutUser, user, isLoading, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {}, []);

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

          <li>
            <Link to="/post/new" href="#" className="active">
            <i class="fa-solid fa-plus"></i>   New Post
            </Link>
          </li>

          <li>
            <Link to="/post" href="#" className="active">
            <i class="fa-solid fa-signs-post"></i>  Posts
            </Link>
          </li>

          <li>
            <button onClick={logOutUser} className="active">
              <i class="fa-solid fa-right-from-bracket"></i>   Log Out
            </button>
          </li>

        </ul>
      </div>
      </div>
      </div>


    </>
  );
}

export default Navbar2;

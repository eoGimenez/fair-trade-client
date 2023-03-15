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
      <div id="navbar2">
        <ul>
          <li>
            <Link to="/" className="active">
              <img src={logoImg} alt="Logo" style={{ height: 50 }} />
            </Link>
          </li>
          {!isLoading && <>
            {role=== "Artisan" &&
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
          </>}
        </ul>
      </div>
    </>
  );
}

export default Navbar2;

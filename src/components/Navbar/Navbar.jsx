import "./Navbar.css";
import { Link } from "react-router-dom";
import  logoImg  from "./navbarlogo.png";
import InitialFocus from "../modal/InitialFocus"


function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logoImg} alt="Logo" style={{ height: 50 }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
           
              <li className="nav-item">
                <InitialFocus />
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

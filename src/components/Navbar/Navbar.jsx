import "./Navbar.css";
import { Link } from "react-router-dom";
import  logoImg  from "./navbarlogo.png";
import InitialFocus from "../modal/InitialFocus";
import { useContext } from "react";
 import { AuthContext } from "../../context/auth.context";
 
 function Navbar() {
   const { user } = useContext(AuthContext)
   
  return (
    <>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src={logoImg} alt="Logo" style={{height:50}}/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">About us</Link>
          </li>
          <li className="nav-item">

          {/* Button trigger modal */}
            <InitialFocus />
          </li>
          

{/* <!-- Modal --> */}

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>





          {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/login" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Log In
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="">Action</Link></li>
              <li><Link className="dropdown-item" to="">Another action</Link></li>
              <li><Link className="dropdown-item" to="">Something else here</Link></li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
  </>
  );
}

export default Navbar;

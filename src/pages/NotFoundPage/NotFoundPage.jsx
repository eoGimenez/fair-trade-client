import "./NotFoundPage.css";
import image from "./NotFound.jpg"
import logo from "../../components/Navbar/navbarlogo.png"
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
   <>
   <div id="div" >
   <img src={logo} alt="logo" id="logo" className="mt-3"/>
    <img src={image} alt="notfound" id="imagen" className="mx-auto mt-2"/>
    
    <p id="text" className="mt-3">Page Not Found</p>
    <Link to="/"><p id="text2">Please visit our Home Page </p></Link>
   </div>
      </>
  );
}

export default NotFoundPage;

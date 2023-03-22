import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";
import { Link } from "react-router-dom";
// import CarruselVideo from "../../components/CarruselVideo/CarruselVideo";
import HomeVideo from "../../components/HomeVideo/HomeVideo";


function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      
      <HomeVideo></HomeVideo>


      <div className="hometext">
        <h2>
          Local Art Co. connects artisans with physical stores. <br></br>
          Artisans leave their products in consignment, set the price, and
          stores sell the products and earn a percentage.<br></br>
          We guarantee a fair deal for all parties involved.
        </h2>
      </div>
      <br></br>
      <div className="homebutton">
        <Link to="/signup">
          <button className="cta">
            <span>Sign Up</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
      </div>

      <footer className="footer">
        Copyright Local Art Co. 2023. All rights reserved.
      </footer>
    </>
  );
}

export default HomePage;

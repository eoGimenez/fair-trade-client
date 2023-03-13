import Navbar2 from "../../components/Navbar/Navbar2";
import "./HomePage.css";
import InitialFocus from "../../components/modal/InitialFocus";
import { Button } from "@chakra-ui/react";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <>
    <div>
    <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={slide1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <br></br>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <InitialFocus/>
      <Link to='/signup'> <Button  color="rgb(79, 37, 120)" variant="ghost" size='lg' mx='auto'>Sign Up</Button></Link>
    </div>
    </>
  );
}

export default HomePage;

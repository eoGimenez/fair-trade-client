import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";
//import InitialFocus from "../../components/modal/InitialFocus";
//import { Box } from "@chakra-ui/layout";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div id="divnavbar">
        <Navbar></Navbar>
      </div>

      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={slide1} class="d-block w-100" alt="Slide 1" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={slide2} class="d-block w-100" alt="Slide 2" />
          </div>
          <div class="carousel-item">
            <img src={slide3} class="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <br></br>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <h1 className="h1">
          Local Art Co. connects artisans with physical stores. Artisans leave
          their products in consignment, set the price, and stores sell the
          products and earn a percentage. <br></br>
          <strong>We guarantee a fair deal for all parties involved.</strong>
        </h1>
        <div id="buttongs">
          <Link to="/signup">
            <button class="cta">
              <span>Get started</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <ProfileForm></ProfileForm>
      <footer className="footer">
      Copyright Local Art Co.  2023.  All rights reserved.
        </footer>
    </>
  );
}

export default HomePage;

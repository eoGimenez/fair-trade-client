import { Carousel } from 'react-bootstrap';
import slide1 from "./slide1.mp4"
import slide2 from "./slide2.mp4"
import slide3 from "./slide3.mp4"

function CarruselVideo() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <video autoPlay muted loop className="d-block w-100">
          <source src={slide1} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video autoPlay muted loop className="d-block w-100">
          <source src={slide2} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video autoPlay muted loop className="d-block w-100">
          <source src={slide3} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselVideo;


// import { Carousel } from 'react-bootstrap';
// import slide1 from "./slide1.mp4"
// import slide2 from "./slide2.mp4"
// import slide3 from "./slide3.mp4"



// function CarruselVideo() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide1}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide2}
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//         src={slide3}
//         alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarruselVideo;

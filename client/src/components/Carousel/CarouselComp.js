import React from "react";
import juvoffice from "../../images/juvoffice.jpg";
import juvopay from "../../images/juvopay.jpg";
import juvopos from "../../images/juvopos.jpg";
import posandrea from "../../images/posandrea.jpg";
import { Carousel, Image } from "react-bootstrap";
import "./styles.css";

const CarouselComp = () => {
  return (
    <Carousel className="pb-4">
      <Carousel.Item>
        <img
          // style={{ width: "150px", height: "150px" }}
          src={juvoffice}
          alt="test"
          className="d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          // style={{ width: "150px", height: "150px" }}
          src={juvopay}
          alt="test"
          className="d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          // style={{ width: "150px", height: "150px" }}
          src={juvopos}
          alt="test"
          className="d-block w-100"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          // style={{ width: "150px", height: "150px" }}
          src={posandrea}
          alt="test"
          className="d-block w-100"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;

//   return (
//     <Carousel>
//       <Carousel.Item>
//         {images.map((image) => (
//           <img
//             key={index}
//             className="demo-item"
//             style={{ backgroundImage: "url(" + image.src + ")" }}
//           />
//         ))}
//       </Carousel.Item>
//     </Carousel>
//   );
// };

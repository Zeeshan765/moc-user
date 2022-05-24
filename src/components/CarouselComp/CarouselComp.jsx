import React, { useState } from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import car1 from "../../Assets/car1.jpg";

import thunder from "../../Assets/thunder.jpg";

import custompc from "../../Assets/custompc.png";
import "./Carousel.css";

const CarouselComp = () => {
  return (
    <div>
      <Carousel className="carousel" variant="dark">
        <Carousel.Item interval={3000}>
          <img className="m-block w-55" src={car1} alt="First slide" />{" "}
          <div className="divpos">
            <Carousel.Caption className="caption">
              <h3>Build Your own PC</h3>
              <p>and have it at your doostep!</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="m-block w-55" src={thunder} alt="Second slide" />
          <div className="divpos">
            <Carousel.Caption className="caption">
              <h3>Get your desired tech</h3>
              <p>with just a few clicks</p>
            </Carousel.Caption>{" "}
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="m-block w-55" src={custompc} alt="Third slide" />
          <div>
            <Carousel.Caption className="caption">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;

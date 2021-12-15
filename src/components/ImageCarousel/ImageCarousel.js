import React from "react";
import "./css/Slider.css";
import { SliderData } from "./SliderData";
import { Carousel, CarouselItem } from "react-bootstrap";

const ImageCarousel = () => {
  return (
    <div className="tem-wrp text-center remove-ext4">
      <div
        className="row"
        style={{
          marginBottom: "3rem",
          marginTop: "1rem",
          justifyContent: "center",
        }}
      >
        <div
          className="col-md-12 col-sm-12 col-lg-12"
          style={{ maxWidth: "1100px" }}
        >
          <div className="slider">
            <Carousel>
              {SliderData.map((index) => {
                return (
                  <CarouselItem>
                    <img src={index.image} alt="mainimage" itemprop="image" />
                  </CarouselItem>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

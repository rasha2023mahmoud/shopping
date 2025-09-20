"use client";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { Button } from "react-bootstrap";
export default function Sliders() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="slide-img-wrapper">
          <Image
            src="/images/carousel-1.jpg"
            alt="carousel"
            fill
            sizes="100vw"
            className="slide-img"
            priority
          />
        </div>
        <Carousel.Caption>
          <h3>10% Off Your First Order</h3>
          <p>Reasonable Price.</p>
          <button type="button" className="shop-btn">
            Shop Now
          </button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide-img-wrapper">
          <Image
            src="/images/carousel-2.jpg"
            alt="carousel"
            fill
            sizes="100vw"
            className="slide-img"
            priority
          />
        </div>
        <Carousel.Caption>
          <h3>10% Off Your First Order</h3>
          <p>Fashionable Dress.</p>
          <button type="button" className="shop-btn">
            Shop Now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

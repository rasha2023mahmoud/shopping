"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
export default function SliderShowDetails() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div style={{ position: "relative", width: "60%", height: "600px" }}>
            <Image
              src="/shopDetailsImages/product-1.jpg"
              alt="carousel"
              fill
              sizes="30vw"
              className="slider-img"
              priority
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: "relative", width: "60%", height: "600px" }}>
            <Image
              src="/shopDetailsImages/product-2.jpg"
              alt="carousel"
              fill
              sizes="100vw"
              className="slider-img"
              priority
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: "relative", width: "60%", height: "600px" }}>
            <Image
              src="/shopDetailsImages/product-3.jpg"
              alt="carousel"
              fill
              sizes="100vw"
              className="slider-img"
              priority
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ position: "relative", width: "60%", height: "600px" }}>
            <Image
              src="/shopDetailsImages/product-4.jpg"
              alt="carousel"
              fill
              sizes="100vw"
              className="slider-img"
              priority
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

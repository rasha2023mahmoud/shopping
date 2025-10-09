"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { AiFillPlusSquare } from "react-icons/ai";
import { CiSquareMinus } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import ColorfulInput from "../components/ColorfulInput";

export default function Colorful() {
  return (
    <>
      <div className="colorful-container">
        <div className="slide-container">
          <Carousel>
            <Carousel.Item>
              <div
                style={{ position: "relative", width: "100%", height: "400px" }}
              >
                <Image
                  src="/images/product-1.jpg"
                  alt="carousel"
                  fill
                  sizes="100vw"
                  className="slider-img"
                  priority
                />
              </div>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{ position: "relative", width: "100%", height: "400px" }}
              >
                <Image
                  src="/images/product-2.jpg"
                  alt="carousel"
                  fill
                  sizes="100vw"
                  className="slider-img"
                  priority
                />
              </div>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{ position: "relative", width: "100%", height: "400px" }}
              >
                <Image
                  src="/images/product-3.jpg"
                  alt="carousel"
                  fill
                  sizes="100vw"
                  className="slider-img"
                  priority
                />
              </div>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{ position: "relative", width: "100%", height: "400px" }}
              >
                <Image
                  src="/images/product-4.jpg"
                  alt="carousel"
                  fill
                  sizes="100vw"
                  className="slider-img"
                  priority
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="details-container">
          <h2>Colorful Stylish Shirt</h2>
          <IoStarSharp />
          <span>$150.00</span>
          <p>
            Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
            diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem
            magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore
            stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum
            diam et rebum kasd rebum.
          </p>
          <div className="select-type">
            {/* <label>Sizes</label>
            <input type="checkbox" />
            <label>Types</label>
            <input type="checkbox" /> */}
            <ColorfulInput />
          </div>
          <div className="add-cart">
            <AiFillPlusSquare />
            <span>1</span>
            <CiSquareMinus />
          </div>
          <div className="socialmedia-icons">
            <h6>Share on:</h6>
            <TiSocialFacebook className="" />
            <TiSocialInstagram className="" />
            <TiSocialPinterestCircular className="" />
            <TiSocialYoutube className="" />
          </div>
        </div>
      </div>
    </>
  );
}

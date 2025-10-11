"use client";
import { IoStarSharp } from "react-icons/io5";
import { AiFillPlusSquare } from "react-icons/ai";
import { CiSquareMinus } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaCartArrowDown } from "react-icons/fa";
import ColorfulInput from "./ColorfulInput";
import SliderShowDetails from "./SliderShowDetails";
// import Carousel from "react-bootstrap/Carousel";
// import Image from "next/image";
export default function Colorful() {
  return (
    <>
      <div className="colorful-container">
        <div className="slide-container">
          <SliderShowDetails />
        </div>
        <div className="details-container">
          <div className="details">
            <h2>Colorful Stylish Shirt</h2>
            <div className="rating">
              <IoStarSharp style={{ color: "#D19C97" }} />
              <IoStarSharp style={{ color: "#D19C97" }} />
              <IoStarSharp style={{ color: "#D19C97" }} />
              <IoStarSharp />
              <IoStarSharp />
              <p>(50Reviwes)</p>
            </div>
            <span>$150.00</span>
            <p className="paragraph">
              Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
              diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem
              magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore
              stet, est lorem sit diam sea et justo, amet at lorem et eirmod
              ipsum diam et rebum kasd rebum.
            </p>
          </div>
          <div className="select-type">
            <ColorfulInput />
          </div>
          <div className="add-cart">
            <AiFillPlusSquare style={{ fontSize: "47px", color: "#D19C97" }} />
            <span>1</span>
            <CiSquareMinus style={{ fontSize: "47px", color: "#D19C97" }} />
            <div className="add">
              <FaCartArrowDown style={{ fontSize: "38px" }} />
              <p style={{ padding: "3px" }}>Add to cart</p>
            </div>
          </div>
          <div className="socialmedia-icons">
            <h6>Share on:</h6>
            <TiSocialFacebook className="show-icons" />
            <TiSocialInstagram className="show-icons" />
            <TiSocialPinterestCircular className="show-icons" />
            <TiSocialYoutube className="show-icons" />
          </div>
        </div>
      </div>
    </>
  );
}

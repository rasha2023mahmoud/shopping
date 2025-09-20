"use client";
import { FaCheck } from "react-icons/fa";
import { PiCarProfileBold } from "react-icons/pi";
import { MdCompareArrows } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function ShowBar() {
  return (
    <>
      <div className="show-bar">
        <div className="show-details">
          <span className="show-icon">
            <FaCheck />
          </span>
          <h4 className="show-title">Quality Product</h4>
        </div>
        <div className="show-details">
          <span className="show-icon">
            <PiCarProfileBold />
          </span>
          <h4>Free Shipping</h4>
        </div>
        <div className="show-details">
          <span className="show-icon">
            <MdCompareArrows />
          </span>
          <h4>14-Day Return</h4>
        </div>
        <div className="show-details">
          <span className="show-icon">
            <BsFillTelephoneFill />
          </span>
          <h4>24/7 Support</h4>
        </div>
      </div>
    </>
  );
}

"use strict";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
export default function AlsoLike() {
  return (
    <>
      <div className="alsoLike-container">
        <div className="col-sm-4 card-content">
          <div style={{ overflow: "hidden" }}>
            <Image
              className="like-img"
              src="/images/product-1.jpg"
              width={300}
              height={300}
              priority
              alt="product-1"
            />
          </div>
          <h4>Colourful stylish shirt</h4>
          <div className="prices">
            <span className="first-price">$123.00</span>{" "}
            <span className="second-price">$123.00</span>
          </div>
          <div className="icons-list">
            <div className="first-icons">
              <span className="icon-color">
                <FaEye />
              </span>
              <span className="text-icon">view details</span>
            </div>
            <div className="second-icons">
              <span className="icon-color">
                <FaShoppingCart />
              </span>
              <span className="text-icon">add to cart</span>
            </div>
          </div>
        </div>
        <div className="col-sm-4 card-content">
          <div style={{ overflow: "hidden" }}>
            <Image
              className="like-img"
              src="/images/product-2.jpg"
              width={300}
              height={300}
              priority
              alt="product-2"
            />
          </div>
          <h4>Colourful stylish shirt</h4>
          <div className="prices">
            <span className="first-price">$123.00</span>{" "}
            <span className="second-price">$123.00</span>
          </div>
          <div className="icons-list">
            <div className="first-icons">
              <span className="icon-color">
                <FaEye />
              </span>
              <span className="text-icon">view details</span>
            </div>
            <div className="second-icons">
              <span className="icon-color">
                <FaShoppingCart />
              </span>
              <span className="text-icon">add to cart</span>
            </div>
          </div>
        </div>
        <div className="col-sm-4 card-content">
          <div style={{ overflow: "hidden" }}>
            <Image
              className="like-img"
              src="/images/product-3.jpg"
              width={300}
              height={300}
              priority
              alt="product-3"
            />
          </div>
          <h4>Colourful stylish shirt</h4>
          <div className="prices">
            <span className="first-price">$123.00</span>{" "}
            <span className="second-price">$123.00</span>
          </div>
          <div className="icons-list">
            <div className="first-icons">
              <span className="icon-color">
                <FaEye />
              </span>
              <span className="text-icon">view details</span>
            </div>
            <div className="second-icons">
              <span className="icon-color">
                <FaShoppingCart />
              </span>
              <span className="text-icon">add to cart</span>
            </div>
          </div>
        </div>
        <div className="col-sm-4 card-content">
          <div style={{ overflow: "hidden" }}>
            <Image
              className="like-img"
              src="/images/product-4.jpg"
              width={300}
              height={300}
              priority
              alt="product-4"
            />
          </div>
          <h4>Colourful stylish shirt</h4>
          <div className="prices">
            <span className="first-price">$123.00</span>{" "}
            <span className="second-price">$123.00</span>
          </div>
          <div className="icons-list">
            <div className="first-icons">
              <span className="icon-color">
                <FaEye />
              </span>
              <span className="text-icon">view details</span>
            </div>
            <div className="second-icons">
              <span className="icon-color">
                <FaShoppingCart />
              </span>
              <span className="text-icon">add to cart</span>
            </div>
          </div>
        </div>
        <div className="col-sm-4 card-content">
          <div style={{ overflow: "hidden" }}>
            <Image
              className="like-img"
              src="/images/product-5.jpg"
              width={300}
              height={300}
              priority
              alt="product-5"
            />
          </div>
          <h4>Colourful stylish shirt</h4>
          <div className="prices">
            <span className="first-price">$123.00</span>{" "}
            <span className="second-price">$123.00</span>
          </div>
          <div className="icons-list">
            <div className="first-icons">
              <span className="icon-color">
                <FaEye />
              </span>
              <span className="text-icon">view details</span>
            </div>
            <div className="second-icons">
              <span className="icon-color">
                <FaShoppingCart />
              </span>
              <span className="text-icon">add to cart</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

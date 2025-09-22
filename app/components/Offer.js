"use client";
import Image from "next/image";
export default function Offer() {
  return (
    <>
      <div className="offer-container">
        <div className="offer-card">
          <Image
            src="/images/offer-1.png"
            alt="offer-one"
            width={200}
            height={300}
            className="offer-img"
          />
          <div className="offer-content">
            <p>20% off the all order</p>
            <h2>Spring Collection</h2>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="offer-card">
          <div className="offer-content">
            <p className="offer-text">20% off the all order</p>
            <h2 className="offer-title">Winter Collection</h2>
            <button className="offer-btn">Shop Now</button>
          </div>
          <Image
            src="/images/offer-2.png"
            alt="offer-two"
            width={200}
            height={300}
            className="offer-img"
          />
        </div>
      </div>
    </>
  );
}

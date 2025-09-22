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
          <p>20% off the all order</p>
          <h2>20% off the all order</h2>
          <button>Shop Now</button>
        </div>
        <div>
          <Image
            src="/images/offer-2.png"
            alt="offer-two"
            width={200}
            height={300}
            className="offer-img"
          />
          <p className="offer-text">20% off the all order</p>
          <h2 className="offer-title">20% off the all order</h2>
          <button className="offer-btn">Shop Now</button>
        </div>
      </div>
    </>
  );
}
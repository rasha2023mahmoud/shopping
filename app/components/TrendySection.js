"use client";
//محتاجة كتابة
import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
export default function TrendySection() {
  const [trendy, setTrendy] = useState([]);
  useEffect(() => {
    async function fetchTrendy() {
      const response = await fetch("/Trend.json");
      const data = await response.json();
      setTrendy(data);
    }
    fetchTrendy();
  }, []);

  return (
    <>
      <div className="trendy-container">
        {trendy.map((item, index) => {
          return (
            <div className="trendy-card" key={item.id}>
              <img
                className="trendy-img"
                src={item.src}
                alt={item.title}
                title={item.title}
              />
              <p className="trendy-title">{item.title}</p>
              <span className="salary">{item.salary}</span>
              <span className="main-salary">{item.mainSalary}</span>
              <div className="icons-list">
                <div className="first-icons">
                  <span>
                    <FaEye />
                  </span>
                  <span>view details</span>
                </div>
                <div className="second-icons">
                  <span>
                    <FaShoppingCart />
                  </span>
                  <span>add to cart</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

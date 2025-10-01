"use client";
//محتاجة كتابة
import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
export default function TrendySection({ dataUrl }) {
  const [trendy, setTrendy] = useState([]);
  useEffect(() => {
    async function fetchTrendy() {
      try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        setTrendy(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (dataUrl) {
      fetchTrendy();
    }
  }, [dataUrl]);
  return (
    <>
      <div className="trendy-container">
        {trendy.map((item, index) => {
          return (
            <div className="trendy-card" key={item.id}>
              <div className="upper-content">
                <div className="image">
                  <img
                    className="trendy-img"
                    src={item.src}
                    alt={item.title}
                    title={item.title}
                  />
                </div>
                <div className="salary-data">
                  <p className="trendy-title">{item.title}</p>
                  <span className="salary">{item.salary}</span>
                  <span className="main-salary">{item.mainSalary}</span>
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
          );
        })}
      </div>
    </>
  );
}

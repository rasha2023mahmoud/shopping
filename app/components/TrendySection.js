"use client";
import { useState, useEffect } from "react";
export default function TrendySection() {
  const [trendy, setTrendy] = useState([]);
  useEffect(() => {
    async function fetchTrendy() {
      const response = await fetch("/trendy.json");
      const data = await response.json();
      setTrendy(data);
    }
    fetchTrendy();
  }, []);

  return (
    <>
      {trendy.map((item, index) => {
        return (
          <div key={item.id}>
            <img src={item.src} alt={item.title} title={item.title} />
            <p>{item.title}</p>
            <span>{item.salary}</span>
            <span>{item.mainSalary}</span>
          </div>
        );
      })}
    </>
  );
}

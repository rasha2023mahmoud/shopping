"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Cataloge() {
  const [cataList, setCataList] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setCataList)
      .catch((err) => console.log("Not data found"));
  }, []);

  return (
    <>
      {cataList.map((item) => (
        <div className="cata-box" class key={item.id}>
          <h4 className="title-box">{item.title}</h4>
          <img className="img-box" src={item.src} title={item.title} />
          <p className="data-box">{item.details}</p>
        </div>
      ))}
    </>
  );
}

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
      <div className="main-card">
        {cataList.map((item) => (
          <div key={item.id}>
            <div className="cata-box">
              <h4 className="title-box">{item.title}</h4>
              <div className="inside">
                {" "}
                <img className="img-box" src={item.src} title={item.title} />
              </div>
              <p className="data-box">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

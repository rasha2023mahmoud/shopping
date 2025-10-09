"use client";
import { useState } from "react";

export default function ColorfulInput() {
  const [data, setData] = useState({});

  const handleCheck = (id) => {
    setData((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkSizes = [
    { id: "sizes1", label: "XS" },
    { id: "sizes2", label: "S" },
    { id: "sizes3", label: "M" },
    { id: "sizes4", label: "L" },
    { id: "sizes5", label: "XL" },
  ];

  const checkColors = [
    { id: "color1", label: "Black" },
    { id: "color2", label: "White" },
    { id: "color3", label: "Red" },
    { id: "color4", label: "Blue" },
    { id: "color5", label: "Green" },
  ];

  return (
    <>
      <div>
        <h4>Sizes:</h4>
        {checkSizes.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              checked={!!data[item.id]}
              onChange={() => handleCheck(item.id)}
            />
            <label
              htmlFor={item.id}
              style={{ color: data[item.id] ? "#D19C97" : "#333" }}
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>

      <div>
        <h4>Colors:</h4>
        {checkColors.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              checked={!!data[item.id]}
              onChange={() => handleCheck(item.id)}
            />
            <label
              htmlFor={item.id}
              style={{ color: data[item.id] ? "#D19C97" : "#333" }}
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

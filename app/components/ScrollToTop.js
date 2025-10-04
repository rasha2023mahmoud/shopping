"use client";
import { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

export default function ScrollToTop() {
  const [visible, setVisible] = useState();
  useEffect(() => {
    const toggleVisibility = () => {
      if (scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <BsArrowUpSquareFill />
        </button>
      )}
    </>
  );
}

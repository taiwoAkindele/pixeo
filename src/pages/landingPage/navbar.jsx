import React, { useEffect, useState } from "react";
import ArrowLeft from "../../assets/ArrowLeft.svg";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && window.scrollY < 1400) {
        setScrolling(true);
      } else if (window.scrollY > 1400 || window.scrollY < 600) {
        setScrolling(false);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);
  return (
    <div className="relative z-[1000]">
      <div className="flex items-center justify-between fixed top-0 left-0 right-0 px-[72px] py-[22px]">
        <h1
          className={`text-[20px] ${
            scrolling ? "text-white" : "text-black"
          } font-black`}
        >
          PIXEO
        </h1>
        <ul className="flex items-center gap-[47px]">
          <li
            className={`text-[18px] ${
              scrolling ? "text-white" : "text-black"
            } font-medium`}
          >
            Pricing
          </li>
          <li
            className={`text-[18px] ${
              scrolling ? "text-white" : "text-black"
            } font-medium`}
          >
            Product
          </li>
          <li
            className={`text-[18px] ${
              scrolling ? "text-white" : "text-black"
            } font-medium`}
          >
            Community
          </li>
        </ul>
        <button className="px-[35px] py-[13px] text-white bg-[#FF4970] rounded-[30px] flex items-center justify-center gap-[8px]">
          Get Started
          <img src={ArrowLeft} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

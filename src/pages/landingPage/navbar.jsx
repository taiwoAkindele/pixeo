import React, { useState } from "react";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import Menu from "../../assets/Menu.svg";
import Close from "../../assets/Close.svg";

const linkTexts = ["Pricing", "Product", "Community"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative z-[1000] relative h-[72px]">
      <div className="flex items-center justify-between fixed top-0 left-0 right-0 lg:px-[72px] px-[24px] py-[22px] bg-[#fff]">
        <h1 className="text-[20px] text-black font-black">PIXEO</h1>
        <ul className="hidden lg:flex items-center gap-[47px]">
          {linkTexts?.map((text, i) => (
            <li
              key={i}
              className="text-[18px] cursor-pointer hover:text-primary text-black font-medium"
            >
              {text}
            </li>
          ))}
        </ul>
        <button className="hidden px-[35px] py-[13px] text-white bg-[#FF4970] hover:opacity-20 rounded-[30px] lg:flex items-center justify-center gap-[8px]">
          Get Started
          <img src={ArrowLeft} alt="" />
        </button>
        {!open ? (
          <img
            src={Menu}
            alt=""
            onClick={() => setOpen(true)}
            className="lg:hidden flex cursor-pointer"
          />
        ) : (
          <img
            src={Close}
            alt=""
            onClick={() => setOpen(false)}
            className="lg:hidden flex cursor-pointer"
          />
        )}
      </div>
      {open && (
        <div className="absolute px-[24px] h-screen bg-white flex flex-col mt-[30px] top-[60px] left-0 right-0 items-center">
          <ul className="flex flex-col items-center gap-[25px]">
            {linkTexts?.map((text, i) => (
              <li
                key={i}
                className="text-[18px] cursor-pointer hover:text-primary text-black font-medium"
              >
                {text}
              </li>
            ))}
          </ul>
          <button className="px-[27px] py-[10px] mt-[30px] w-full text-white bg-[#FF4970] hover:opacity-20 rounded-[30px] items-center flex justify-center gap-[8px]">
            Get Started
            <img src={ArrowLeft} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

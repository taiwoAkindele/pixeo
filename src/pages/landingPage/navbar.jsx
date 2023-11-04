import React, { useState } from "react";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import Menu from "../../assets/Menu.svg";
import Close from "../../assets/Close.svg";
import Reveal from "../../components/Reveal";

const linkTexts = ["Features", "Inspiration", "About us"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative z-[1000] relative h-[72px]">
      <Reveal>
        <div className="flex items-center justify-between fixed top-0 left-0 right-0 lg:px-[72px] px-[18px] py-[22px] bg-[#fff]">
          <div className="flex items-center my-auto gap-[10px]">
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
            <h1 className="text-[20px] text-black font-black">PIXEO</h1>
          </div>
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
          <button className="px-[27px] md:hidden py-[10px] text-white bg-[#FF4970] hover:opacity-20 rounded-[30px]">
            Sign up
          </button>
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
            <button className="py-[10px] mt-[25px] w-[100vw] border border-[1px] border-[#F4F4F4] text-[18px] cursor-pointer hover:text-primary font-medium">
              Login
            </button>
          </div>
        )}
      </Reveal>
    </div>
  );
};

export default Navbar;

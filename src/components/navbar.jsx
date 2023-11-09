import React, { useState } from "react";
import ArrowLeft from "../assets/ArrowLeft.svg";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const linkTexts = [
  { link: "/#features", title: "Features" },
  { link: "", title: "Inspiration" },
  { link: "/about", title: "About us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative z-[1000] h-[72px]">
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
            <h1
              onClick={() => navigate("/")}
              className="text-[20px] text-black font-black cursor-pointer"
            >
              PIXEO
            </h1>
          </div>
          <ul className="hidden lg:flex items-center gap-[47px]">
            {linkTexts?.map((text, i) => (
              <li
                key={i}
                className="text-[18px] cursor-pointer hover:text-primary text-black font-medium"
              >
                <a href={text.link}>{text.title}</a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/signup")}
            className="hidden px-[35px] py-[13px] text-white bg-[#FF4970] hover:opacity-20 rounded-[30px] lg:flex items-center justify-center gap-[8px]"
          >
            Get Started
            <img src={ArrowLeft} alt="" />
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-[27px] md:hidden py-[10px] text-white bg-[#FF4970] hover:opacity-20 rounded-[30px]"
          >
            Sign up
          </button>
        </div>
        <div className="fixed z-[1000] top-[60px] left-0 right-0 shadow-[#000]">
          {open && (
            <div className="bg-[rgba(0,0,0,0.7)] inset-0 h-screen">
              <div className="bg-white px-[24px] py-[40px] border-b border-b-[#fff] flex flex-col mt-[30px] items-center">
                <ul className="flex flex-col items-center gap-[25px]">
                  {linkTexts?.map((text, i) => (
                    <li
                      key={i}
                      className="text-[18px] cursor-pointer hover:text-primary text-black font-medium"
                    >
                      {text.link?.includes("#") ? (
                        <HashLink to={text.link} onClick={() => setOpen(false)}>
                          {text.title}
                        </HashLink>
                      ) : (
                        <a href={text.link} onClick={() => setOpen(false)}>
                          {text.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/login")}
                  className="py-[10px] mt-[25px] w-[100vw] border border-[1px] border-[#F4F4F4] text-[18px] cursor-pointer hover:text-primary font-medium"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
};

export default Navbar;

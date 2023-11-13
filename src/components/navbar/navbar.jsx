import React, { useState } from "react";
import Menu from "../../assets/Menu.svg";
import Close from "../../assets/Close.svg";
import { useNavigate } from "react-router-dom";
import Search from "../input/search";
import profileImg from "../../assets/profileImage.svg";

const linkTexts = [
  { link: "/inspiration", title: "Inspiration" },
  { link: "/about", title: "About" },
];

const AuthNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative z-[1000] h-[72px]">
      <div className="flex items-center md:gap-[49px] justify-between fixed top-0 left-0 right-0 md:px-[72px] px-[18px] py-[22px] bg-[#fff]">
        <div className="flex items-center my-auto gap-[10px]">
          {!open ? (
            <img
              src={Menu}
              alt=""
              onClick={() => setOpen(true)}
              className="md:hidden flex cursor-pointer"
            />
          ) : (
            <img
              src={Close}
              alt=""
              onClick={() => setOpen(false)}
              className="md:hidden flex cursor-pointer"
            />
          )}
          <h1
            onClick={() => navigate("/")}
            className="text-[20px] text-black font-black cursor-pointer"
          >
            PIXEO
          </h1>
        </div>
        <div className="flex items-center">
          <Search
            className="ml-[20px] bg-inherit"
            containerClass="mr-[38px] hidden md:flex items-center lg:w-[500px] w-[auto]"
          />
          <ul className="hidden md:flex items-center gap-[48px]">
            {linkTexts?.map((text, i) => (
              <li
                key={i}
                className="text-[18px] cursor-pointer hover:text-primary text-black font-medium"
              >
                <a href={text.link}>{text.title}</a>
              </li>
            ))}
          </ul>
          <img
            src={profileImg}
            alt=""
            className="ml-[29px] w-[33px] h-[33px] md:w-[53px] md:h-[53px] object-contain"
          />
        </div>
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
                    <a href={text.link} onClick={() => setOpen(false)}>
                      {text.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthNavbar;

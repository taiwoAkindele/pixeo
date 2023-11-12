import React from "react";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import Reveal from "./Reveal";

const socialNetwork = [facebook, twitter, instagram, linkedin];

const Footer = ({ className }) => {
  return (
    <div className={`pb-[36px] ${className}`}>
      <Reveal>
        <div className="flex items-center justify-between border-b-[1px] border-b-[text-black/0.20]">
          <span className="text-[18px] lg:text-[36px] font-black">PIXEO</span>
          <div className="flex items-center gap-[16px]">
            {socialNetwork?.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt=""
                className="w-[23px] h-[23px] lg:w-[45px] lg:h-[45px]"
              />
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex items-center justify-between pt-[14px]">
          <span className="text-[8px] lg:text-[16px] font-normal">
            ©2023 PIXEO Ltd. All rights reserved
          </span>
          <span className="text-[8px] lg:text-[16px] font-normal">
            Privacy Policy
          </span>
        </div>
      </Reveal>
    </div>
  );
};

export default Footer;

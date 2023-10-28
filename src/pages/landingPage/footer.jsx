import React from "react";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";

const socialNetwork = [facebook, twitter, instagram, linkedin];

const Footer = () => {
  return (
    <div className="px-[72px] pb-[19px]">
      <div className="flex items-center justify-between border-b-[1px] border-b-[text-black/0.20]">
        <span className="text-[36px] font-black">PIXEO</span>
        <div className="flex items-center gap-[16px]">
          {socialNetwork?.map((logo, i) => (
            <img key={i} src={logo} alt="" className="" />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-[14px] pb-[86px]">
        <span className="text-[16px] font-normal">
          ©2023 PIXEO Ltd. All rights reserved
        </span>
        <span className="text-[16px] font-normal">Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;

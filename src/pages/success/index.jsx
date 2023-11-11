import React from "react";
import CheckMark from "../../assets/check-mark.svg";
import { useNavigate } from "react-router-dom";

const Success = ({ title, subtext, isBtn }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] flex gap-[69px]">
      <div className="hidden md:flex bg-signin w-[628px] bg-no-repeat bg-cover"></div>
      <div className="flex flex-col w-full gap-[12px] items-center justify-center mx-auto">
        <img src={CheckMark} alt="" className="pt-[6px]" />
        <h6 className="text-[30px] font-bold text-[#333] leading-none">
          {title || "Password Updated"}
        </h6>
        <span className="text-[20px] text-[#000]">
          {subtext || "Your password has been updated"}
        </span>
        {isBtn ? (
          <button
            onClick={() => navigate("/login")}
            className="px-[35px] w-[541px] mt-[15px] text-[12px] md:text-[16px] font-bold py-[13px] text-white bg-[#FF4970] hover:opacity-20 rounded-[16px] md:rounded-[27px]"
          >
            Sign in
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Success;

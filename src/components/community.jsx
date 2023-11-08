import React from "react";

const Community = () => {
  return (
    <div className="py-[63px] md:py-[112px] flex items-center justify-center">
      <div className="bg-[#FFF5F7] w-[906px] rounded-[6px] px-[39px] pt-[42px] pb-[40px] flex flex-col items-center justify-center mx-[24px] gap-[10px]">
        <h5 className="lg:text-[44px] text-[24px] font-bold text-center">
          Join the Community
        </h5>
        <p className="lg:text-[16px] w-[248px] lg:w-[513px] text-[10px] font-medium text-center leading-normal">
          Embark on a Creative Journey, Connect with Like-Minded Designers,
          Share Your Vision, and Collaborate to Redefine Design Excellence
        </p>
        <button className="hidden md:flex px-[35px] py-[13px] mt-[12px] text-white bg-[#FF4970] hover:opacity-20 rounded-[30px]">
          Sign up
        </button>
        <button className="flex md:hidden px-[35px] py-[13px] mt-[12px] text-white bg-[#FF4970] hover:opacity-20 rounded-[30px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Community;

import React from "react";
import Explore from "../../assets/explore.svg";

const Hero = () => {
  return (
    <div className="py-[124px] bg-capa bg-no-repeat bg-cover min-h-screen">
      <div className="flex flex-col gap-[24px] items-center justify-center mx-auto">
        <h1 className="max-w-[789px] text-[80px] font-bold text-center">
          Unleash Your Creative Potential
        </h1>
        <p className="max-w-[453px] text-[24px] font-medium text-center">
          Explore a Multitude of Artistic Disciplines and Ignite Your
          Imagination
        </p>
        <button className="px-[35px] text-[16px] font-bold py-[13px] mt-[24px] border-[1px] border-[#FF4970] text-[#FF4970] rounded-[30px] flex items-center justify-center gap-[8px]">
          Explore
          <img src={Explore} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Community = () => {
  return (
    <div className="bg-[#FFF5F7] w-[906px] w-full mx-auto my-[107px] flex items-center justify-center">
      <div className="w-[531px] gap-[12px] pt-[65px] pb-[76px] flex flex-col items-center justify-center">
        <h5 className="text-[44px] font-bold text-center">
          Join the Community
        </h5>
        <p className="text-[16px] font-medium text-center">
          Embark on a Creative Journey, Connect with Like-Minded Designers,
          Share Your Vision, and Collaborate to Redefine Design Excellence
        </p>
        <button className="px-[35px] py-[13px] mt-[12px] text-white bg-[#FF4970] hover:opacity-20 rounded-[30px]">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Community;

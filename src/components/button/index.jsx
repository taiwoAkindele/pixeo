import React from "react";

export const Loader = () => {
  return (
    <div className="animate-spin h-5 w-5 mr-3 border border-[4px] border-t-[4px] border-t-[#FF4970] opacity-60 rounded-[50%]"></div>
  );
};

const Button = ({ loading, children, ...props }) => {
  return (
    <button
      {...props}
      type="submit"
      className="px-[35px] flex flex-row items-center justify-center text-[12px] md:text-[16px] font-bold py-[13px] text-white bg-[#FF4970] hover:opacity-20 rounded-[16px] md:rounded-[27px]"
    >
      {loading && <Loader />}
      {children}
    </button>
  );
};

export default Button;

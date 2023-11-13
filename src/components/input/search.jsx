import React from "react";
import SearchIcon from "../../assets/search-icon.svg";

const Search = ({ className, containerClass, ...props }) => {
  return (
    <div
      className={`md:h-[51px] h-[40px] w-full rounded-[40px] bg-[#F7F7F7] ${containerClass}`}
    >
      <img src={SearchIcon} alt="" className={className} />
      <input
        {...props}
        type="text"
        placeholder="Search..."
        className={`focus-none outline-none w-[100%] mx-[14px] ${className}`}
      />
    </div>
  );
};

export default Search;

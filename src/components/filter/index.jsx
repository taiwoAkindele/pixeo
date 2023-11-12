import React from "react";
import FilterIcon from "../../assets/filter.svg";

const FilterButton = ({ className }) => {
  return (
    <div
      className={`md:w-[149px] md:h-[48px] w-[102px] h-[39px] flex items-center justify-center gap-[13px] cursor-pointer border border-[1px] border-[#C3C3C3] rounded-[8px] ${className}`}
    >
      <img src={FilterIcon} alt="" className="" />
      <span className="text-[#000] text-[13px] md:text-[20px] font-medium">
        Filter
      </span>
    </div>
  );
};

export default FilterButton;

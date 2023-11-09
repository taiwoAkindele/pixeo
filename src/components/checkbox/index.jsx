import React from "react";

const Checkbox = ({
  label = "",
  id,
  value,
  checked,
  onChange,
  className,
  labelClassName,
  ...props
}) => {
  return (
    <div className={className}>
      <div className="flex gap-[8px] items-center ">
        <input
          type="checkbox"
          id={id}
          name={id}
          value={value}
          className="appearance-none absolute h-5 w-5 cursor-pointer"
          onChange={onChange}
          {...props}
        />
        <div
          className={`${
            checked ? "bg-[#fff]" : "border"
          }  rounded-[4px] border-[#D1D5DB] w-[14px] h-[14px] md:w-[25px] md:h-[25px] flex flex-shrink-0 justify-center items-center mr-2`}
        >
          {checked && (
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_359_334)">
                <path
                  d="M19.2513 3.38284H5.06645C3.94179 3.38284 3.04004 4.29473 3.04004 5.40925V19.5941C3.04004 20.7086 3.94179 21.6205 5.06645 21.6205H19.2513C20.376 21.6205 21.2777 20.7086 21.2777 19.5941V5.40925C21.2777 4.29473 20.376 3.38284 19.2513 3.38284ZM10.1325 17.5677L5.06645 12.5017L6.49506 11.0731L10.1325 14.7003L17.8227 7.01011L19.2513 8.44886L10.1325 17.5677Z"
                  fill="#FF4970"
                />
              </g>
              <defs>
                <clipPath id="clip0_359_334">
                  <rect
                    width="24.3169"
                    height="24.3169"
                    fill="white"
                    transform="translate(0 0.343231)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
        <label
          htmlFor={id}
          className={labelClassName || "select-none mb-0"}
          onClick={onChange}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;

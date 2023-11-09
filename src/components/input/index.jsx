import React from "react";
import { ErrorMessage } from "formik";
import hidePassword from "../../assets/password-hide.svg";

const TextField = ({
  placeholder,
  value,
  onChange,
  errors,
  type,
  className,
  label,
  togglePassword,
  inputType,
  name,
}) => {
  return (
    <div className="flex flex-col gap-[4px] w-[100%]">
      <label
        htmlFor=""
        className="text-[9px] md:text-[16px] font-normal text-[#666]"
      >
        {label}
      </label>
      <div className="h-[56px] w-full border border-[1px] border-[#666666] rounded-[12px] flex items-center p-[15px]">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`outline-none focus-none w-full ${className}`}
        />
        {inputType === "password" && (
          <div onClick={togglePassword} className="cursor-pointer">
            <img src={hidePassword} alt="" className="" />
          </div>
        )}
      </div>
      {/* {errors && <span className="text-[#EF4444] text-[10px]">{errors}</span>} */}
      <ErrorMessage name={name}>
        {(errorMessage) => (
          <span className="text-[#EF4444] text-[12px]">{errorMessage}</span>
        )}
      </ErrorMessage>
    </div>
  );
};

export default TextField;

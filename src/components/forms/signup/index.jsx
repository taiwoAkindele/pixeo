import React, { useState } from "react";
import { Formik, Form } from "formik";
import BackIcon from "../../../assets/backicon.svg";
import TextField from "../../input";
import Checkbox from "../../checkbox";
import { ValidationSchema } from "./validationSchema";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white pt-[34px] pb-[78px] pr-[24px] pl-[24px] md:pr-[58px] md:pl-[0px]">
        <div
          onClick={() => navigate(-1)}
          className="flex items-center cursor-pointer"
        >
          <img src={BackIcon} alt="" />
          <span className="text-[18px] text-[#0A0A0A] font-medium">Back</span>
        </div>
        <h6 className="text-[#333] text-[18px] md:text-[30px] font-bold pt-[44px]">
          Create an account
        </h6>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={ValidationSchema}
          onSubmit={async (values, action) => {
            console.log(values);
          }}
        >
          {({ handleChange, errors }) => (
            <Form>
              <div className="flex flex-col gap-[18px] pt-[24px]">
                <div className="flex items-center gap-[16px]">
                  <TextField
                    name="firstName"
                    label="First name"
                    placeholder="James"
                    // className="flex-1"
                    onChange={handleChange}
                    errors={errors}
                  />
                  <TextField
                    name="lastName"
                    label="Last name"
                    placeholder="Clark"
                    // className="flex-1"
                    onChange={handleChange}
                    errors={errors}
                  />
                </div>
                <div className="">
                  <TextField
                    name="email"
                    onChange={handleChange}
                    type="email"
                    label="Email"
                    placeholder="jamesclark@gmail.com"
                    errors={errors}
                  />
                </div>
                <div className="">
                  <TextField
                    name="password"
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    inputType="password"
                    label="Password"
                    placeholder="8+ characters"
                    togglePassword={() => setShowPassword(!showPassword)}
                    errors={errors}
                  />
                </div>
                <div className="">
                  <TextField
                    name="confirmPassword"
                    onChange={handleChange}
                    type={showConfirmPassword ? "text" : "password"}
                    inputType="password"
                    togglePassword={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    label="Confirm Password"
                    placeholder="8+ characters"
                    errors={errors}
                  />
                </div>
                <div className="flex items-center pb-[27px]">
                  <Checkbox
                    value={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                    checked={agreeTerms === true}
                  />
                  <span className="text-[9px] font-normal md:text-[16px] text-[#333]">
                    By creating an account, I agree to our{" "}
                    <span className="text-[#111] hover:text-primary cursor-pointer underline">
                      Terms of use
                    </span>{" "}
                    and{" "}
                    <span className="text-[#111] hover:text-primary cursor-pointer underline">
                      Privacy Policy
                    </span>
                  </span>
                </div>
                <button
                  disabled={!agreeTerms}
                  type="submit"
                  className="px-[35px] text-[12px] md:text-[16px] font-bold py-[13px] text-white bg-[#FF4970] hover:opacity-20 rounded-[16px] md:rounded-[27px]"
                >
                  Sign up
                </button>
                <span className="text-[10px] md:text-[16px] text-[#333] pt-[12px] text-center">
                  Already have an account?{" "}
                  <span
                    onClick={() => navigate("/login")}
                    className="text-[#111] hover:text-primary cursor-pointer underline"
                  >
                    Log in
                  </span>
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;

import React, { useState } from "react";
import { Formik, Form } from "formik";
import BackIcon from "../../../assets/backicon.svg";
import TextField from "../../input";
import { ValidationSchema } from "./validationSchema";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="h-[100%] flex flex-col pr-[26px] pl-[24px] md:pr-[58px]">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer pt-[34px]"
      >
        <img src={BackIcon} alt="" />
        <span className="text-[18px] text-[#0A0A0A] font-medium">Back</span>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, action) => {
          console.log(values);
        }}
      >
        {({ handleChange, errors }) => (
          <Form>
            <div className="w-[100%] h-[calc(100vh-34px)] flex flex-col justify-center pt-[24px]">
              <h6 className="text-[#333] text-[18px] md:text-[30px] font-bold">
                Sign In
              </h6>
              <div className="pt-[18px]">
                <TextField
                  name="email"
                  onChange={handleChange}
                  type="email"
                  label="Email Address"
                  placeholder="jamesclark@gmail.com"
                  errors={errors}
                />
              </div>
              <div className="pt-[18px]">
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
              <span
                onClick={() => navigate("/forgot-password")}
                className="ml-auto cursor-pointer text-[10px] hover:text-primary md:text-[16px] pb-[27px] text-[#000] underline"
              >
                Forgot Password?
              </span>
              <button
                type="submit"
                className="px-[35px] text-[12px] md:text-[16px] font-bold py-[13px] text-white bg-[#FF4970] hover:opacity-20 rounded-[16px] md:rounded-[27px]"
              >
                Log in
              </button>
              <span className="text-[10px] md:text-[16px] text-[#333] pt-[12px] text-center">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-[#111] hover:text-primary cursor-pointer underline"
                >
                  Sign up
                </span>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

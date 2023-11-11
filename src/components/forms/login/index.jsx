import React, { useState } from "react";
import { Formik, Form } from "formik";
import BackIcon from "../../../assets/backicon.svg";
import TextField from "../../input";
import { ValidationSchema } from "./validationSchema";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/user/actions";
import Button from "../../button";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);

  return (
    <div className="h-[100%] flex flex-col pr-[26px] pl-[24px] md:pr-[129px]">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer pt-[34px]"
      >
        <img src={BackIcon} alt="" />
        <span className="text-[18px] text-[#0A0A0A] hover:text-primary font-medium">
          Back
        </span>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, action) => {
          const res = await dispatch(loginUser(values));
          if (res) {
            navigate("/");
          }
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
              <Button type="submit" loading={isLoading}>
                Log in
              </Button>
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

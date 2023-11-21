import React from "react";

import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import BackIcon from "../../../assets/backicon.svg";
import { sendResetPasswordEmail } from "../../../redux/user/actions";
import TextField from "../../input";
import Button from "../../button";

import { ValidationSchema } from "./validationSchema";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);

  return (
    <div className="h-[100%] md:w-[586px] flex flex-col pr-[26px] pl-[24px] md:pr-[58px]">
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
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, action) => {
          const res = await dispatch(sendResetPasswordEmail(values));
          if (res) {
            navigate("/email-verify");
          }
        }}
      >
        {({ handleChange, errors }) => (
          <Form>
            <div className="w-[100%] h-[calc(100vh-34px)] flex flex-col justify-center pt-[24px]">
              <h6 className="text-[#333] text-[18px] md:text-[30px] font-bold">
                Forgot password?
              </h6>
              <p className="text-[14px] md:text-[20px] text-[#000] pt-[32px] md:pt-[36px]">
                Enter your email address and we will send you a link to reset
                your password.
              </p>
              <div className="md:pt-[25px] pt-[16px] pb-[24px] md:pb-[27px]">
                <TextField
                  name="email"
                  onChange={handleChange}
                  type="email"
                  label="Email Address"
                  placeholder="jamesclark@gmail.com"
                  errors={errors}
                />
              </div>
              <Button
                loading={isLoading}
                type="submit"
                className="px-[35px] text-[12px] md:text-[16px] font-bold py-[13px] text-white bg-[#FF4970] hover:opacity-20 rounded-[16px] md:rounded-[27px]"
              >
                Reset Password
              </Button>
              <span className="text-[14px] md:text-[16px] text-[#333] pt-[12px] text-center">
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

export default ForgotPasswordForm;

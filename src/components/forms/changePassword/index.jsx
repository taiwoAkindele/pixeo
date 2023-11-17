import React, { useState } from "react";
import { Formik, Form } from "formik";
import BackIcon from "../../../assets/backicon.svg";
import TextField from "../../input";
import { ValidationSchema } from "./validationSchema";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../button";
import { resetPassword } from "../../../redux/user/actions";

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const query = window.location.search;
  const token = query.split("=");
  const dispatch = useDispatch();
  const otp = token[2];
  const email = token[1]?.split("&&")[0];
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
          email: email,
          token: otp,
          password: "",
          confirmPassword: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values, action) => {
          const res = await dispatch(resetPassword(values));
          if (res) {
            navigate("/success");
          }
        }}
      >
        {({ handleChange, errors }) => (
          <Form className="h-[calc(100vh-34px)] flex flex-col justify-center pt-[24px]">
            <h6 className="text-[#333] text-[18px] md:text-[30px] font-bold">
              Enter New Password
            </h6>
            <div className="flex flex-col gap-[18px] pt-[24px]">
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
              <Button
                loading={isLoading}
                type="submit"
                className="px-[35px] text-[12px] md:text-[16px] font-bold py-[13px] text-white bg-[#FF4970] hover:opacity-20 rounded-[16px] md:rounded-[27px]"
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePasswordForm;

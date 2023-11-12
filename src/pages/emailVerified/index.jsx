import React, { useEffect, useState } from "react";
import CheckMark from "../../assets/check-mark.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyEmailToken } from "../../redux/user/actions";
import Button from "../../components/button";

const EmailVerified = () => {
  const [verified, setVerified] = useState(false);
  const [resendEmail, setResendEmail] = useState(false);
  const navigate = useNavigate();
  const query = window.location.search;
  const token = query.split("=");
  const dispatch = useDispatch();
  const otp = token[2];
  const email = token[1]?.split("&&")[0];

  const verifyEmail = async () => {
    const payload = { otp, email };
    const res = await dispatch(verifyEmailToken(payload));
    if (res) {
      setVerified(true);
    } else {
      setResendEmail(true);
    }
  };

  const resendEmailToken = async () => {};

  useEffect(() => {
    if (otp && email) {
      verifyEmail();
    }
  }, [otp, email]);

  return (
    <div className="min-h-[100vh] flex gap-[69px]">
      <div className="hidden md:flex bg-signin w-[628px] bg-no-repeat bg-cover"></div>
      <div className="flex flex-col w-full gap-[12px] items-center justify-center mx-auto">
        {verified ? (
          <>
            <img src={CheckMark} alt="" className="pt-[6px]" />
            <h6 className="text-[30px] font-bold text-[#333] leading-none">
              Congratulations!
            </h6>
            <span className="text-[20px] text-[#000]">
              Your email is verified
            </span>
            <button
              onClick={() => navigate("/login")}
              className="px-[35px] w-[541px] mt-[15px] text-[12px] md:text-[16px] font-bold py-[13px] text-white bg-[#FF4970] hover:opacity-20 rounded-[16px] md:rounded-[27px]"
            >
              Sign in
            </button>
          </>
        ) : (
          <div className="px-[24px]">
            <h6 className="text-[30px] font-bold text-[#333] leading-none">
              Email Verification
            </h6>
            <span className="text-[20px] text-[#000]">
              Check your email for the verification link
            </span>
            {resendEmail && (
              <Button loading={isLoading} onClick={resendEmailToken}>
                Resend Email Verification
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;

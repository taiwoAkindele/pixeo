import React from "react";
import { ForgotPasswordForm } from "../../components";

const ForgotPassword = () => {
  return (
    <div className="h-[100%] flex gap-[69px]">
      <div className="hidden md:flex bg-signin w-[628px] bg-no-repeat bg-cover"></div>
      <div className="flex-1">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassword;

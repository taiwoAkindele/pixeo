import React from "react";
import { ChangePasswordForm } from "../../components";

const ChangePassword = () => {
  return (
    <div className="h-screen md:flex gap-[69px]">
      <div className="hidden md:flex bg-signin w-[628px] bg-no-repeat bg-cover"></div>
      <div className="">
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePassword;

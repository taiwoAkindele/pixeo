import React from "react";
import { SignupForm } from "../../components";

const Signup = () => {
  return (
    <div className="h-full md:flex gap-[69px]">
      <div className="hidden md:flex bg-signup w-[628px] bg-no-repeat bg-cover"></div>
      <div className="">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;

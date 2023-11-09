import React from "react";
import { LoginForm } from "../../components";

const Login = () => {
  return (
    <div className="h-[100%] flex gap-[69px]">
      <div className="hidden md:flex bg-signin w-[628px] bg-no-repeat bg-cover"></div>
      <div className="flex-1">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

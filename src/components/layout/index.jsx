import React from "react";
import Community from "../community";
import Footer from "../footer";
import { LandingNavbar } from "../navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <LandingNavbar />
      {children}
      <Community />
      <Footer className="lg:px-[72px] px-[24px]" />
    </div>
  );
};

export default Layout;

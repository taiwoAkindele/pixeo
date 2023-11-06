import React from "react";
import Navbar from "../navbar";
import Community from "../community";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Community />
      <Footer />
    </div>
  );
};

export default Layout;

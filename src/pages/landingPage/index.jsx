import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Pixeo from "./pixeo";
// import Explore from "./explore";
import Features from "./faetures";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pixeo />
      {/* <Explore /> */}
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;

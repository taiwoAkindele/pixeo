import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Pixeo from "./pixeo";
// import Explore from "./explore";
import Features from "./faetures";
import Footer from "./footer";
import Community from "./community";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pixeo />
      {/* <Explore /> */}
      <Features />
      <Community />
      <Footer />
    </div>
  );
};

export default LandingPage;

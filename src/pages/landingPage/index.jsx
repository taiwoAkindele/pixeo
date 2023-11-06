import React from "react";
import Hero from "./hero";
import Pixeo from "./pixeo";
// import Explore from "./explore";
import Features from "./faetures";
import Layout from "../../components/layout";

const LandingPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Pixeo />
        {/* <Explore /> */}
        <Features />
      </Layout>
    </div>
  );
};

export default LandingPage;

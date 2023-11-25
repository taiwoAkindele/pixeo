import React from "react";
import Hero from "./hero";
import Explore from "./explore";
import Features from "./faetures";
import Layout from "../../components/layout";
import Pixeo from "./pixeo";

const LandingPage = () => {
  return (
    <Layout>
      <Hero />
      <Pixeo />
      {/* <Explore /> */}
      <Features />
    </Layout>
  );
};

export default LandingPage;

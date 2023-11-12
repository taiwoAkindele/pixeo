import React from "react";
import Hero from "./hero";
import Explore from "./explore";
import Features from "./faetures";
import Layout from "../../components/layout";

const LandingPage = () => {
  return (
    <Layout>
      <Hero />
      <Explore />
      <Features />
    </Layout>
  );
};

export default LandingPage;

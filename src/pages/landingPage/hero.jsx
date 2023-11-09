import React from "react";
import Explore from "../../assets/explore.svg";
import Reveal from "../../components/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll({ offset: ["start end", "end start"] });

  const y = useTransform(scrollY, [0, 300], [0, -100]);
  return (
    <>
      <div className="bg-capa-mobile lg:bg-capa bg-no-repeat bg-cover flex items-center justify-center h-[calc(100vh-72px)]">
        <div className="flex flex-col lg:gap-[24px] gap-[18px] items-center justify-center mx-auto">
          <Reveal>
            <h1 className="lg:max-w-[700px] max-w-[379px] text-[40.852px] leading-[46.827px] md:leading-none lg:text-[70px] font-bold text-center">
              Unleash Your Creative Potential
            </h1>
          </Reveal>
          <Reveal>
            <p className="lg:max-w-[453px] max-w-[300px] text-[15.454px] lg:text-[18px] text-[#5B5B5B] font-medium text-center">
              Explore a Multitude of Artistic Disciplines and Ignite Your
              Imagination
            </p>
          </Reveal>
          <Reveal>
            <button className="px-[27px] lg:px-[35px] hover:bg-[#ff49701a] text-[14px] lg:text-[16px] font-bold py-[10px] lg:py-[13px] mt-[20px] lg:mt-[24px] border-[1px] border-[#FF4970] text-[#FF4970] rounded-[30px] flex items-center justify-center gap-[6px] lg:gap-[8px]">
              Explore
              <img src={Explore} alt="" />
            </button>
          </Reveal>
        </div>
      </div>
      <div className="bg-[#F5F5F5]">
        <motion.div
          style={{ y: y }}
          className="h-screen bg-[#000] flex flex-col items-center justify-center w-full"
        >
          <span className="text-white">Introducing</span>
          <h5 className="text-[120px] font-bold bg-pixeo bg-clip-text text-transparent">
            PIXEO
          </h5>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;

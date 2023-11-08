import React, { useRef } from "react";
import Explore from "./explore";
import { motion, useScroll, useTransform } from "framer-motion";

const Pixeo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative">
      {/* <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, background: "#000" },
        }}
        initial="visible"
        whileInView="hidden"
        transition={{
          // type: "spring",
          delay: 0.5,
          ease: "easeOut",
          duration: 0.25,
        }}
        viewport={{ once: true }}
        className="h-screen  py-[295px] mx-auto z-[1000] absolute top-0 left-0 right-0"
      >
        <div className="flex flex-col items-center justify-center ">
          <span className="text-white">Introducing</span>
          <h5 className="text-[120px] font-bold bg-pixeo bg-clip-text text-transparent">
            PIXEO
          </h5>
        </div>
      </motion.div> */}
      <div
      // variants={{
      //   hidden: { opacity: 0, y: -100 },
      //   visible: { opacity: 1, y: 0 },
      // }}
      // initial="visible"
      // animate="hidden"
      // transition={{ ease: "easeIn", duration: 4 }}
      // className="hidden md:flex"
      >
        <motion.div
          style={{ y: y }}
          variants={{
            hidden: {
              // background: "transparent",
              background: "#000",
              opacity: "0.6",
              y: 30,
            },
            visible: { opacity: 1, background: "#000" },
          }}
          initial="visible"
          whileInView="hidden"
          transition={{
            // type: "spring",
            delay: 1,
            ease: "easeIn",
            duration: 5,
          }}
          className="h-screen bg-[#000] flex flex-col items-center justify-center absolute w-full"
        >
          <span className="text-white">Introducing</span>
          <h5 className="text-[120px] font-bold bg-pixeo bg-clip-text text-transparent">
            PIXEO
          </h5>
        </motion.div>
      </div>
      <Explore />
    </div>
  );
};

export default Pixeo;

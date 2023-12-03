import React, { useRef } from "react";
import Explore from "./explore";
import { motion, useScroll, useTransform } from "framer-motion";

const Pixeo = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="visible"
        animate="hidden"
        transition={{
          type: "spring",
          delay: 1,
          ease: "easeOut",
          duration: 6,
        }}
      >
        <motion.div
          style={{ y: y }}
          variants={{
            hidden: {
              background: "#000",
              opacity: "0.6",
              y1: 30,
            },
            visible: { opacity: 1, background: "#000" },
          }}
          initial="visible"
          whileInView="hidden"
          transition={{
            delay: 1,
            ease: "easeIn",
            duration: 5,
          }}
          className="h-screen bg-[#000] flex flex-col items-center justify-center absolute w-full"
        >
          <span className="text-white">Introducing</span>
          <h5 className="md:text-[120px] text-[60px] font-bold bg-pixeo bg-clip-text text-transparent">
            PIXEO
          </h5>
        </motion.div>
      </motion.div>

      <Explore />
    </div>
  );
};
export default Pixeo;

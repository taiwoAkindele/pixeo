import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const smallScreen = window.innerWidth <= 475;

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={
          smallScreen
            ? {
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }
            : {}
        }
        initial="hidden"
        animate={mainControls}
        transition={smallScreen ? { duration: 0.5, delay: 0.25 } : {}}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;

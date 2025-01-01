import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion, useAnimation, useInView } from "motion/react";

const Layout = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView){
      mainControls.start("visible")
    }
  })
  return (
    <div ref={ref}>
      <Navbar />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5, delay: 0.25}}
        className="bg-base-200"
      >
        {children}
      </motion.div>

      <Footer />
    </div>
  );
};

export default Layout;

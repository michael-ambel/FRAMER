import React from "react";
import { motion } from "framer-motion";

const svgVariant = {
  initial: {
    rotate: -180,
  },
  animate: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};
const pathVariant = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.7}
      >
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariant}
          initial="initial"
          animate="animate"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariant}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariant}
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        animate={{ y: -10 }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;

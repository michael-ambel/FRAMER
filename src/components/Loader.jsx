import { motion, useCycle } from "framer-motion";
const loaderVariants = {
  animationOne: {
    y: [0, -50],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
        ease: [0.26, 0.66, 0.7, 0.98],
      },
    },
  },
  animationTwo: {
    x: [-20, 20],
    y: [0, -50],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
        ease: [0.07, 0.45, 0.32, 0.96],
      },
    },
  },
};
const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Change Animation</div>
    </>
  );
};

export default Loader;

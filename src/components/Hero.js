import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../About.css";
import ResumeDoc from "../assets/Marks-CV (1).pdf";

const Hero = () => {
  const largeScreenVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  const largeScreenVariants1 = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflowX = "hidden"; // Prevents horizontal scroll during animation
    } else {
      document.body.style.overflowX = ""; // Revert after animation
    }

    return () => {
      document.body.style.overflowX = ""; // Cleanup on unmount
    };
  }, [isAnimating]);

  return (
    <section className="w-full min-h-screen pb-5 bg-gradient-to-tr from-blue-500 to-purple-600 will-change-transform relative z-1 shadow-[0px_2px_4px_0px_rgba(255,0,0,0.3)]">
      <div className="container mx-auto md:flex items-center lg:h-screen">
        <motion.img
          variants={largeScreenVariants}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            bounce: 0.099,
          }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          className="w-full will-change-transform md:w-1/2"
          src="/images/itsmebutransparent.png"
          alt="Picture of Mark"
          loading="lazy"
        />

        <motion.div
          variants={largeScreenVariants1}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            bounce: 0.099,
            staggerChildren: 0.099,
          }}
          className="p-3 will-change-transform"
        >
          <motion.h1
            variants={largeScreenVariants1}
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
            className="text-5xl font-semibold will-change-transform"
          >
            Mark Christan Parro
          </motion.h1>
          <motion.p
            variants={largeScreenVariants1}
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
            className="text-xl will-change-transform relative custom-line"
          >
            Web Developer UI/UX
          </motion.p>
          <motion.button
            variants={largeScreenVariants1}
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-md py-3 px-5 mt-2 shadow-[0px_6px_12px_0px_rgba(128,0,128,0.6)] bg-gradient-to-l from-purple-400 via-pink-500 to-red-500 will-change-transform"
          >
            <a
              href={ResumeDoc}
              download="Mark's Resume"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume{" "}
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

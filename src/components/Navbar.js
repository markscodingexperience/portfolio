import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import "../Navbar.css";

const Navbar = () => {
  const [button, toggleButton] = useCycle(false, true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    toggleButton();
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <div className="sticky top-0 inset-x-0 p-5 h-16 z-50 bg-slate-50">
      <div className="flex mx-auto h-full items-center justify-between md:justify-center">
        <div className="text-lg p-2">Mark Parro</div>
        <div className="w-px mx-2 border-1 h-full bg-gray-800 hidden md:block"></div>
        <div className="hidden relative md:flex">
          {/* links in the navbar*/}
          <ul className="flex flex-row">
            <li className="text-lg p-2">
              <a href="#about">About</a>
            </li>
            <li className="text-lg p-2">
              <a href="#skills">Skills</a>
            </li>
            <li className="text-lg p-2">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-lg p-2">
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </div>
        <div className="relative z-10 md:hidden">
          <motion.button
            animate={button ? "open" : "closed"}
            className="flex flex-col space-y-1 "
            onClick={() => toggleMenu()}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-px bg-gray-800 block"
            ></motion.span>
            <motion.span
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              className="w-5 h-px bg-gray-800 block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-5 h-px bg-gray-800 block"
            ></motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {button && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.099,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.099,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "100%",
                  transition: {
                    type: "spring",
                    bounce: 0.099,
                    when: "afterChildren",
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-gradient-to-tr from-blue-500 via-blue-700 to-indigo-900 space-y-10 p-5 mx-auto flex flex-col justify-center"
            >
              <motion.ul
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.099,
                      staggerChildren: 0.2,
                    },
                  },
                  closed: {
                    y: 25,
                    opacity: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.099,
                      staggerChildren: 0.2,
                      when: "afterChildren",
                    },
                  },
                }}
                className="space-y-5"
              >
                <motion.li
                  variants={{
                    open: {
                      y: "0%",
                      opacity: 1,
                      transition: { type: "spring" },
                    },
                    closed: { y: 25, opacity: 0 },
                  }}
                >
                  <a
                    href="#about"
                    className="text-4xl font-bold"
                    onClick={() => toggleMenu()}
                  >
                    About
                  </a>
                </motion.li>
                <motion.li
                  variants={{
                    open: {
                      y: "0%",
                      opacity: 1,
                      transition: { type: "spring" },
                    },
                    closed: { y: 25, opacity: 0 },
                  }}
                >
                  <a
                    href="#skills"
                    className="text-4xl font-bold"
                    onClick={() => toggleMenu()}
                  >
                    My Skills
                  </a>
                </motion.li>
                <motion.li
                  variants={{
                    open: {
                      y: "0%",
                      opacity: 1,
                      transition: { type: "spring" },
                    },
                    closed: { y: 25, opacity: 0 },
                  }}
                >
                  <a
                    href="#projects"
                    className="text-4xl font-bold"
                    onClick={() => toggleMenu()}
                  >
                    Projects
                  </a>
                </motion.li>
                <motion.li
                  variants={{
                    open: {
                      y: "0%",
                      opacity: 1,
                      transition: { type: "spring" },
                    },
                    closed: { y: 25, opacity: 0 },
                  }}
                >
                  <a
                    href="#contacts"
                    className="text-4xl font-bold"
                    onClick={() => toggleMenu()}
                  >
                    Contact
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

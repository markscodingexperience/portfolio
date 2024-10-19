import { motion, AnimatePresence } from "framer-motion";
import projectdata from "../data/projectdata";

const Projects = () => {
  return (
    <section className="mt-7" id="projects">
      <div className="flex flex-col">
        <div className="container mx-auto flex justify-center">
          <h1 className="text-3xl font-semibold items-center self-center mt-7">
            Projects
          </h1>
        </div>
      </div>
      <div className="container mx-auto md:px-3 lg:px-5">
        <AnimatePresence>
          {projectdata.map((data) => (
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
                scale: 1.03,
                transition: {
                  type: "spring",
                  bounce: 0.099,
                },
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: 0.099,
                  staggerChildren: 0.2,
                  delay: 0.3,
                },
              }}
              exit={{
                y: 20,
                opacity: 0,
                scale: 1.03,
                transition: {
                  type: "spring",
                  bounce: 0.099,
                },
              }}
              key={data.name}
              className="md:flex m-3"
            >
              <motion.img
                src={data.image}
                alt=""
                className="rounded-md w-screen mb-2 md:w-96 mb-0 object-contain shrink-0 px-5"
                loading="lazy"
              />
              <motion.div className="px-5 md:self-center">
                <h2 className="text-2xl mb-3 lg:text-2xl">{data.name}</h2>
                <h4 className="text-base md:text-lg">{data.description}</h4>
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    transition: { type: "spring", bounce: 0.099 },
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { type: "spring", bounce: 0.099 },
                  }}
                  className="rounded-md w-full py-3 px-7 my-5 shadow-[0px_6px_12px_0px_rgba(128,0,128,0.6)] bg-gradient-to-l from-purple-400 via-pink-500 to-red-500 md:w-max"
                >
                  <a href={data.link}>See More</a>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

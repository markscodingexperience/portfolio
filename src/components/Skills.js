import { motion } from "framer-motion";
import skillsdata from "../data/skillsdata";

const Skills = () => {
  return (
    <section
      className="mt-2 pb-10 pt-5 h-full bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500"
      id="skills"
    >
      <div className="flex flex-col">
        <div className="container mx-auto px-10 flex justify-center">
          <h1 className="text-3xl font-semibold items-center self-center p-3">
            Skills
          </h1>
        </div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.2,
            staggerChildren: 0.5,
            delay: 0.5,
          },
        }}
        className="grid grid-cols-2 w-screen container mx-auto md:px-5 lg:grid-cols-5"
      >
        {skillsdata.map((data) => (
          <motion.div
            className="flex flex-col rounded-md bg-gray-300 m-2 p-4 shadow-[6px_6px_12px_-4px_rgba(0,0,0,0.35)] md:p-10"
            key={data.name}
          >
            <img src={data.location} alt={data.name} className="" />
            <h3 className="text-sm self-center pt-3 md:text-lg">{data.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

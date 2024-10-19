import { motion } from "framer-motion";
import "../About.css";

const About = () => {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.3,
          delay: 0.3,
          staggerChildren: 0.5,
        },
      }}
      className="relative"
      id="about"
    >
      <div className="flex flex-col">
        <div className="container mx-auto flex absolute inset-x-0 -top-[21px] justify-center">
          <h1 className="text-3xl font-semibold items-center self-center">
            About Me
          </h1>
        </div>
      </div>
      <div className="flex flex-col flex-1 container mx-auto my-7 w-auto space-y-3 p-3 lg:w-1/2">
        <h4 className="text-lg">
          I'm a passionate <span className="text-blue-900">Web Developer </span>
          and <span className="text-pink-600">UI/UX designer</span>. I
          specialize in building{" "}
          <span className="text-indigo-500">
            modern, user-friendly websites and applications
          </span>{" "}
          that deliver an excellent user experience. I've worked on a variety of
          projects, from creating interactive web applications to designing
          intuitive user interfaces with a focus on usability. I aim to create
          digital solutions that are not only visually appealing but also
          functional.
        </h4>
        <h4 className="text-lg">
          My passion lies in{" "}
          <span className="text-rose-700">solving problems</span> with{" "}
          <span className="text-fuchsia-700">
            elegant code and thoughtful design{" "}
          </span>
          . When I'm not coding, you'll find me experimenting with{" "}
          <span className="text-violet-800">2D and 3D animation</span> or
          sketching out new design concepts. I approach every project with a{" "}
          <span className="text-sky-800">
            focus on details and functionality.{" "}
          </span>
          I believe that a great user experience is just as important as clean
          code, and I strive to bring both into everything I create. I also know
          manual and automation web testing as an addon!
        </h4>
      </div>
    </motion.section>
  );
};

export default About;

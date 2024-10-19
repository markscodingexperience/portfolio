import React, { Suspense } from "react";
import "@fontsource/poppins";

// Lazy loading components
const About = React.lazy(() => import("./components/About"));
const Hero = React.lazy(() => import("./components/Hero"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Skills = React.lazy(() => import("./components/Skills"));
const Projects = React.lazy(() => import("./components/Projects"));
const Testimonial = React.lazy(() => import("./components/Testimonial"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="font-poppins">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonial />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;

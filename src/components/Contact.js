import { useState } from "react";
import svgdata from "../data/svgdata";
import linkdata from "../data/linkdata";

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, name) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(name); // Update the copied state
        setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <section className="mt-7 h-4/5" id="contacts">
      <div className="flex flex-col">
        <div className="container mx-auto flex justify-center">
          <h1 className="text-3xl font-semibold items-center self-center my-7">
            Contact Me
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid justify-center space-x-0 mb-10 items-center mx-auto md:flex flex-row md:space-x-5">
          {svgdata.map((index) => (
            <div key={index.name} className="">
              <div className="flex items-center space-x-3">
                <img src={index.location} alt="" />
                <p
                  className="text-sm md:text-base"
                  onClick={() => handleCopy(index.value, index.name)}
                >
                  {index.value}
                </p>
              </div>
              {copied === index.name && (
                <span className="text-sm text-green-500 ml-2 absolute">
                  Copied!
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="space-x-5 pb-10 items-center mx-auto flex">
        <div className="visible flex-grow border-t border-gray-400"></div>
        {linkdata.map((index) => (
          <div key={index.name} className="flex-shrink">
            <div className="hidden items-center md:inline-flex space-x-3">
              <img src={index.location} alt="" />
              <p>
                <a href={index.link}>{index.name}</a>
              </p>
            </div>
            <div className="flex flex-shrink md:hidden space-x-3">
              <a href={index.link}>
                <img src={index.location} alt="" />
              </a>
            </div>
          </div>
        ))}
        <div class="visible flex-grow border-t border-gray-400"></div>
      </div>
    </section>
  );
};

export default Contact;

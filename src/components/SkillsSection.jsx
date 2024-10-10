import React, { useId } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"; // Import icons from React Icons
import { SiTailwindcss, SiRedux } from "react-icons/si"; // Additional Icons
import Text from "./Text";
import { useElementsRef } from "../context/MainContext";

// Skill data
const skillsColumnOne = [
  { name: "HTML5", icon: <FaHtml5 className="text-red-500 text-6xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600 text-6xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-400 text-6xl" />,
  },
  { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-6xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-6xl" /> },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-purple-600 text-6xl" />,
  },
];

const SkillsSection = () => {
  const { skillsRef } = useElementsRef();
  const id = useId(); // Generate a unique ID

  // Function to render skills in each column
  const renderSkills = (skills) => {
    return (
      <ul className="flex justify-center flex-wrap">
        {skills.map((skill) => (
          <li
            key={`${id}-${skill.name}`}
            className="p-4 w-28 md:w-40 flex flex-col items-center bg-slate-800 text-white rounded-lg m-2"
            data-aos="zoom-in"
          >
            {/* Skill Icon */}
            {skill.icon}

            {/* Skill Name */}
            <span className="text-xl text-center font-semibold">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section
      className="w-full py-12 text-slate-800"
      id="my-skills"
      ref={skillsRef}
    >
      <div className="container mx-auto px-6">
        <Text
          myClass="text-4xl font-bold mb-8 text-center capitalize"
          myText="skills"
          myAni="fade-up"
        />

        <div>{renderSkills(skillsColumnOne)}</div>
      </div>
    </section>
  );
};

export default SkillsSection;

import React, { useId } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'; // Import icons from React Icons
import { SiTailwindcss, SiRedux } from 'react-icons/si'; // Additional Icons
import Text from './Text';

// Skill data
const skillsColumnOne = [
  { name: 'HTML5', icon: <FaHtml5 className="text-red-500 text-3xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600 text-3xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400 text-3xl" /> },
];

const skillsColumnTwo = [
  { name: 'React', icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-400 text-3xl" /> },
  { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-600 text-3xl" /> },
];

const SkillsSection = () => {
  const id = useId(); // Generate a unique ID

  // Function to render skills in each column
  const renderSkills = (skills, borderClass, bulletClass) => {
    return (
      <ul>
        {skills.map((skill) => (
          <li
            key={`${id}-${skill.name}`}
            className={`relative flex items-center space-x-4 py-4 ${borderClass} border-blue-500`}
          >
            {/* Bullet Element */}
            <div className={`absolute top-1/2 ${bulletClass} transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full`}></div>

            {/* Skill Icon */}
            {skill.icon}

            {/* Skill Name */}
            <span className="text-xl font-semibold">{skill.name}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="w-full py-12 bg-gray-900 text-white" id='my-skills'>
      <div className="container mx-auto px-6">
        <Text myClass='text-4xl font-bold mb-8 text-center capitalize' myText='skills' />

        {/* Split the skills into two sections */}
        <div className="flex justify-center mx-auto w-1/3 gap-10">
          {/* First Column */}
          <div>{renderSkills(skillsColumnOne, 'border-l-2', 'left-[-0.4rem]')}</div>
          {/* Second Column */}
          <div>{renderSkills(skillsColumnTwo, 'border-l-2', 'left-[-0.4rem]')}</div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

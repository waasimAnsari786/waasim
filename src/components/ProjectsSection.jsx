import React, { useState, useId } from "react";
import MyButton from "./MyButton";
import { projectsData } from "../apis/projectsData";
import { useElementsRef } from "../context/MainContext";
import ProjectCard from "./ProjectCard";
import { NavLink } from "react-router-dom";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { projectsRef } = useElementsRef();

  let btns = ["All", "React", "JavaScript", "HTML/CSS"];

  const handleProjectsFilter = (val) => {
    setSelectedCategory(val.target.textContent);
  };

  // Filter logic based on selected category
  const filteredProjects = projectsData.filter(
    (project) =>
      selectedCategory === "All" || selectedCategory === project.category
  );

  return (
    <section
      className="py-16 bg-gray-100 dark:bg-slate-800 dark:text-white mt-20"
      id="my-prs"
      ref={projectsRef}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Projects
        </h2>

        {/* Button Section */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {btns.map((curBtn) => {
            return (
              <MyButton
                btnText={curBtn}
                btnClass={`py-2 px-4 hover:bg-slate-800 hover:text-white transition duration-300 ease-linear rounded-md font-semibold transition border-[0.1rem] dark:border-white dark:hover:bg-white dark:hover:text-slate-800 ${
                  selectedCategory === curBtn
                    ? "bg-slate-800 text-white dark:bg-white dark:text-slate-800"
                    : "bg-slate-300 text-gray-700 dark:bg-transparent dark:text-white"
                }`}
                btnFunc={handleProjectsFilter}
                // btnAni="zoom-out"
                key={useId()}
              />
            );
          })}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <NavLink to={`/projects/${project.title}`} key={project.liveURL}>
              <ProjectCard
                liveURL={project.liveURL}
                title={project.title}
                img={project.img}
                shortDes={project.shortDes}
                bgColor={project.bgColor && project.bgColor}
                key={project.liveURL}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

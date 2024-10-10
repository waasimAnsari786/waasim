import React, { useState, useId } from "react";
import MyButton from "./MyButton";
import { projectsData } from "../apis/projectsData";
import { useElementsRef } from "../context/MainContext";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { projectsRef } = useElementsRef();

  let btns = ["All", "HTML/CSS", "JavaScript", "React"];

  const handleProjectsFilter = (val) => {
    setSelectedCategory(val.target.textContent);
  };

  // Filter logic based on selected category
  const filteredProjects = projectsData.filter(
    (project) =>
      selectedCategory === "All" || selectedCategory === project.category
  );

  return (
    <section className="py-16 bg-gray-100" id="my-prs" ref={projectsRef}>
      <div className="container mx-auto px-4">
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
                btnClass={`py-2 px-4 hover:bg-slate-800 hover:text-white transition duration-300 ease-linear rounded-md font-semibold transition ${
                  selectedCategory === curBtn
                    ? "bg-slate-800 text-white"
                    : "bg-slate-300 text-gray-700"
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
            <div
              key={project.liveURL}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              // data-aos="flip-right"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.shortDes}</p>
                {/* <div className="flex space-x-2">
                  <button className="bg-slate-300 text-slate-800 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white transition duration-300 ease-linear">
                    Code
                  </button>
                  <button className="bg-slate-300 text-slate-800 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white transition duration-300 ease-linear">
                    View Project
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

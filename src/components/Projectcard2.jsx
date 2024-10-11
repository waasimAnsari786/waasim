import React from "react";
import { projectsData } from "../apis/projectsData";
import { Link, useParams } from "react-router-dom";

export default function ProjectCard2() {
  const { project_URL } = useParams();
  let printableObj = projectsData.filter(
    (curObj) => curObj.title === project_URL
  );

  let { img, title, description, liveURL, code } = printableObj[0];

  return (
    <>
      <div className="container mx-auto p-6">
        <div
          key={liveURL}
          className="bg-white shadow-slate-800 shadow-lg rounded-lg flex flex-col gap-3 w-1/2 p-6 "
        >
          <div>
            <img src={img} alt={title} className="h-full rounded-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>

          <div className="flex gap-2">
            <Link
              to={liveURL}
              target="_blank"
              className="capitalize bg-slate-300 text-slate-800 hover:bg-slate-800 hover:text-white transition duration-300 ease-liner p-3 rounded-lg font-semibold"
            >
              view project
            </Link>
            <Link
              to={code}
              target="_blank"
              className="capitalize bg-slate-300 text-slate-800 hover:bg-slate-800 hover:text-white transition duration-300 ease-liner p-3 rounded-lg font-semibold"
            >
              code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

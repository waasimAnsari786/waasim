import React from "react";
import { projectsData } from "../apis/projectsData";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import MyButton from "./MyButton";

export default function DetailedProject() {
  const { project_URL } = useParams();
  let printableObj = projectsData.filter(
    (curObj) => curObj.title === project_URL
  );

  const navigate = useNavigate();
  let { img, title, description, liveURL, code } = printableObj[0];
  return (
    <>
      <section className="h-screen pt-5 dark:bg-slate-800 dark:text-white">
        <div className="container dark:shadow-slate-950 mx-auto p-6 shadow-gray-400 shadow-lg rounded-lg flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <img src={img} alt={title} className="h-full rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-white mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              <Link to={liveURL} target="_blank">
                <MyButton btnFunc={() => navigate(-1)} btnText="live preview" />
              </Link>
              <Link to={code} target="_blank">
                <MyButton btnFunc={() => navigate(-1)} btnText="repository" />
              </Link>
              <MyButton btnFunc={() => navigate(-1)} btnText="go back" />

              <NavLink to="/projects">
                <MyButton btnText="all projects" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

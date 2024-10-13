import React from "react";
import { projectsData } from "../apis/projectsData";
import { Link, useNavigate, useParams } from "react-router-dom";
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
            <img src={img} alt={title} className="sm:h-full h-64 rounded-xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-white mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              <Link
                to={liveURL}
                target="_blank"
                className="capitalize bg-slate-300 text-slate-800 hover:bg-slate-800 hover:text-white transition duration-300 ease-liner p-3 rounded-lg font-semibold dark:bg-transparent border-[0.1rem] dark:text-white border-white dark:hover:bg-white dark:hover:text-slate-800"
              >
                live preview
              </Link>
              <Link
                to={code}
                target="_blank"
                className="capitalize bg-slate-300 text-slate-800 hover:bg-slate-800 hover:text-white transition duration-300 ease-liner p-3 rounded-lg font-semibold dark:bg-transparent border-[0.1rem] dark:text-white border-white dark:hover:bg-white dark:hover:text-slate-800"
              >
                repository
              </Link>
              <MyButton
                btnFunc={() => navigate(-1)}
                btnText="go back"
                btnClass="capitalize bg-slate-300 text-slate-800 hover:bg-slate-800 hover:text-white transition duration-300 ease-liner p-3 rounded-lg font-semibold dark:bg-transparent border-[0.1rem] dark:text-white border-white dark:hover:bg-white dark:hover:text-slate-800"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

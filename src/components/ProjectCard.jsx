import React, { useEffect, useState } from "react";

export default function ProjectCard({
  liveURL,
  img,
  title,
  shortDes,
  bgColor = "bg-white",
}) {
  useEffect(() => {
    window.AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <div
        key={liveURL}
        className="h-96 rounded-lg overflow-hidden shadow-lg shadow-gray-400 dark:shadow-slate-900 bg-white"
        data-aos="zoom-in"
      >
        <img
          src={img}
          alt={title}
          className={`w-full h-60 lg:h-48 object-cover ${bgColor}`}
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
          <p className="text-slate-500 mb-4">
            {shortDes}
            {/* {shortDes.length > 300 ? `${shortDes[100]}...` : shortDes} */}
          </p>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from "react";

export default function ProjectCard({ liveURL, img, title, shortDes }) {
  useEffect(() => {
    // Initialize AOS
    window.AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <>
      <div
        key={liveURL}
        className="bg-white  rounded-lg overflow-hidden"
        data-aos="zoom-in"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-60 lg:h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
          <p className="text-slate-500 mb-4">{shortDes}</p>
        </div>
      </div>
    </>
  );
}

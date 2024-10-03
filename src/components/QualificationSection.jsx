import React, { useId, useState } from "react";
import Text from "./Text";
import QualificationInner from "./QualificationInner";

const QualificationSection = () => {
  const qualification = [
    {
      title: "matriculation",
      year: "Sindh Board , 2009 - 2021",
      description:
        "I completed my matriculation with a commendable score of 74.58% in the Faculty of Biology.",
      id: useId()
    },
    {
      title: "intermediate",
      year: "Continue",
      description:
        "I'm currently studying Computer Sciences in my intermediate program, focusing on programming and data structures to build a strong foundation for my future tech career.",
      id: useId()
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">


        <div className="w-1/2">
          <Text myClass='text-3xl text-center text-slate-800 capitalize font-bold mb-5' myText='qualification' />
          <div className="flex md:flex-row flex-col gap-2">
            {qualification.map((curObj) => {
              return (
                <QualificationInner head='qualification' title={curObj.title} subtitle={curObj.year} description={curObj.description} />

              )
            })}


          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;

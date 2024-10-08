import React, { useId } from "react";
import QualificationInner from "./QualificationInner";

const QualificationSection = ({ quaArr }) => {
  return (
    <div className="w-full lg:w-1/2" data-aos="fade-up">
      <div className="flex md:flex-row flex-col gap-2">
        {quaArr.map((curObj) => {
          return (
            <QualificationInner
              key={useId()}
              title={curObj.title}
              subtitle={curObj.year}
              description={curObj.description}
              description2={curObj.description2}
              compKey={curObj.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QualificationSection;

import React from "react";
import Text from "./Text";
import QualificationInner from "./QualificationInner";

const QualificationSection = ({ quaArr }) => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="flex md:flex-row flex-col gap-2">
        {quaArr.map((curObj) => {
          return (
            <QualificationInner
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

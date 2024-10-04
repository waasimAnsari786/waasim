import React from "react";
import Text from "./Text";
import QualificationInner from "./QualificationInner";

const QualificationSection = ({ quaArr, quaHead }) => {
  return (
    <div className="w-full lg:w-1/2">
      <Text
        myClass="text-3xl text-center text-slate-800 capitalize font-bold mb-5"
        myText={quaHead}
      />
      <div className="flex md:flex-row flex-col gap-2">
        {quaArr.map((curObj) => {
          return (
            <QualificationInner
              head={quaHead}
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

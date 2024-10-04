import React from "react";
import Text from "./Text";

export default function QualificationInner({
  title,
  subtitle,
  description,
  description2,
  compKey,
}) {
  return (
    <>
      <div
        className="bg-white shadow-xl shadow-slate-300 rounded-lg p-5 w-full md:w-1/2 flex flex-col flex-wrap"
        key={compKey}
      >
        <Text
          myClass="text-2xl font-semibold text-slate-800 mb-2 capitalize"
          myText={title}
        />
        <Text myClass="text-gray-600 font-semibold mb-4" myText={subtitle} />

        <Text myClass="text-gray-500 mt-3" myText={description} />
      </div>
    </>
  );
}

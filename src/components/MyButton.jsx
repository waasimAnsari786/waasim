import React from "react";

export default function MyButton({ btnText, btnClass, btnFunc, btnAni }) {
  return (
    <>
      <button
        className="bg-gray-300 text-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 ease-linear font-semibold py-2 px-4 flex items-center justify-center rounded-lg mt-4 capitalize border-[0.1rem] border-transparent dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-800 dark:border-white"
        onClick={(e) => {
          btnFunc && btnFunc(e);
        }}
        data-aos={btnAni}
      >
        {btnText}
      </button>
    </>
  );
}

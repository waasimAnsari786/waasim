import React from "react";

export default function MyButton({ btnText, btnClass, btnFunc, btnAni }) {
  return (
    <>
      <button
        className={btnClass}
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

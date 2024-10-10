import React from "react";

export default function Text({ myClass, myText, myAni }) {
  return (
    <>
      <p data-aos={myAni} className={myClass}>
        {myText}
      </p>
    </>
  );
}

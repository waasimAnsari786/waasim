import React from 'react'

export default function MyButton({ btnText, btnClass, btnFunc }) {
  return (
    <>
      <button className={btnClass} onClick={(e) => { btnFunc && btnFunc(e) }}>{btnText}</button>
    </>
  )
}

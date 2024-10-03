import React from 'react'

export default function Text({ myClass, myText }) {
  return (
    <>
      <p className={myClass}>{myText}</p>
    </>
  )
}

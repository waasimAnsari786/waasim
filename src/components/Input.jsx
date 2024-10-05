import React from 'react'

export default function Input({ inpClass, inpId, inpFunc, inpPlaceHolder, inpVal }) {
  return (
    <>
      <input
        className={`${inpClass} p-3 text-gray-900 border border-gray-300 rounded focus:outline-none`}
        id={inpId}
        type={inpId}
        placeholder={inpPlaceHolder}
        required
        onChange={(e) => inpFunc && inpFunc(e)}
        value={inpVal}
      />
    </>
  )
}

import React from 'react'
import Text from './Text'

export default function QualificationInner({ head, title, subtitle, description }) {
  return (
    <>

      <div className="bg-white shadow-2xl shadow-slate-300 rounded-lg p-6 col-span-1 w-1/2">
        <Text
          myClass="text-2xl font-semibold text-gray-700 mb-2 capitalize"
          myText={title}
        />
        <Text
          myClass="text-gray-600 mb-4"
          myText={subtitle}
        />
        <Text
          myClass="text-gray-500"
          myText={description}
        />
      </div>

    </>
  )
}

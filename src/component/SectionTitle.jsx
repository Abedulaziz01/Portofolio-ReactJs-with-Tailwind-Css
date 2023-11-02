import React from 'react'

function SectionTitle({text}) {
  return (
    <div className=' border-b border-gray-200 pb-5'>
        <h2 className=' text-3xl font-medium tracking-wide capitalize px-4'>
          {text}
        </h2>
    </div>
  )
}

export default SectionTitle

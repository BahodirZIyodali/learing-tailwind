import React from 'react'

const Plans = () => {
  return (
    <div className='py-[100px] px-2'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
            <div className='border  h-[500px] hover:scale-105 my-2 duration-500'>1</div>
            <div className='border  h-[500px] bg-gray-100 hover:scale-105 my-2 duration-500'>2</div>
            <div className='border  h-[500px] hover:scale-105 my-2 duration-500'>3</div>
        </div>
    </div>
  )
}

export default Plans
import React from 'react'

const Experts = () => {
  return (
    <div className='max-w-[1240px]  mx-auto h-[200px] md:grid grid-cols-2 my-10 p-2 '>
        <div className='col-span-1 md:w-[80%] text-center'>
            <img src="" alt="laptop" className='inline' />
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
          <h1 className='text-[#00df9a] font-bold my-2 uppercase'>learn from export</h1>
          <p className='my-2 text-justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, repudiandae velit. Quos a eveniet voluptas quod harum expedita labore sequi.</p>
          <button className='bg-black w-[30%] text-white p-3 rounded'>Get Started</button>
        </div>
    </div>
  )
}

export default Experts
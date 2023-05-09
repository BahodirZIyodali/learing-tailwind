import React from 'react'

const NewLetter = () => {
  return (
    <div className='bg-[#2699fb] p-4   grid  md:flex' >
        <div className='max-w-[1240px]  mx-auto    py-[50px]'>
            <div className='m-2'>
              <h1 className='text-[20px] md:text-[40px] font-bold text-white '>Want to learn latest I.T skills?</h1>
              <span className='text-white '> Sign up to our NewsLetter stay up to date</span>
            </div>
        </div>
        <div className='md:m-[70px] m-0 md:text-justify text-center'>
            <input type="text" className=' rounded mb-2 p-3 mr-2 text-slate-600 ' placeholder='Email' />
            <button className='bg-black text-white p-3 rounded'>Get Started</button> <br />
            <p className='text-white'>We care bout the protection of your data. Read our <br /> <a className='text-black'>Privacy Policy</a></p>
        </div>
    </div>
  )
}

export default NewLetter
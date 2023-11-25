import React from 'react'
import Typed from 'react-typed';
const Banner = () => {
  return (
    <>
      <div className='bg-[#2699fb] w-full py-[80px]'>
        <div className='max-w-[1300px] py-[60px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl  md:p-[16px]'>
                Learn With Us
            </div>
            <h2 className='text-white text-5xl md:text-[60px] md:p-[16px]'>Grow with us</h2>
            <h3 className='text-white text-[20px] md:text-[50px] md:p-[16px]'>Learn
            <Typed
                    strings={['Web development','Digital Markiting','Ethical Haking']}
                    typeSpeed={100}
                    loop={true}
                    className='pl-4'
                    backSpeed={70}
                />
            </h3>
            <button className='bg-black text-white rounded my-2 p-3 md:w-[15%] w-[30%]'>Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Banner

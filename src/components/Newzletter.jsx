import React from 'react'

const Newzletter = () => {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1300px] justify-between px-10 md:flex mx-auto py-[50px] '>
            <div className='m-3 '>
                <h2 className='text-[20px] md:text-[40px] font-bold text-white'>
                    Want to learn latest IT skills ?
                </h2>
                <span className='text-white'>
                    Sign up to our Newzletter and stay upto date
                </span>
            </div>
            <div className='m-3 '>
                <div className='md:flex '>
                    <input type="text" placeholder='Enter email' className='m-2 px-5 py-2  rounded' />
                    <button className='bg-black text-white rounded m-2 px-5 py-2'>Notify Me</button>
                </div>
                <div className='text-white m-2 text-xl'>
                    We care about the protection of your data 
                </div>
                <div className='m-1'>
                     Privacy Policy 
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Newzletter

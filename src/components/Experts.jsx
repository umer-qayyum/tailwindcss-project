import React from 'react'
import laptop from '../assets/laptop.jpg';
const Experts = () => {
  return (
    <>
      <div className='max-w-[1300px] p-2 mx-auto my-10 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[80%] text-center '>
            <img src={laptop} className='inline'/>
        </div>
        <div className='col-span-1 flex flex-col justify-center '>
            <h1 className='text-[#00df9a] text-xl font-bold my-2'>Learn From Experts</h1>
            <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi voluptate dolorem in soluta minus dicta consectetur, assumenda eius, enim eligendi eveniet aliquam sapiente corporis? Perspiciatis nulla obcaecati maxime vitae debitis odio, consequuntur deserunt nesciunt in sit ab sed unde vel, veritatis repellat quod, itaque laboriosam voluptatibus architecto eaque? Laborum?</p>
            <button className='bg-black text-white rounded my-2 p-3 w-[30%] '>Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Experts

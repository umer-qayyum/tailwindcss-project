import React from 'react'
import { FaFacebook , FaInstagram,  FaTwitter , FaSquareGithub} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-[#2699fb] w-full px-8 py-[50px]'>
        <div className='max-w-[1300px] max-auto px-4  md:grid grid-cols-5 gap-4'>
            <div className='col-span-2  p-4'>
                <h1 className='text-2xl font-bold my-4'>
                    WsCube Tech
                </h1>
                <p className='my-4 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi inventore dolore reprehenderit corporis totam exercitationem, voluptates reiciendis iure fuga aliquam corrupti cupiditate? Minus quis inventore, mollitia incidunt consequuntur reiciendis nostrum!</p>
                <div className='flex text-white my-6'>
                <FaFacebook className='text-3xl mx-4' />
                <FaInstagram className='text-3xl mx-4'/>
                <FaTwitter className='text-3xl mx-4' />
                <FaSquareGithub className='text-3xl mx-4' />
                </div>
            </div>
            <div className='col-span-1 p-4'>
                <ul>
                    <li className='font-bold my-4'>Solutions</li>
                    <li className='text-white my-2'>Analystics</li>
                    <li className='text-white my-2'>Marketing</li>
                    <li className='text-white my-2'>Commerece</li>
                    <li className='text-white my-2'>Insight</li>
                </ul>
                
            </div>
            <div className='col-span-1 p-4'>
            <ul>
                    <li className='font-bold my-4'>Support</li>
                    <li className='text-white my-2'>Piricing</li>
                    <li className='text-white my-2'>Documentation</li>
                    <li className='text-white my-2'>Guides</li>
                    <li className='text-white my-2'>API status</li>
                </ul>
            </div>
            <div className='col-span-1   p-4'>
            <ul>
                    <li className='font-bold my-4'>Company</li>
                    <li className='text-white my-2'>About</li>
                    <li className='text-white my-2'>Jobs</li>
                    <li className='text-white my-2'>Blogs</li>
                    <li className='text-white my-2'>Carrers</li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Footer

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-[#2699fb] py-4 px-20">
        <div className="max-w-[1300px] py-[10px] items-center flex justify-between  max-auto">
          <div className="text-3xl font-bold">WsCube Tech</div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}

          <ul className="hidden md:flex gap-10 text-white">
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          {/* Responsiveness */}
          <ul className={`duration-300 md:hidden block gap-10 text-white bg-black fixed w-full h-screen ${toggle? 'left-0':'left-[-100%]'}  top-[96px] `}>
            <li className="p-5">Home</li>
            <li className="p-5">Company</li>
            <li className="p-5">Resources</li>
            <li className="p-5">About</li>
            <li className="p-5">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

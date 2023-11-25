import React from "react";

const Plans = () => {
  return (
    <div className="py-[100px]">
      <div className="max-w-[1300px] px-10 mx-auto gap-6 md:grid grid-cols-3">
        <div className="h-[400px] hover:scale-105 duration-500 shadow-xl border my-3 text-center p-5">
          <h1 className="text-2xl font-bold mx-2 my-5">Web Development</h1>
          <h2 className="text-3xl font-bold mx-2 my-5">$ 149</h2>
          <p className="mx-2 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic
            labore voluptas magnam nobis, ipsam ut dicta maxime officiis
            adipisci?
          </p>
          <button className="bg-black text-white rounded mx-2 my-5 px-5 py-2">
            Get Started
          </button>
        </div>
        <div className="h-[400px] hover:scale-105 duration-500 shadow-xl border my-3 text-center p-5">
          <h1 className="text-2xl font-bold mx-2 my-5">Digital Marketing</h1>
          <h2 className="text-3xl font-bold mx-2 my-5">$ 149</h2>
          <p className="mx-2 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic
            labore voluptas magnam nobis, ipsam ut dicta maxime officiis
            adipisci?
          </p>
          <button className="bg-black text-white rounded mx-2 my-5 px-5 py-2">
            Get Started
          </button>
        </div>
        <div className="h-[400px] hover:scale-105 duration-500 shadow-xl border my-3 text-center p-5">
          <h1 className="text-2xl font-bold mx-2 my-5">App Development</h1>
          <h2 className="text-3xl font-bold mx-2 my-5">$ 149</h2>
          <p className="mx-2 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic
            labore voluptas magnam nobis, ipsam ut dicta maxime officiis
            adipisci?
          </p>
          <button className="bg-black text-white rounded mx-2 my-5 px-5 py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;

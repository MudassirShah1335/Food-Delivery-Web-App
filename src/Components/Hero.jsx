import React from "react";

import Food from "../Public/assets/Images/Burger.png";

const Hero = () => {
  return (
    <div className="Hero-section px-[2%] pt-12 h-screen w-full bg-cover bg-center bg-no-repeat">
      <div className="flex items-center justify-between border-[5px] h-[90vh] border-white rounded-2xl">
        {/* left container*/}
        <div className="text-white w-1/2  l px-[3%] ">
          <div className="dancing-script text-6xl">
            <h1 className="">We Provide</h1>
            <h1 className="my-3">delivery Within</h1>
            <h1 className="text-[#d44646]">30 min</h1>
          </div>

          <div className="mt-12 flex items-center gap-x-4">
            <a
              className="w-fit px-12 border bg-[#d44646] border-blue-300 rounded-md text-xl p-2 pl-5  focus:border-indigo-500
          hover:bg-transparent cursor-pointer focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Order Now
            </a>
            <a
              className="w-fit px-12 border bg-transparent cursor-pointer border-blue-300 rounded-md text-xl p-2 pl-5  focus:border-indigo-500
        hover:bg-[#e63b3b] focus:ring-indigo-500 focus:ring-opacity-50"
            >
              See Menu
            </a>
          </div>
        </div>
        {/* right container*/}

        <div className="w-1/2">
          <img className="" src={Food} width={600} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

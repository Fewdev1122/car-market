import React from "react";
import { NavLink } from "react-router-dom";

export default function Heros() {
  return (
    <div className=" items-center flex justify-center  flex-col text-white h-[400px] md:h-[550px] relative w-full ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/bg-hero.mp4"
        autoPlay
        loop
        muted
        aria-hidden="true"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-[#0F172A]/70 "></div>   
      <div className="relative z-10 text-center text-white flex flex-col items-center space-y-7">
        <h1 className="text-2xl md:text-4xl font-semibold">Find Your Perfect Ride</h1>
        <p className="text-lg text-[#EAEFEF]">The easiest and safest platform to buy and sell cars</p>
        <NavLink to="/car" className="bg-blue-800 w-[120px] px-4 py-2 text-sm rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200" type="button">
          Explore Cars
        </NavLink>
      </div>

    </div>

  );
}

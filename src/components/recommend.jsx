import React from "react";
import Cars from "../data/cars.json";
import { NavLink } from "react-router-dom";
import IcDate from "./imgs/formkit--date.svg";
import IcMileage from "./imgs/formkit--mileage.svg";


export default function Recommend() {
  return (
    <div className=" bg-[#0F172A] py-[4rem] ">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center space-y-2  mb-10">
          <span className="text-white">รถยนต์แนะนำ</span>
          <p className="text-gray-400">รถยนต์คุณภาพที่ได้รับการคัดสรรมาเป็นพิเศษ</p>
        </div>


        <div >
          <div className="grid gap-1 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center">
            {Cars.slice(0, 4).map((Cars) => (
              <div key={Cars.id} className="flex flex-col gap-2 bg-[#1E293B] rounded-xl w-[240px] border border-gray-700 xl:w-[300px] 2xl:w-[320px] cursor-pointer group transition-shadow duration-300 hover:  ">
                <div className="w-full aspect-[16/9] overflow-hidden rounded-t-xl">
                  <img src={Cars.image} alt={Cars.model} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4 pt-[1.75rem] ">
                  <p className="text-blue-400 text-sm mb-1">{Cars.brand}</p>
                  <p className="text-[#fff] mb-2">{Cars.model}</p>
                  <div className="flex gap-3 text-sm text-gray-400 mb-2">
                    <div className="flex item-center gap-1">
                      <img src={IcDate} alt="Loading" className="w-3.5 " />
                      <p >{Cars.year}</p>
                    </div>
                    <div className="flex item-center gap-1">
                      <img src={IcMileage} alt="Loading" className="w-4.5 " />
                      <p>{Cars.mileage} km</p>
                    </div>
                  </div>
                  <p className="text-blue-500 ">฿{Cars.price}</p>
                  <div className="flex justify-center mt-8 w-full ">
                    <NavLink className="w-full"  to={`/detail/${Cars.id}`} state={Cars}>
                      <button className="bg-[#3B82F6] text-white text-sm py-1 px-9 w-full rounded-lg xl:py-2 hover:bg-[#60A5FA]">ดูรายละเอียด</button>
                    </NavLink>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
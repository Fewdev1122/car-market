import Cars from "../data/cars.json";
import { NavLink } from "react-router-dom";
import IcDate from "./imgs/formkit--date.svg";
import IcMileage from "./imgs/formkit--mileage.svg";
import React from "react";

export default function CartCar() {

  return (
    <div className=" bg-[#0F172A] pb-10 min-h-screen">
      <div className="container mx-auto px-4 ">
        <div className="py-4">
          <p className="text-white text-xl">รถยนต์ทั้งหมด</p>
        </div>
        <form id="myForm" className="bg-[#1E293B] border border-gray-700 p-4 rounded-lg mb-8">
          <div className="text-white flex flex-wrap justify-between  w-full gap-4 flex-col lg:gap-0 md:flex-row">
            <div className="flex flex-col wd:w-[400px]">
              <label htmlFor="search">ค้นหา</label>
              <input type="search" name="search" id="" placeholder="ค้นหาชื่อรถหรือยี่ห้อ..." className="focus:border-blue-500 transition-colors duration-200 outline-none bg-[#0F172A] border border-gray-700 text-sm px-4 py-2 rounded-lg lg:w-[400px]" />
            </div>
            <div className="flex flex-col relative lg:w-[190px]">
              <label htmlFor="categories-brand">ยี่ห้อ</label>
              <select name="categories-brand" id="" className="bg-[#0F172A] w-full border border-gray-700 text-sm px-4 pr-7 py-2  rounded-lg focus:border-blue-500 transition-colors duration-200 outline-none appearance-none">
                <option value="AllBrand">ทั้งหมด</option>
                {[
                  ...new Set(Cars.map(car => car.brand))
                ].map((brand, index) => (
                  <option key={index} value={brand}>{brand}</option>
                ))}
              </select>
              <div className="absolute right-3 top-11 pointer-events-none -translate-y-1/2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024"><path fill="#fff" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z" strokeWidth="25.5" stroke="#fff" /></svg>
              </div>
            </div>
            <div className="flex flex-col relative lg:w-[190px]">
              <label htmlFor="Type">ประเภท</label>
              <select name="Type" id="" className="bg-[#0F172A] border border-gray-700 text-sm px-4 pr-8 py-2 rounded-lg focus:border-blue-500 transition-colors duration-200 outline-none appearance-none">
                <option value="AllType" >ทั้งหมด</option>
                {[
                  ...new Set(Cars.map(car => car.Type))
                ].map((type, index) => (
                  <option value={type} key={index}>{type}</option>
                ))}
              </select>
              <div className="absolute right-3 top-11 pointer-events-none -translate-y-1/2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024"><path fill="#fff" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z" strokeWidth="25.5" stroke="#fff" /></svg>
              </div>
            </div>
            <div className="flex flex-col relative lg:w-[190px]">
              <label htmlFor="year">ปี</label>
              <select name="year" id="" className="bg-[#0F172A] border border-gray-700 text-sm px-4 pr-7 py-2 rounded-lg focus:border-blue-500 transition-colors duration-200 outline-none appearance-none">
                <option value="AllType">ทั้งหมด</option>
                {[
                  ...new Set(Cars.map(car => car.year))
                ].sort((a, b) => a - b)
                  .map((year, index) => (
                    <option value={year} key={index}>{year}</option>
                  ))}
              </select>
              <div className="absolute right-3 top-11 pointer-events-none -translate-y-1/2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024"><path fill="#fff" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z" strokeWidth="25.5" stroke="#fff" /></svg>
              </div>
            </div>
            <div className="flex flex-col relative lg:w-[190px]">
              <label htmlFor="price">ราคา</label>
              <select name="price" id="" className="bg-[#0F172A] border border-gray-700 text-sm px-4 py-2  rounded-lg focus:border-blue-500 transition-colors duration-200 outline-none  appearance-none">
                <option value="AllPrice">ทั้งหมด</option>
                <option value="&lt; 1,000,000">ต่ำกว่า 1 ล้าน</option>
                <option value="1,000,000-2,000,000">1-2 ล้าน</option>
                <option value="2,000,000-3,000,000">2-3 ล้าน</option>
                <option value="&gt; 3,000,000">มากกว่า 3 ล้าน</option>
              </select>
              <div className="absolute right-3 top-11 pointer-events-none -translate-y-1/2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024"><path fill="#fff" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z" strokeWidth="25.5" stroke="#fff" /></svg>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-gray-400 text-base">พบ {Cars.length} รายการ</p>
            <button type="reset" className="bg-white text-blue-500 py-2 px-3 rounded-lg text-sm" >ล้างตัวกรอง</button>
          </div>
        </form>
        <div >
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  place-items-center">
            {Cars.map((Cars) => (
              <div key={Cars.id} className="flex flex-col gap-2 bg-[#1E293B] rounded-xl w-full max-w-[320px] border border-gray-700  cursor-pointer group transition-shadow duration-300 hover:shadow-[0_10px_20px_rgba(37,99,235,0.19)]">
                <div className="w-full aspect-[16/9] overflow-hidden rounded-t-xl bg-gray-700 ">
                  <img src={Cars.image} alt={Cars.model} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105 text-center text-gray-400" />
                </div>
                <div className="p-4 pt-[1.75rem] ">
                  <p className="text-blue-400 text-sm mb-1">{Cars.brand}</p>
                  <p className="text-[#fff] mb-2">{Cars.model}</p>
                  <div className="flex gap-3 text-sm text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <img src={IcDate} alt="Loading" className="w-3.5 " />
                      <p >{Cars.year}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={IcMileage} alt="Loading" className="w-4.5 " />
                      <p>{Cars.mileage} km</p>
                    </div>
                  </div>
                  <p className="text-blue-500 ">฿{Cars.price}</p>
                  <div className="flex justify-center mt-8 w-full ">
                    <NavLink className="w-full" to={`/detail/${Cars.id}`} state={Cars}>
                      <button className="bg-[#3B82F6] text-white text-sm py-2  px-9 w-full rounded-lg  hover:bg-[#60A5FA]">ดูรายละเอียด</button>
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
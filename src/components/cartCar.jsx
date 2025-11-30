import Cars from "../data/cars.json";
import { NavLink } from "react-router-dom";
import IcDate from "./imgs/formkit--date.svg";
import IcMileage from "./imgs/formkit--mileage.svg";

export default function CartCar() {
  return (
    <>
      <div>
        <div>
          <p>รถยนต์ทั้งหมด</p>
        </div>
        <form id="myForm">
          <div>
            <div>
              <label for="search">ค้นหา</label>
              <input type="search" name="search" id="" />
            </div>
            <div>
              <label for="">ยี่ห้อ</label>
              <select name="categories-brand" id="">
                <option value="AllBrand">ทั้งหมด</option>
                {[
                  ...new Set(Cars.map(car => car.brand))
                ].map((brand, index) => (
                  <option key={index} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <label for="Type">ประเภท</label>
              <select name="Type" id="">
                <option value="AllType">ทั้งหมด</option>
                {[
                  ...new Set(Cars.map(car => car.Type))
                ].map((type, index) => (
                  <option value={type} key={index}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label for="year">ปี</label>
              <select name="year" id="">
                <option value="AllType">ทั้งหมด</option>
                {[
                  ...new Set(Cars.map(car => car.year))
                ].sort((a, b) => a - b)
                  .map((year, index) => (
                    <option value={year} key={index}>{year}</option>
                  ))}
              </select>
            </div>
            <div>
              <label for="price">ราคา</label>
              <select name="price" id="">
                <option value="AllPrice">ทั้งหมด</option>
                <option value="&lt; 1,000,000">ต่ำกว่า 1 ล้าน</option>
                <option value="1,000,000-2,000,000">1-2 ล้าน</option>
                <option value="2,000,000-3,000,000">2-3 ล้าน</option>
                <option value="&gt; 3,000,000">มากกว่า 3 ล้าน</option>
              </select>
            </div>
          </div>
          <div>
            <p>พบ....รายการ</p>
            <button type="reset">ล้างตัวกรอง</button>
          </div>
        </form>
          <div >
          <div className="grid gap-1 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center">
            {Cars.map((Cars) => (
              <div key={Cars.id} className="flex flex-col gap-2 bg-[#1E293B] rounded-xl w-[240px] border border-gray-700 xl:w-[300px] 2xl:w-[320px] cursor-pointer group transition-shadow duration-300 hover:shadow-[0_10px_20px_rgba(37,99,235,0.19)]">
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
    </>
  )
}
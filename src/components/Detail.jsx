
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";


export default function Detail() {
  const location = useLocation();
  const detailCar = location.state

  return (
    <div className="bg-[#0F172A] p-8">
      <div className=" container mx-auto">
        <NavLink
          to="/"
          className="text-white flex items-center gap-2 mb-4 rounded-md p-2 hover:bg-[#1E293B] transition-colors duration-200 w-fit hover:text-blue-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-width="2"
              d="M11 6.5L5.5 12l5.5 5.5M6.75 12h13"
            />
          </svg>
          <p>กลับ</p>
        </NavLink>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 ">
          <div>
            <div className="w-[400px] h-[200px] xl:w-[700px] lg:w-[650px] lg:h-[430px] md:w-[550px] md:h-[350px]  flex justify-center items-center bg-white rounded-md overflow-hidden border border-[#1E293B]">
              <img src={detailCar.image} alt="Loading" />
            </div>
            <div>
              <img src={detailCar.image} alt="Loading" className="md:w-[150px] md:h-[90px] w-[120px] h-[70px]" />
            </div>
          </div>
          <div className="bg-[#1E293B] md:w-[750px] rounded-md p-6">
            <p className="bg-blue-900 w-[60px] text-sm px-2 text-center text-blue-400 rounded-lg mt-2">{detailCar.brand}</p>
            <p className="text-white mt-3">{detailCar.model}</p>
            <p className="text-blue-700 mt-2">฿{detailCar.price}</p>
            <p></p>
            <div className="grid grid-cols-2 gap-4 mt-4 ">
              <div>
                <p className="text-gray-500 text-sm">ปี</p>
                <p className="text-white">{detailCar.year}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">เลขไมล์</p>
                <p className="text-white">{detailCar.mileage}km</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">เกียร์</p>
                <p className="text-white">{detailCar.Gear}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">เชื้อเพลิง</p>
                <p className="text-white">{detailCar.Fuel}</p>
              </div>
            </div>

            <div>
              <p>รายละเอียด</p>
              <p>{detailCar.Detail}</p>
            </div>
            <div className="flex gap-4 mt-4 w-full">
              <button className="bg-white py-2 px-4 w-full rounded-lg">รายการโปรด</button>
              <button className="bg-blue-500 w-full rounded-lg">ซื้อเลย</button>
            </div>
          </div>
        </div>



      </div>
    </div>

  );
}
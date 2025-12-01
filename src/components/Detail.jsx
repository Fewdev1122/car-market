import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";


export default function Detail() {
  const location = useLocation();
  const detailCar = location.state
  const [isFavorite, setIsFavorite] = useState(false);
  const iconFavorite = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#dc2626" fill-opacity="0" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"/></path><path fill="none" stroke="#dc2626" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path></svg>
  
  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }



  return (
    <div className="bg-[#0F172A] p-8 pb-16 min-h-screen">
      <div className=" container mx-auto">
        <NavLink
          to="/"
          className="text-white flex items-center gap-2 mb-4 rounded-md p-2 hover:bg-[#1E293B] transition-colors duration-200 w-fit hover:text-blue-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeWidth="2"
              d="M11 6.5L5.5 12l5.5 5.5M6.75 12h13"
            />
          </svg>

          <p>กลับ</p>
        </NavLink>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <div className="w-full  aspect-video 
                    bg-white rounded-xl overflow-hidden border border-gray-700">
              <img
                src={detailCar.image}
                alt="Loading"
                className="w-full h-full object-cover"
              />
            </div>
            <img
              src={detailCar.image}
              alt="Loading"
              className="w-[170px] h-[100px] md:w-[210px] md:h-[120px] rounded-md object-cover border-2 border-blue-600 cursor-pointer"
            />
          </div>
          <div className="bg-[#1E293B] md:w-full rounded-xl p-8 border border-gray-700">
            <p className="bg-blue-900 w-[60px] text-sm px-2 text-center text-blue-400 rounded-lg mt-2">{detailCar.brand}</p>
            <p className="text-white mt-2">{detailCar.model}</p>
            <p className="text-blue-700 mt-2">฿{detailCar.price}</p>
            <div className="h-[1px] bg-gray-700 w-full my-6"></div>

            <div className="grid grid-cols-2 gap-4 mt-4 ">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="#3B82F6" d="M2 9c0-1.886 0-2.828.586-3.414S4.114 5 6 5h12c1.886 0 2.828 0 3.414.586S22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9m0 9c0 1.886 0 2.828.586 3.414S4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-5c0-.471 0-.707-.146-.854C21.707 12 21.47 12 21 12H3c-.471 0-.707 0-.854.146C2 12.293 2 12.53 2 13z" /><path stroke="#3B82F6" strokeLinecap="round" strokeWidth="2" d="M7 3v3m10-3v3" /></g></svg>
                <div>
                  <p className="text-gray-500 text-sm">ปี</p>
                  <p className="text-white">{detailCar.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#3B82F6" d="M10.758 15.192q.465.466 1.194.424q.729-.041 1.064-.524l5.253-7.323l-7.361 5.216q-.502.334-.559 1.038t.409 1.17M12 5q1.379 0 2.51.336q1.132.335 2.256 1.025l-.92.623q-.883-.482-1.828-.733T12 6Q8.675 6 6.337 8.338T4 14q0 1.05.288 2.075T5.1 18h13.8q.575-.95.838-1.975T20 13.9q0-.9-.232-1.894t-.734-1.852l.624-.92q.73 1.252 1.033 2.356T21 13.888q.006 1.29-.287 2.408q-.292 1.118-.91 2.254q-.12.2-.365.325T18.9 19H5.1q-.275 0-.51-.134q-.234-.135-.394-.393q-.496-.875-.846-1.974T3 14q0-1.844.7-3.481q.699-1.637 1.909-2.867T8.471 5.71T12 5m.04 6.96" stroke-width="0.5" stroke="#3B82F6" /></svg>
                <div>
                  <p className="text-gray-500 text-sm">เลขไมล์</p>
                  <p className="text-white">{detailCar.mileage} km</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="#3B82F6" strokeWidth="0.5" stroke="#3B82F6"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492a3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0a2.246 2.246 0 0 1-4.492 0" /><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" /></g></svg>
                <div>
                  <p className="text-gray-500 text-sm">เกียร์</p>
                  <p className="text-white">{detailCar.Gear}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#3B82F6" d="M18 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-6 0H6V5h6m7.77 2.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11C16.17 7 15.5 7.93 15.5 9a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 0 1-1 1a1 1 0 0 1-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H6c-1.11 0-2 .89-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0 0 18 21a2.5 2.5 0 0 0 2.5-2.5V9c0-.69-.28-1.32-.73-1.77" strokeWidth="0.5" stroke="#3B82F6" /></svg>
                <div>
                  <p className="text-gray-500 text-sm">เชื้อเพลิง</p>
                  <p className="text-white">{detailCar.Fuel}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-white mt-10 mb-4">รายละเอียด</p>
              <p className="text-gray-500">{detailCar.Detail}</p>
            </div>
            <div className="flex gap-4 mt-8 w-full">
              <button className={`${!isFavorite ? "text-black" : "text-red-600"} group bg-white py-2 px-4 w-full rounded-lg cursor-pointer flex justify-center gap-4  
                 hover:outline-red-600 hover:outline hover:bg-[#1E293B] hover:text-red-600 transition-colors duration-200`} onClick={toggleFavorite}>
                {!isFavorite? <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className=" fill-black  stroke-black  group-hover:fill-red-600 group-hover:stroke-red-600"
                >
                  <path
                    d="M4.24 12.25a4.2 4.2 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.24 4.24 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z"
                    strokeWidth="0.5"
                  />
                </svg> : iconFavorite}
                {!isFavorite? "เพิ่มในรายการโปรด"  : "ลบออกจากรายการโปรด"}
              </button>

              <button className="bg-blue-500 w-full rounded-lg px-4 text-white cursor-pointer hover:bg-blue-400 transition-colors duration-200">ซื้อเลย</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  );
}
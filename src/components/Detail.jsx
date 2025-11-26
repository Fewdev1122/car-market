
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
        <div className="flex">
          <div>
            <div className="w-[300px] h-[170px] md:w-[600px] md:h-[350px]  flex justify-center items-center bg-white rounded-md overflow-hidden border border-[#1E293B]">
              <img src={detailCar.image} alt="Loading"  />
            </div>
            <div>
              <img src={detailCar.image} alt="Loading" className="md:w-[150px] md:h-[90px] w-[120px] h-[70px]"/>
            </div>
          </div>
          <div>
            <p>{detailCar.brand}</p>
            <p>{detailCar.model}</p>
            <p>{detailCar.price}</p>
            <div className="flex">
              <div>
                <p>ปี</p>
                <p>{detailCar.year}</p>
              </div>
              <div>
                <p>เลขไมล์</p>
                <p>{detailCar.mileage}</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <p>เกียร์</p>
                <p>{detailCar.Gear}</p>
              </div>
              <div>
                <p>เชื้อเพลิง</p>
                <p>{detailCar.Fuel}</p>
              </div>
            </div>
            <div>
              <p>รายละเอียด</p>
              <p>{detailCar.Detail}</p>
            </div>
          </div>
        </div>
      


      </div>
    </div>

  );
}
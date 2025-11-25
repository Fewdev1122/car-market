import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";


export default function Detail() {
  const location = useLocation();
  const detailCar = location.state

  return (
    <div >
      <Navbar />
      <NavLink to="/">
        <p>กลับ</p>
      </NavLink>
      <p>รถ{detailCar.model}</p>

    </div>
      
  );
}
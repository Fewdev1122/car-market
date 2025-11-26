import React, {useState} from "react";
import Logocar from "./imgs/logocar.svg";
import HamMenu from "./imgs/ham-menu.svg";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [toggle,setToggle] = React.useState(false);
  
  const updateToggle = () => {
    setToggle(!toggle);
  }
  const linkClass = ({ isActive }) => 
    isActive
      ? "text-blue-500 "
      : "text-white hover:text-blue-400 transition-colors duration-200";


  return (
    <nav className="bg-[#0F172A] text-[#fff] flex justify-center relative h-auto py-4  z-50 sticky top-0 shadow-[0_10px_20px_rgba(0,0,0,0.19)]">
      <div className="container mx-auto flex ">
        <div className="flex flex-col md:flex-row justify-between w-full items-center">
          <NavLink to="/" className="text-xl font-bold flex items-center">
            <img src={Logocar} alt="Loading" className="mr-2 w-8 h-8"/>Car Market
          </NavLink>
          <div className={`
          ${!toggle ? 'hidden' : 'flex' } 
          flex-col 
          md:flex md:flex-row md:items-center
          md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0`}>
      
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5">
              <NavLink to="/" className={linkClass} >Home</NavLink>
              <NavLink to="/car" className={linkClass} >Car</NavLink>
              <NavLink to="/contact" className={linkClass} >Contact</NavLink>
            </div>
        
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 items-center">
              <NavLink className="hover:text-blue-500 cursor-pointer transition-colors duration-200">Sign in</NavLink>
              <NavLink className="hover:text-blue-500 cursor-pointer transition-colors duration-200 bg-blue-800 w-[90px] px-4 py-2  rounded-lg text-center">Sign up</NavLink>
            </div>
          </div>
          <div className="md:hidden absolute right-4">
            <img src={HamMenu} alt="" onClick={updateToggle} className="h-8 w-8 cursor-pointer "/>

            {toggle && (
            <div className="absolute right-0 mt-2 bg-[#0F172A] text-white flex flex-col space-y-3 p-4 rounded-lg shadow-lg z-50">
              <NavLink to="/" className={linkClass} onClick={() => setToggle(false)}>Home</NavLink>
              <NavLink to="/car" className={linkClass} onClick={() => setToggle(false)}>Car</NavLink>
              <NavLink to="/contact" className={linkClass} onClick={() => setToggle(false)}>Contact</NavLink>
              <NavLink className="hover:text-blue-500" onClick={() => setToggle(false)}>Sign in</NavLink>
              <NavLink className="bg-blue-800 px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition-colors duration-200" onClick={() => setToggle(false)}>Sign up</NavLink>
            </div>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
}
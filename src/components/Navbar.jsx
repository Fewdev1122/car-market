import React, {useState} from "react";
import Logocar from "./imgs/logocar.svg";
import HamMenu from "./imgs/ham-menu.svg";
export default function Navbar() {
  const [toggle,setToggle] = React.useState(false);
  const updateToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className="bg-[#0F172A] text-[#fff] flex justify-center relative h-auto py-4">
      <div className="container mx-auto flex ">
        <div className="flex flex-col md:flex-row justify-between w-full items-center">
          <div >
            <a href="/" className="text-xl font-bold flex items-center"><img src={Logocar} alt="Loading" className="mr-2 w-8 h-8"/>Car Market</a>
          </div>
          <div className={`
          ${!toggle ? 'hidden' : 'flex' } 
          flex-col 
          md:flex md:flex-row md:items-center
          space-y-4 md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5">
              <li><a href="#">Home</a></li>
              <li><a href="#">Car</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5">
              <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200"><a href="#">Sign in</a></li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors duration-200"><a href="#">Sign up</a></li>
            </ul>
          </div>
          <div className="md:hidden absolute right-4">
            <img src={HamMenu} alt="" onClick={updateToggle} className="h-8 w-8 cursor-pointer "/>
          </div>
        </div>
      </div>
    </nav>
  );
}
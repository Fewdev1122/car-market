import React from "react";
export default function Navbar() {
  return (
    <nav className="bg-[#0F172A] text-[#fff] flex justify-center h-16">
      <div className="w-[80%] flex ">
        <div className="flex justify-between w-full ">
          <div>
            <a href="/">Car Market</a>
          </div>
          <div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Car</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul>
              <li>Sign in</li>
              <li>Sign up</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
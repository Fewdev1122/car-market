import Navbar from "../components/Navbar";
import Heros from "../components/Heros";
import Recommend from "../components/recommend";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heros />
      <Recommend />
    </>
      
  );
}
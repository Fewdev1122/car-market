import React from "react";
import Cars from "../data/cars.json";


export default function Recommend() {
  return (
    <div>
      <div>
        <span>รถยนต์แนะนำ</span>
        <p>รถยนต์คุณภาพที่ได้รับการคัดสรรมาเป็นพิเศษ</p>
      </div>
      
        { Cars.slice(0, 4).map((Cars) => (
          <div>
            <div>
              <div>
                <div>
                  <img src={Cars.image} alt={Cars.model} width="250" height="100"/>
                </div>
                <div>
                  <p>{Cars.brand}</p>
                  <p>{Cars.model}</p>
                  <div>
                    <p>{Cars.year}</p>
                    <p>{Cars.mileage}</p>
                  </div>
                  <p>{Cars.price}</p>
                </div>
              </div>
            </div>
          </div>
      ))}
    </div>
  )
}
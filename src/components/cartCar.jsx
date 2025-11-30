
import Cars from "../data/cars.json";

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
      </div>
    </>
  )
}
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1E293B] text-white text-center p-4 ">
        <p className="p-9">ทำไมต้องเลือก CarMarket?</p>
        <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] py-7">
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#d1d5db" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.425-.75 4.05-2.963T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12z" strokeWidth="0.5" stroke="#d1d5db"/></svg>
            <p className="py-2">ปลอดภัย</p>
            <p className="text-gray-400">ตรวจสอบทุกรายการอย่างละเอียด<br /> ให้คุณมั่นใจในทุกการซื้อขาย</p>
          </div>
           <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path fill="#d1d5db" d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7" strokeWidth="25.5" stroke="#d1d5db"/></svg>
            <p className="py-2">รวดเร็ว</p>
            <p className="text-gray-400">ค้นหารถที่คุณต้องการได้อย่างง่ายดาย<br /> ด้วยระบบกรองที่ทันสมัย</p>
          </div>
           <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="none" stroke="#d1d5db" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h1v8m4-6v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0m7 0v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0"/></svg>
            <p className="py-2">คุณภาพ</p>
            <p className="text-gray-400">รถยนต์คุณภาพทุกคัน ผ่านการตรวจสอบ<br /> จากผู้เชี่ยวชาญ</p>
          </div>

        </div>
      </footer>
    </>
  )
}

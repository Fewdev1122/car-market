import React from 'react'

function Form() {
  return (
    <>
      <div className='bg-[#0F172A] py-12'>
        <div className='container mx-auto grid grid-flow-row md:grid-flow-col gap-9'>
          <div className='bg-[#1E293B] p-6 rounded-lg border border-gray-700'>
            <form action="POST" className='space-y-4'>
              <span className='text-white '>ส่งข้อความถึงเรา</span>
              <div className='flex flex-col text-white space-y-2'>
                <label htmlFor="name">ชื่อ-นามสกุล</label>
                <input type="text" name='name' placeholder='กรอกชื่อของคุณ' className='focus:border-blue-500 transition-colors duration-200 outline-none pl-3 text-sm h-10 bg-[#0F172A] border border-gray-700 rounded-lg'/>
              </div>
              <div className='flex flex-col text-white space-y-2'>
                <label htmlFor="email">อีเมล</label>
                <input type="email" name="email" id="" placeholder='your.eamil@example.com' className='focus:border-blue-500 transition-colors duration-200 outline-none pl-3 text-sm h-10 bg-[#0F172A] border border-gray-700 rounded-lg'/>
              </div>
              <div className='flex flex-col text-white space-y-2'>
                <label htmlFor="tel">เบอร์โทรศัพท์</label>
                <input type="tel" name="tel" id="" placeholder='0xx-xxx-xxxx' className='focus:border-blue-500 transition-colors duration-200 outline-none pl-3 text-sm h-10 bg-[#0F172A] border border-gray-700 rounded-lg'/>
              </div>
              <div className='flex flex-col text-white space-y-2'>
                <label htmlFor="text">ข้อความ</label>
               <textarea name="text" id="" placeholder='บอกเราเกี่ยวกับความต้องการของคุณ...' className='focus:border-blue-500 transition-colors duration-200 outline-none resize-none p-3 text-sm bg-[#0F172A] border border-gray-700 rounded-lg'></textarea>
              </div>
              <button type='summit' className='bg-blue-600 w-full text-white py-2 text-sm rounded-lg hover:bg-blue-500 transition-colors duration-200'>ส่งข้อความ</button>
            </form>
          </div>
          <div>
            <span>ข้อมูลติดต่อ</span>
            <p>เรายินดีให้บริการและตอบคำถามเกี่ยวกับรถยนต์ทุกรุ่น สามารถติดต่อเราได้ผ่านช่องทางต่างๆ<br /> ด้านล่าง</p>
            <div>
              <div>
                <span>ที่อยู่</span>
                <p>123 ถนนสุขุมวิท แขวงคลองเตย<br />
                  เขตคลองเตย กรุงเทพฯ 10110</p>
              </div>
              <div>
                <span>โทรศัพท์</span>
                <p>02-123-4567 <br />
                  091-234-5678 (ฝ่ายขาย)</p>
              </div>
              <div>
                <span>อีเมล</span>
                <p>info@carmarket.com <br />
                  sales@carmarket.com</p>
              </div>
              <div>
                <span>เวลาทำการ</span>
                <p>จันทร์ - ศุกร์: 9:00 - 18:00 <br />
                  เสาร์ - อาทิตย์: 10:00 - 17:00</p>
              </div>
              <div>
                <p>แผนที่ตำแหน่งร้าน</p>
                <p>Google Maps Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
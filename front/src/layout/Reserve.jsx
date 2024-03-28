import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function ShoppingCart() {
  return (
   <div class="container mx-auto mt-10">
  <div class="sm:flex shadow-md my-10">
    <div class="  w-full  sm:w-3/4 bg-white px-10 py-10">
      <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div class="md:w4/12 2xl:w4/4 w-full">
          <img src="https://i.pinimg.com/564x/c8/ec/e7/c8ece7e1ce7896e2f7aaa3af4c0e9bda.jpg" alt="Black Leather Purse" class="h-full object-center object-cover md:block hidden" />
        </div>
        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        </div>
      </div>
    </div>
    <div id="summary" class=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-semibold text-sm uppercase">ห้อง: เตียงเดี่ยว</span>
      </div>
      <div>
        <label class="font-medium inline-block mb-3 text-sm uppercase">
              ประเภท: Sweet
            </label>
      </div>
      <div class="py-2">
  <label class="font-medium block mb-3 text-sm uppercase">
    ชื่อ: ธนพร ภานุรักษ์
  </label>
  <label class="font-medium block mb-3 text-sm uppercase">
    เบอร์โทรศัพท์: 0614317610
  </label>
  <label class="font-medium block mb-3 text-sm uppercase">
    ราคา: 8000 บาท
  </label>
  <label class="font-medium block mb-3 text-sm uppercase">
    วันที่จอง: 26-01-2567
  </label>
  <label class="font-medium block mb-3 text-sm uppercase">
    Check-in: 28-01-2567
  </label>
  <label class="font-medium block mb-3 text-sm uppercase">
    Check-out: 31-01-2567
  </label>
  <label class="font-medium block mb-3 text-sm uppercase">
    จำนวนคืน: 2 คืน
  </label>
  <label class="font-medium block mb-3 text-sm uppercase">
    ผู้ใหญ่/คน: 2 คน
  </label>
  <label class="font-medium block mb-3 text-sm uppercase">
    เด็ก/ห้อง: 1 คน
  </label>
</div>
      <div class="border-t mt-3">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>$8000</span>
        </div>
        <Link to="/payment" className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-4 px-6 text-lg text-white uppercase w-full">
  จอง
</Link>
      </div>
      <Link to="/Review">
            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              Review
            </a>
          </Link>
    </div>
  </div>
</div>


  );
}
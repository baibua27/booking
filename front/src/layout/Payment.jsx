import React, { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (tableNumber) => {
    setSelectedTable(tableNumber);
  };

  const movies = [
    {
      id: 1,
      imageSrc: "https://i.pinimg.com/736x/43/9b/5a/439b5a502f36de19765a0961819101d0.jpg", // เปลี่ยน URL ของภาพไปที่ลิงก์ของรูปภาพที่ต้องการ
      // imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      // href: "/" 
    },
];

  return (
    <div className="mt-10 p-5 border w-1/3 w- min-w-[600px] h-auto rounded-[20px] mx-auto bg-gray-100 shadow-md flex">
      <div>
        {movies.map((product) => (
          <Link key={product.id} to={product.href} className="group">
            <div className="flex gap-5 pb-10 pl-10">
                <p className="text-red-600 font-bold text-3xl mx-44">ชำระเงิน</p>
              </div>
              <p className="text-black text-center">Please scan the QR code  </p>
              <p className="text-black text-center"> to pay for accommodation </p>
              <p className="text-black text-center"> Thank you</p>
            <div className="w-56 mx-44  ">
              <img src={product.imageSrc} alt={product.imageAlt} />
            </div>

            <div className="flex gap-5 pb-3 pl-1 ">
                {/* <p className="text-gray-500 mx-48">Date: Dic 14  Time: 20:30</p> */}
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Payment;
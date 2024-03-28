import React from "react";

export default function Record() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          ประวัติการเข้าพัก
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    วันที่ Check-in
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    วันที่ Check-out
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ประเภทห้องพัก
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ชื่อ-นามสกุล
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   เบอร์โทรศัพท์
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Sample Data */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    28-01-2567
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    31-01-2567
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ห้อง Sweet
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ธนพร ภานุรักษ์
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    0614317610
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    31-02-2567
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    02-02-2567
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ห้อง ordinary
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ปาริชาติ สาอุบล
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    0627562453
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    04-02-2567
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    06-02-2567
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ห้อง Sweet
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ปริฉัตร คำพาวิจินิ
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    0966541068
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    08-02-2567
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    10-02-2567
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ห้อง ordinary
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ปิยาภรณ์ ภูสีเงิน
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    0610750678
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    09-02-2567
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    11-02-2567
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ห้อง ordinary
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    จิราภรณ์ อ่อนโพธา
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    0822063286
                  </td>
                </tr>
                {/* End of Sample Data */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}
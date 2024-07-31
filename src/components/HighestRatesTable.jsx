import React from 'react';

const HighestRatesTable = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-black mb-4">
        Highest Exchange Rates
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Currency
              </th>
              <th scope="col" className="px-6 py-3">
                Bank
              </th>
              <th scope="col" className="px-6 py-3">
                Cash Buying
              </th>
              <th scope="col" className="px-6 py-3">
                Cash Selling
              </th>
              <th scope="col" className="px-6 py-3">
                Transactional Buying
              </th>
              <th scope="col" className="px-6 py-3">
                Transactional Selling
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                USD
              </th>
              <td className="px-6 py-4">
                Bank A
              </td>
              <td className="px-6 py-4">
                80.0203
              </td>
              <td className="px-6 py-4">
                81.6207
              </td>
              <td className="px-6 py-4">
                80.0203
              </td>
              <td className="px-6 py-4">
                81.6207
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                EUR
              </th>
              <td className="px-6 py-4">
                Bank B
              </td>
              <td className="px-6 py-4">
                90.0203
              </td>
              <td className="px-6 py-4">
                91.6207
              </td>
              <td className="px-6 py-4">
                90.0203
              </td>
              <td className="px-6 py-4">
                91.6207
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                GBP
              </th>
              <td className="px-6 py-4">
                Bank B
              </td>
              <td className="px-6 py-4">
                90.0203
              </td>
              <td className="px-6 py-4">
                91.6207
              </td>
              <td className="px-6 py-4">
                90.0203
              </td>
              <td className="px-6 py-4">
                91.6207
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                AED
              </th>
              <td className="px-6 py-4">
                Bank B
              </td>
              <td className="px-6 py-4">
                90.0203
              </td>
              <td className="px-6 py-4">
                91.6207
              </td>
              <td className="px-6 py-4">
                90.0203
              </td>
              <td className="px-6 py-4">
                91.6207
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                CAD
              </th>
              <td className="px-6 py-4">
                Bank B
              </td>
              <td className="px-6 py-4">
                90.0203
              </td>
              <td className="px-6 py-4">
                91.6207
              </td>
              <td className="px-6 py-4">
                90.0203
              </td>
              <td className="px-6 py-4">
                91.6207
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                SAR
              </th>
              <td className="px-6 py-4">
                Bank B
              </td>
              <td className="px-6 py-4">
                90.0203
              </td>
              <td className="px-6 py-4">
                91.6207
              </td>
              <td className="px-6 py-4">
                90.0203
              </td>
              <td className="px-6 py-4">
                91.6207
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighestRatesTable;

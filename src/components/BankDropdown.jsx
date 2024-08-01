import React, { useState, useEffect } from 'react';

const banks = [
  'Commercial Bank of Ethiopia',
  'Awash Bank S.C.',
  'Dashen Bank S.C.',
  'Bank of Abyssinia',
  'Wegagen Bank S.C.',
  'Hibret Bank S.C.',
  'Nib International Bank S.C.',
  'Cooperative Bank of Oromia',
  'Lion International Bank S.C.',
  'Oromia Bank S.C.',
  'Zemen Bank S.C.',
  'Bunna Bank S.C.',
  'Berhan Bank S.C.',
  'Abay Bank S.C.',
  'Addis International Bank S.C',
  'Enat Bank S.C.',
  'Global Bank S.C',
  'ZamZam Bank S.C.',
  'Shabelle Bank S.C.',
  'Goh Betoch Bank S.C.',
  'Hijra Bank S.C.',
  'Ahadu Bank S.C.',
  'Siinqee Bank S.C.',
  'Tsedey Bank S.C.',
  'Tsehay Bank S.C.',
  'Amhara Bank S.C.',
  'Gadaa Bank S.C.',
  'Sidama Bank S.C.',
  'Rammis Bank S.C.',
];

const BankDropdown = () => {
  const [selectedBank, setSelectedBank] = useState('Commercial Bank of Ethiopia');
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    // Fetch exchange rates for the default selected bank when the component mounts
    fetchExchangeRates(selectedBank);
  }, []);

  const fetchExchangeRates = async (bank) => {
    try {
      const response = await fetch(`http://localhost:3001/api/exchange-rates`);
      const data = await response.json();
      // Filter data for the selected bank
      const filteredRates = data.filter(rate => rate.bank === bank);
      setExchangeRates(filteredRates);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  };

  const handleBankClick = (bank) => {
    setSelectedBank(bank);
    fetchExchangeRates(bank);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Bank Exchange Rates Comparison
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="w-full lg:w-1/3">
          <ul className="h-[30rem] overflow-y-auto bg-white dark:bg-gray-700 rounded-lg shadow">
            {banks.map((bank, index) => (
              <li key={index} onClick={() => handleBankClick(bank)} className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                {bank}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-2/3">
          {selectedBank ? (
            <div>
              <h3 className="text-xl font-bold mb-4">{selectedBank} Exchange Rates</h3>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">Currency</th>
                      <th scope="col" className="px-6 py-3">Cash Buying</th>
                      <th scope="col" className="px-6 py-3">Cash Selling</th>
                      <th scope="col" className="px-6 py-3">Transactional Buying</th>
                      <th scope="col" className="px-6 py-3">Transactional Selling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exchangeRates.map((rate, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white border-b dark:bg-gray-900 dark:border-gray-700' : 'bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{rate.currency}</th>
                        <td className="px-6 py-4">{rate.cashBuying}</td>
                        <td className="px-6 py-4">{rate.cashSelling}</td>
                        <td className="px-6 py-4">{rate.transactionalBuying}</td>
                        <td className="px-6 py-4">{rate.transactionalSelling}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>Select a bank to see exchange rates</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BankDropdown;

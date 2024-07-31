import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import LowestRatesTable from './components/LowestRatesTable';
import HighestRatesTable from './components/HighestRatesTable';
import BankDropdown from './components/BankDropdown';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="flex-grow p-4">
        <LowestRatesTable />
        <HighestRatesTable />
        <BankDropdown />
      </main>
    </div>
  );
};

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import LowestRatesTable from './components/LowestRatesTable';
import HighestRatesTable from './components/HighestRatesTable';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="flex-grow p-4">
        <LowestRatesTable />
        <HighestRatesTable />
      </main>
    </div>
  );
};

export default App;

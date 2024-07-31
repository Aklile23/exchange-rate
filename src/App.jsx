import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BestRatesTable from './components/BestRatesTable';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="flex-grow p-4">
        <BestRatesTable />
      </main>
    </div>
  );
};

export default App;

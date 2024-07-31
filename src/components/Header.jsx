import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-slate-700 text-white overflow-hidden py-12">
      <div className="flex flex-col items-center justify-center min-h-[300px] px-5">
        <h1 className="text-4xl font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl">EXCHANGE INFO</h1>
        <p className="mt-7 max-w-2xl text-center">
        Providing the Most Recent Exchange Rates Updated Regularly.
        </p>
      </div>
    </header>
  );
};

export default Header;

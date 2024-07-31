import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© 2024 Live Exchange Rates. All rights reserved.</p>
      <p>Last updated: <span id="last-updated">2024-07-31 12:00</span></p>
    </footer>
  );
}

export default Footer;

const puppeteer = require('puppeteer');
const ExchangeRate = require('../models/ExchangeRate'); // Ensure this path is correct

const scrapeCBE = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the page
    await page.goto('https://combanketh.et/en/exchange-rate/', { waitUntil: 'networkidle2' });

    // Wait for the table to load
    await page.waitForSelector('table tbody tr', { timeout: 10000 }); // Increase timeout if needed

    // Extract data
    const rates = await page.evaluate(() => {
      const rows = document.querySelectorAll('table tbody tr');
      const result = [];

      rows.forEach(row => {
        const cols = row.querySelectorAll('td');
        const currencyElement = cols[0].querySelector('.text-sm.font-medium.text-gray-900');

        if (currencyElement) {
          const currency = currencyElement.innerText.trim();
          const cashBuying = parseFloat(cols[1].innerText.trim());
          const cashSelling = parseFloat(cols[2].innerText.trim());
          const transactionalBuying = parseFloat(cols[3].innerText.trim());
          const transactionalSelling = parseFloat(cols[4].innerText.trim());

          if (currency) {
            result.push({
              bank: 'Commercial Bank of Ethiopia',
              currency,
              cashBuying,
              cashSelling,
              transactionalBuying,
              transactionalSelling,
              // timestamp: new Date(), // Correctly initialize timestamp as a Date object
            });
          }
        }
      });

      return result;
    });

    console.log('Rates to be saved:', rates); // Debug log to inspect rates array

    await browser.close();

    // Check that each entry has a valid Date
    rates.forEach(rate => {
      if (!(rate.timestamp instanceof Date)) {
        console.warn(`Invalid timestamp for currency ${rate.currency}:`, rate.timestamp);
      }
    });

    // Insert rates into MongoDB
    if (rates.length > 0) {
      await ExchangeRate.insertMany(rates);
      console.log('Exchange rates from Commercial Bank of Ethiopia saved');
    } else {
      console.log('No exchange rates found to save.');
    }
  } catch (error) {
    console.error('Error scraping Commercial Bank of Ethiopia:', error);
  }
};

module.exports = scrapeCBE;

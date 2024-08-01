const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

// Scrape function for Commercial Bank of Ethiopia
const scrapeCBE = async () => {
  try {
    // Make a request to the CBE exchange rate page
    const { data } = await axios.get('https://combanketh.et/en/exchange-rate/');
    
    // Load the HTML into Cheerio
    const $ = cheerio.load(data);

    // Array to hold all exchange rates
    const rates = [];

    // Select each table row
    $('table tbody tr').each((i, row) => {
      const bank = 'Commercial Bank of Ethiopia'; // Static value for bank name

      // Extract currency code and rates
      const currency = $(row).find('td').eq(0).find('.text-sm.font-medium.text-gray-900').text().trim();
      const cashBuying = parseFloat($(row).find('td').eq(1).text().trim());
      const cashSelling = parseFloat($(row).find('td').eq(2).text().trim());
      const transactionalBuying = parseFloat($(row).find('td').eq(3).text().trim());
      const transactionalSelling = parseFloat($(row).find('td').eq(4).text().trim());
      const timestamp = new Date();

      // Check if currency is present to avoid empty rows
      if (currency) {
        rates.push({
          bank,
          currency,
          cashBuying,
          cashSelling,
          transactionalBuying,
          transactionalSelling,
          timestamp,
        });
      }
    });

    console.log('Rates to be saved:', rates);

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

// Export the scrape function
module.exports = scrapeCBE;

// Optional: Run the scraper directly for testing purposes
if (require.main === module) {
  scrapeCBE().then(() => {
    mongoose.connection.close();
  });
}

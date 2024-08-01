const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const ExchangeRate = require('./models/ExchangeRate');

// Connect to MongoDB Atlas only if scraper runs independently
if (require.main === module) {
  mongoose.connect('mongodb+srv://akliletilahun:RK9mmJqQefLTnpJj@cluster0.vos2zdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Connected to MongoDB Atlas for scraping');
      scrapeCBE().then(() => {
        mongoose.connection.close();
      });
    })
    .catch(err => {
      console.error('Error connecting to MongoDB Atlas:', err);
    });
}

// Scrape exchange rates from Commercial Bank of Ethiopia
const scrapeCBE = async () => {
  try {
    const { data } = await axios.get('https://combanketh.et/en/exchange-rate/');
    const $ = cheerio.load(data);

    const rates = [];
    $('table tbody tr').each((i, row) => {
      const bank = 'Commercial Bank of Ethiopia';
      const currency = $(row).find('td').eq(0).text().trim();
      const cashBuying = $(row).find('td').eq(1).text().trim();
      const cashSelling = $(row).find('td').eq(2).text().trim();
      const transactionalBuying = $(row).find('td').eq(3).text().trim();
      const transactionalSelling = $(row).find('td').eq(4).text().trim();
      const timestamp = new Date();

      if (currency) {
        rates.push({
          bank,
          currency,
          cashBuying,
          cashSelling,
          transactionalBuying,
          transactionalSelling,
          timestamp
        });
      }
    });

    // Log the data to be saved
    console.log('Rates to be saved:', rates);

    // Save rates to MongoDB
    await ExchangeRate.insertMany(rates);
    console.log('Exchange rates from Commercial Bank of Ethiopia saved');
  } catch (error) {
    console.error('Error scraping Commercial Bank of Ethiopia:', error);
  }
};

// Export the scrape function for server.js usage
module.exports = scrapeCBE;

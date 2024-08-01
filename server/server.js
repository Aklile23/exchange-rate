const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cron = require('node-cron');
const dotenv = require('dotenv');
const ExchangeRate = require('./models/ExchangeRate'); // Import the ExchangeRate model
const scrapeCBE = require('./scrapers/scrapeCBE'); // Import the scraper function

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3001; // Use the port from the environment variable, or default to 3001

app.use(cors());
app.use(express.json());

// Connect to MongoDB using the connection string from the environment variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

app.get('/', (req, res) => {
  res.send('Exchange Rate Server is running!');
});

app.get('/api/exchange-rates', async (req, res) => {
  try {
    // Fetch all exchange rates from the MongoDB collection
    const exchangeRates = await ExchangeRate.find();
    res.json(exchangeRates);
  } catch (err) {
    res.status(500).send('Error fetching exchange rates');
  }
});

// Schedule scraping every 10 minutes
cron.schedule('*/10 * * * *', () => {
  console.log('Running scheduled scraping task');
  scrapeCBE().then(() => {
    console.log('Scraping completed');
  }).catch(err => {
    console.error('Error during scraping:', err);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

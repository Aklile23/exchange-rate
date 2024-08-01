const mongoose = require('mongoose');
const ExchangeRate = require('../server/models/ExchangeRate');

let isConnected = false; // Track the connection status

// Connect to the MongoDB database
const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
};

// Serverless function handler
module.exports = async (req, res) => {
  await connectToDatabase();

  if (req.method === 'GET') {
    try {
      const exchangeRates = await ExchangeRate.find();
      res.status(200).json(exchangeRates);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      res.status(500).json({ error: 'Error fetching exchange rates' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

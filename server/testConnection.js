const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exchangeRates')
  .then(() => {
    console.log('Connected to MongoDB');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

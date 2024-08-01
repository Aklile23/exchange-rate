const mongoose = require('mongoose');

const exchangeRateSchema = new mongoose.Schema({
  bank: String,
  currency: String,
  cashBuying: String,
  cashSelling: String,
  transactionalBuying: String,
  transactionalSelling: String
});

const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);

module.exports = ExchangeRate;

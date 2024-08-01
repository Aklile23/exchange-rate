const mongoose = require('mongoose');

const exchangeRateSchema = new mongoose.Schema({
  bank: String,
  currency: String,
  cashBuying: Number,
  cashSelling: Number,
  transactionalBuying: Number,
  transactionalSelling: Number,
  // timestamp: { type: Date, default: Date.now }, // Ensure the timestamp field is set to Date type
});

module.exports = mongoose.model('ExchangeRate', exchangeRateSchema);

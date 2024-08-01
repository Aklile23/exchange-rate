const mongoose = require('mongoose');
const ExchangeRate = require('./models/ExchangeRate'); // Ensure the path is correct

mongoose.connect('mongodb://127.0.0.1:27017/exchangeRates')
  .then(() => {
    console.log('Connected to MongoDB');
    seedDatabase();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

  const initialRates = [
    { bank: 'Commercial Bank of Ethiopia', currency: 'USD', cashBuying: '80.0203', cashSelling: '100', transactionalBuying: '80.0203', transactionalSelling: '81.6207' },
    { bank: 'Commercial Bank of Ethiopia', currency: 'EUR', cashBuying: '90.0203', cashSelling: '91.6207', transactionalBuying: '90.0203', transactionalSelling: '91.6207' },
    { bank: 'Commercial Bank of Ethiopia', currency: 'GBP', cashBuying: '90.0203', cashSelling: '91.6207', transactionalBuying: '90.0203', transactionalSelling: '91.6207' },
    { bank: 'Commercial Bank of Ethiopia', currency: 'AED', cashBuying: '90.0203', cashSelling: '91.6207', transactionalBuying: '90.0203', transactionalSelling: '91.6207' },
    { bank: 'Commercial Bank of Ethiopia', currency: 'CAD', cashBuying: '90.0203', cashSelling: '91.6207', transactionalBuying: '90.0203', transactionalSelling: '91.6207' },
    { bank: 'Commercial Bank of Ethiopia', currency: 'SAR', cashBuying: '90.0203', cashSelling: '91.6207', transactionalBuying: '90.0203', transactionalSelling: '91.6207' },
    { bank: 'Awash Bank S.C.', currency: 'USD', cashBuying: '79.5000', cashSelling: '81.1000', transactionalBuying: '79.5000', transactionalSelling: '81.1000' },
    { bank: 'Awash Bank S.C.', currency: 'EUR', cashBuying: '89.5000', cashSelling: '91.1000', transactionalBuying: '89.5000', transactionalSelling: '91.1000' },
    { bank: 'Awash Bank S.C.', currency: 'GBP', cashBuying: '79.5000', cashSelling: '81.1000', transactionalBuying: '79.5000', transactionalSelling: '81.1000' },
    { bank: 'Awash Bank S.C.', currency: 'AED', cashBuying: '89.5000', cashSelling: '91.1000', transactionalBuying: '89.5000', transactionalSelling: '91.1000' },
    { bank: 'Awash Bank S.C.', currency: 'CAD', cashBuying: '79.5000', cashSelling: '81.1000', transactionalBuying: '79.5000', transactionalSelling: '81.1000' },
    { bank: 'Awash Bank S.C.', currency: 'SAR', cashBuying: '89.5000', cashSelling: '91.1000', transactionalBuying: '89.5000', transactionalSelling: '91.1000' },
  ];

const seedDatabase = async () => {
  try {
    await ExchangeRate.deleteMany({});
    await ExchangeRate.insertMany(initialRates);
    console.log('Database seeded');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

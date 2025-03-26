const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/food-ordering')
  .catch(e => {
    console.error('Connection error:', e.message);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {

});

module.exports = db;

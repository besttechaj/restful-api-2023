const mongoose = require('mongoose');

const connectDb = (uri) => {
  console.log('connect database');
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;

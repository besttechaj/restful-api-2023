const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  price: { type: Number, trim: true, required: true },
  company: {
    type: String,
    trim: true,
    required: true,
    enum: {
      values: ['apple', 'samsung', 'dell', 'mi', 'oppo', 'nokia'],
      msg: '{VALUE} is not supported',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

//create a new  collection
module.exports = mongoose.model('Product', productSchema);

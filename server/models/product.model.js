

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // mongoose auto makes Ids
  title: String,
  price: Number,
  description: String
}, { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
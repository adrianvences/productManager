

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // mongoose auto makes Ids
  title: String,
  price: Number,
  description: String,
  isComplete: Boolean, 
}, { timestamps: true }
);

const Product = mongoose.model('Product', productSchema); // right here we are registering product as mongoose model // the minute i do that this 
// model has access to all mongoose model methods avaliable on mongoose docs

module.exports = Product; // here we export // we import in controllers 
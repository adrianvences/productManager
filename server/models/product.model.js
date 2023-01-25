

// notes
// we have to set up model for validations 

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // mongoose auto makes Ids
  // model to hold error string
  title: {
    type: String,
    required: [true, 'Title is required!']
  },
  price: {
    type: Number,
    required: [true,'Price is required!']
  },
  description: {
    type: String,
    required: [true, 'description is required!']
  },
  isComplete: Boolean, 
}, { timestamps: true }
);

const Product = mongoose.model('Product', productSchema); // right here we are registering product as mongoose model // the minute i do that this 
// model has access to all mongoose model methods avaliable on mongoose docs

module.exports = Product; // here we export // we import in controllers 
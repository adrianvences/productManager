
const Product = require('../models/product.model');


const message = (req,res) => {
  res.json({
    message: 'Product manager' // key name isnt neccesary 
  });
};

// create method
const create = (req,res) => {
  Product.create(req.body)
    .then(product => res.status(201).json(product))
    .catch(err => res.status(400).json(err));
}

module.exports = {message,create};

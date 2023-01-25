
// 

const Product = require('../models/product.model');  // here we import from model file 


const message = (req,res) => {
  res.json({
    message: 'Product manager' // key name isnt neccesary 
  });
};

// create method
const create = (req,res) => {
  Product.create(req.body)

//  take the todo that was created// set it with a status of 201 because something was created // turn it into json
    .then(product => res.status(201).json(product))
    .catch(err => res.status(400).json(err));
}


// find all method
const findAll = (req,res) => {
  Product.find()
  // once we find the todo, well send it with a stat of 200 because nothing was created and then send it along as json
    .then(products => res.status(200).json(products))
    .catch(err => res.status(400).json(err));
};

// find one by id method
const findOne = (req,res) => {
  const {id} = req.params;
  Product.findById(id)
  .then(product => res.status(200).json(product))
  .catch(err => res.status(400).json(err));
};

// update
const updateOne = (req, res) => {
  const {id} = req.params;

  Product.findByIdAndUpdate(id,req.body, {new:true,runValidators:true}) // need this for update to run validations 
  .then(product => res.status(200).json(product))
  .catch(err => res.status(400).json(err));
}

const deleteOne = (req,res) => {
  const {id} = req.params;
  Product.findByIdAndDelete(id)
  // returns product that was deleted // and sends that along with json
  .then((product) => res.status(200).json(product))
  .catch((err) => res.status(400).json(err));

}

module.exports = {message,create,findAll,findOne,updateOne, deleteOne};



// const PersonController = require('../controllers/person.controller');
const {create,message ,findAll,findOne} = require('../controllers/product.controller');

const express = require('express');
const productRouter = express.Router();
// module.exports = function(app){
//     app.get('/api', PersonController.index);
// }

productRouter
  .route('/')
  .get(message);

productRouter
  .route('/products')
  .post(create)  // these
  .get(findAll); //these share the same path but different methods post and get 
  
productRouter
  .route('/products/:id')
  .get(findOne)

  module.exports = productRouter;



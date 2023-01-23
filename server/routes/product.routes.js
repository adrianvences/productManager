

// const PersonController = require('../controllers/person.controller');
const {create,message} = require('../controllers/product.controller');

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
  .post(create)

  module.exports = productRouter;



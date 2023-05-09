const express = require('express');
const {
  getAllProducts,
  getAllProductsTesting,
  searching,
  searchingMatchAnyOne,
} = require('../controllers/product');
const router = express.Router();

//routing path...

router.route('/').get(getAllProducts);

router.route('/testing').get(getAllProductsTesting);

router.route('/searchingdata').get(searching); //while searching use api/testing/?key=value inside url

router.route('/searchingDataMatch').get(searchingMatchAnyOne);

module.exports = router;

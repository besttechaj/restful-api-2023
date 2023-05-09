//THIS FILE IS USED TO UPDATE THE DATABASE/COLLECTION ONLY

//importing the databse
const connectDB = require('./db/connect');

//importing collection/model
const Product = require('./models/product');

//requiring the dotenv
require('dotenv').config();

//requiring the json file
const ProductJson = require('./products.json');

//performing the operation inside a function

const start = async () => {
  try {
    //connection to the database
    await connectDB(process.env.MONGODB_URL);
    //without .delete() , it will concat the new existing  data changes with the older once.
    //.deleteMany() will delete all the previous records and update the new inserted data.
    await Product.deleteMany();
    await Product.create(ProductJson);

    console.log('success');
  } catch (error) {
    console.log(error);
  }
};
start();

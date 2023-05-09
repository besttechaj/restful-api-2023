//requiring the dotenv file from dotenv module
require('dotenv').config();
const express = require('express');
const app = express();
//to use middleware we need to import the middleware file
const PORT = process.env.PORT || 5000;

const connectDb = require('./db/connect');

//creating a api server
/*
app.get('/', (req, res) => {
  res.send('hello from the server side');
});
*/

// MIDDLEWARE(SET NEW ROUTER)
//since we have normal method (app.get(), app.put(),app.delete()) to perform api routing above but we can perform the above operation using middleware (that is express routing eg route.get(), route.put(), route.delete()...) to make our code more reliable and less complexity.
//so to use middleware we need give an acknowledgement to our app that we are changing our normal routing structure to middleware[expressRouting()]
//setting new middleware 's route that is localhost:5000/api/..
//first we need to require the router
const products_routes = require('./routes/product');
app.use('/api/products/', products_routes);

//listen the server on port through calling a function..
//we are using async to deal with promise
const start = async () => {
  try {
    //calling my  mongoDb function
    await connectDb(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(
        `server is successfully connected and listening to port no.: ${PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start();

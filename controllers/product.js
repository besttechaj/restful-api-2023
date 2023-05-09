//requiring the model/collection
const Product = require('../models/product');

//below function will fetch all records
getAllProducts = async (req, res) => {
  //passing find({}) to get all data
  //.find() will return me a promise
  const myData = await Product.find({});

  //passing the data to display..
  res.status(200).json(myData);
};

//below function will fetch specified  records using key and value pair
getAllProductsTesting = async (req, res) => {
  //passing find({id}) to get the specified  data using id
  //.find() will return me a promise
  const myData = await Product.find({ name: 'iphone' });

  //passing the data to display..
  res.status(200).json(myData);
};

//   req.query  !!!!IMPORTANT  --> used for searching,sorting .filtering,pagination.
searching = async (req, res) => {
  //performing search operation inside api fetched json's data
  const myData = await Product.find(req.query);
  res.send(myData);

  //to get user's searching
  console.log(req.query);
};

//if any of the query matches display the result
// eg->url-> ..upi/products/searchingdataMatch?name=apple&li=koko
// In the above url we have one valid query and other is invalid key and value pair(i.e. li=koko)...So if any one query matches display the result
searchingMatchAnyOne = async (req, res) => {
  //fetching the company from query
  const { company, name, featured } = req.query;
  const queryObject = {};
  //if user has written/demanded company in the query
  if (company) {
    //make a variable named as company  inside queryOBject and store the fetched user's company query request in it.
    queryObject.company = company;
  }
  if (featured) {
    queryObject.company = featured;
  }

  if (name) {
    //$regex->Provides regular expression capabilities for pattern matching strings in queries
    //syntax->{ <field>: { $regex: /pattern/, $options: '<options>' } }
    //here options->i(case insensitivity),m,x,s
    //to get all the matched record ... case sensitive
    queryObject.name = { $regex: name, $options: 'i' };
  }

  //to get user's searching in console
  console.log(req.query);

  //get me the query
  const myData = await Product.find(queryObject); //if the user has written query regarding the company then return the company matched data else return all data.
  res.send(myData);
};

module.exports = {
  getAllProducts,
  getAllProductsTesting,
  searching,
  searchingMatchAnyOne,
};

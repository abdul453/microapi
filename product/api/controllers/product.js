const db = require('../../config/db.config.js');
const Product = db.products;
 
// Post a Customer
exports.create = (req, res) => {  
  // Save to MariaDB database
  //console.log(req.body);


  Product.create({  
      name: req.body.name,
      price: req.body.price
    })
    .then(product => {    
      // Send created customer to client
      res.json(product);
    })
    .catch(error => res.status(400).send(error))
};
 

 

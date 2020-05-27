const db = require('../../config/db.config.js');
const Customer = db.customers;
const { check, validationResult } = require('express-validator');


exports.validate = (method) => {
  switch (method) {
    case 'createUser': {
     return [ 
        check('name', 'Name is required').exists(),
        check('age', 'Age is required').exists(),
        check('phone').optional()
       ]   
    }
  }
}

// Post a Customer
exports.create = async (req, res,next) => {  
  // Save to MariaDB database

  try {

    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

      if (!errors.isEmpty()) {
        
        res.status(422).json({ errors: errors.array() });
        return;
      }



      Customer.create({  
          name: req.body.name,
          age: req.body.age,
          phone:req.body.phone
        })
        .then(customer => {    
          // Send created customer to client
          res.json(customer);
        })
        .catch(error => res.status(400).send(error))
  } 
    catch(err) {
     return next(err)
   }




};
 


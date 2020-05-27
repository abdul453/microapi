const { check, validationResult } = require('express-validator');

exports.validate = (method) => {
  switch (method) {
    case 'createUser': {
     return [ 
        check('name', 'Name is required').exists(),
        check('email', 'Email is required').exists(),
        check('password', 'Password is required').exists()
       ]   
    }
  }
}
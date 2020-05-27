const db = require('../config/db.config.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require('../config/env.js');
const User = db.users;
const { validationResult } = require('express-validator');
// Creat a User

exports.register = (req, res) => {  
  // Save to MariaDB database
  
     const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

      if (!errors.isEmpty()) {
        
        res.status(422).json({ errors: errors.array() });
        return;
      }


  bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {

                User.create({  
                  name: req.body.name,
                  email:req.body.email,
                  role:req.body.role,
                  password:hash
                })
                .then(user => {    
                  // Send created customer to client
                  res.json(user);
                })
                .catch(error => res.status(400).send(error))
          }
  });
  
};
 
// login User

exports.login = (req, res) => {  
  // Save to MariaDB database
  console.log(req.body);
  
  User.findOne({  
      where : {
        email: req.body.email
      }
    })
    .then(user => {  
     if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
     }
     else
     {
        // res.json(user);

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        if (result) {
          console.log(env.JWT_Expires);

          const token = jwt.sign(
            {
              email: user.email,
              role:user.role,
              userId: user.id
            },
              env.JWT_KEY,
            {
              expiresIn:env.JWT_Expires
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token
          });
        }
        res.status(401).json({
          message: "Auth failed"
        });
      });


     }  

    })
    .catch(error => res.status(400).send(error))
};
exports.profile = (req, res) => { 

      res.json({
        user:req.userData
      })
}
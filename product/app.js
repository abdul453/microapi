const express = require("express");
const productRoutes = require('./api/routes/product');
const checkAuth = require('./middleware/check-auth');
const roleAuth = require('./middleware/role-auth');
const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/db.config.js');


// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });



app.use("/products", checkAuth,roleAuth,productRoutes);


module.exports = app;

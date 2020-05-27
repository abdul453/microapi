const express = require("express");
const httpProxy = require('express-http-proxy')
var request = require('request');
const userRoutes = require('./routes/user');
const checkAuth = require('./middleware/check-auth');
const checkRole = require('./middleware/role-auth');
var querystring = require('querystring');
const utils = require('./utils/helper');
// const db = require('./config/db.config.js');
// const env = require('./config/env.js');

const app = express();

//const userServiceProxy = httpProxy('http://localhost:4000/users/create')

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });



app.use("/auth", userRoutes);

// Resolve: GET /users/me
app.all('/users/*', checkAuth,async (req, res) => {
	var url = utils.parse_url(req,'users');
	var form = req.body;
	var method = req.method;
		
	 request_api(req,res,form,url,method);	

})

app.all('/products/*', checkAuth,checkRole,async (req, res) => {
	//console.log(req.url);
	var url = utils.parse_url(req,'products');
	var form = req.body;
	var method = req.method;
		
	request_api(req,res,form,url,method);

})



async function request_api(req,res,form,url,method) {
	// body...
		try {
	
		var formData = querystring.stringify(form);
		var contentLength = formData.length;

		var response = await request({
			    headers: {
			      'Content-Length': contentLength,
			      'Content-Type': 'application/x-www-form-urlencoded',
			      'X-Requested-With':'XMLHttpRequest',
			      'authorization':req.headers.authorization
			    },
			    uri: url,
			    json: true,
			    body: formData,
			    method: method
			  }, function (err, response, body) {
			     //it works!
			     if(err) {
			     	res.json(err);
			     }
			    res.json(response.body);
			  });
  		
	 }
	catch(error) {
		res.json(error);
	}

}

module.exports = app;

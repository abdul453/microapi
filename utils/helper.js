const db = require('../config/db.config.js');
const env = require('../config/env.js');


function parse_url(req,base_name) 
{
	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

	var base_array = req.originalUrl.split("/");
	//console.log(base_array);
	var index = base_array.indexOf('');
		if (index > -1) {
		  base_array.splice(index, 1);
		}
	var index = base_array.indexOf(base_name);
		if (index > -1) {
		  base_array.splice(index, 1);
		}
	//console.log(base_array);
	var url_base  = base_array.join("/");
	//console.log(url_base);
	var url_point = base_name+'_url';
	var url = env[url_point]+url_base;

	return url;
}


module.exports = {
    parse_url: parse_url
}
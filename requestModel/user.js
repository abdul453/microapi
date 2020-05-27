const Joi = require("@hapi/joi");
/**
 * File name for request and response model should be same as router file.
 * Define request model with there order in router js file.
 * For example first api in user router is create user so we define createUser schema with key 0.
 */
module.exports = {
    // Here 0 is the order of api in route file.
    0: {
        body: {
            name: Joi.string().required(),
            email: Joi.string().required(),
            role: Joi.string().required(),
            password: Joi.number().required()
        },
        model: "createUser", // Name of the model
        group: "User", // Swagger tag for apis.
        description: "Create user and save details in database"
    },
    1: {
        body: {

            email: Joi.string().required(),
            password: Joi.string().required()
        },
        model: "loginUser", // Name of the model
        group: "User", // Swagger tag for apis.
        description: "Authenticate User and generate token"
    },
    2: {
        query: {},
        path: {}, // Define for api path param here.
        header: {
            "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MmQwMGJhNTJjYjJjM"
        }, // Define if header required.
        model: "UserInfo", 
        group: "User",
        description: "Get Login User Information"
    }
};
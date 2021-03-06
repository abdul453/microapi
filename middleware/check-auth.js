const jwt = require('jsonwebtoken');
const env = require('../config/env.js');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        //console.log(token);
        const decoded = jwt.verify(token,env.JWT_KEY);
        console.log(decoded);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed',
            error:error
        });
    }
};
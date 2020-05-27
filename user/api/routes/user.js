const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');

router.post("/create", UserController.validate('createUser'), UserController.create);

module.exports = router;

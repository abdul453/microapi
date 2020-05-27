const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');
const formValid = require('../middleware/form-valid');

router.post("/signup", formValid.validate('createUser'), UserController.register);
router.post("/login", UserController.login);
router.get("/profile",checkAuth,UserController.profile);
module.exports = router;

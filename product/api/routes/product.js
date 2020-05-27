const express = require("express");
const router = express.Router();

const ProductController = require('../controllers/product');

router.post("/create", ProductController.create);

module.exports = router;

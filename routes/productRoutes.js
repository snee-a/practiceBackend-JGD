const express = require("express");
const router = express.Router();
const { getProducts, getProductById } = require("../controllers/productController");

router.get("/categories/:categoryName/products", getProducts);
router.get("/categories/:categoryName/products/:productId", getProductById);

module.exports = router;
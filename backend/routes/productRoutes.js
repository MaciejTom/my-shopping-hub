const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getByCategory,
  getProductById,
  
} = require("../controller/productControllers");

//@desc GET all products from db
//@route GET /api/products
//@access Public
router.get("/", getAllProducts);

//@desc GET a product by id from db
//@route GET /api/products/:id
//@access Public
router.get("/:id", getProductById);

//@desc GET a products by category from db
//@route GET /api/products/:category
//@access Public
router.get("/category/:category", getByCategory);



module.exports = router;

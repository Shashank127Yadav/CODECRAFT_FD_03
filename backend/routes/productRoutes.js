const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  addReview,
} = require("../controllers/productController");

router.get("/", getAllProducts);
router.post("/", addProduct);
router.post("/:id/review", addReview);

module.exports = router;

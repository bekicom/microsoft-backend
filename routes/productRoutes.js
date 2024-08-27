const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Mahsulotlar CRUD marshrutlari
router
  .route("/products")
  .post(createProduct) // Mahsulot qo'shish
  .get(getProducts); // Barcha mahsulotlarni olish

router
  .route("/products/:id")
  .get(getProductById) // Bitta mahsulotni olish
  .put(updateProduct) // Mahsulotni yangilash
  .delete(deleteProduct); // Mahsulotni o'chirish

module.exports = router;

import express from "express";
import productsController from "../controllers/productController.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "public/" });

router
  .route("/")
  .get(productsController.getProducts)
  .post(upload.single("images"), productsController.createProduct);

router
  .route("/:id")
  .get(productsController.getProduct)
  .put(upload.single("images"), productsController.updateProduct)
  .delete(productsController.deleteProduct);

export default router;

import express from "express";
import productsController from "../controllers/productController.js";


const router = express.Router();

router.route("/")
.get(productsController.getProducts)
.post(productsController.createProduct)

router.route("/:id")
.get(productsController.getProduct)
.put(productsController.updateProduct)
.delete(productsController.deleteProduct)

export default router;
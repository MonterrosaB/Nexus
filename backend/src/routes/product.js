import express from "express";
import productsController from "../controllers/productController.js";


const router = express.Router();

router.route("/")
.get(productsController.getProduct)
.post(productsController.createProduct)

router.route("/:id")
.put(productsController.updateProduct)
.delete(productsController.deleteProduct)

export default router;
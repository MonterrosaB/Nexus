import express from "express"
import cartProductController from "../controllers/cartProductController.js"


const router = express.Router();

router.route("/")
.get(cartProductController.getcartProducts)
.post(cartProductController.createCartProdcut)

router.route("/:id")
.put(cartProductController.updateCartProduct)
.delete(cartProductController.deleteCartProduct)

export default router;
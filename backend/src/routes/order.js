import express from "express";
import ordersController from "../controllers/orderController.js";


const router = express.Router();

router.route("/")
.get(ordersController.getOrder)
.post(ordersController.createOrder)

router.route("/:id")
.put(ordersController.updateOrder)
.delete(ordersController.deleteOrder)

export default router;
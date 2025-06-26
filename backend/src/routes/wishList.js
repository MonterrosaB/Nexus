import express from "express";
import wishListController from "../controllers/wishListController.js";

const router = express.Router();

router.route("/").get(wishListController.getWishList);
router.put("/:idProduct", wishListController.toggleItems);

export default router;

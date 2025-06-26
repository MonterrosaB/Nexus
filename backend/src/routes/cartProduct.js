import express from "express";
import cartProductController from "../controllers/cartProductController.js";
const router = express.Router();

router
  .route("/")
  .get(cartProductController.getcartProducts)
  .post(cartProductController.createCartProdcut);

router.route("/:id").delete(cartProductController.deleteCartProduct);

router.put(
  "/increase/:idCartProduct/:idProduct",
  cartProductController.increaseProduct
);
router.put(
  "/decrease/:idCartProduct/:idProduct",
  cartProductController.decreaseProduct
);
router.put("/add/:idProduct/", cartProductController.addProduct);

export default router;

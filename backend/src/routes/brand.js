import express from "express"

import brandController from "../controllers/brandController.js";

const router = express.Router();

router.route("/")
.get(brandController.getBrands)
.post(brandController.createBrand)

router.route("/:id")
.put(brandController.updateBrand)
.delete(brandController.deleteBrand)

export default router;
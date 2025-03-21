import express from "express";
import providerController from "../controllers/providerController.js";


const router = express.Router();

router.route("/")
.get(providerController.getProvider)
.post(providerController.createProvider)

router.route("/:id")
.put(providerController.updateProvider)
.delete(providerController.deleteProvider)

export default router;
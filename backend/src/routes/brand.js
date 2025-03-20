import express from "express"

import brandController from "../controllers/brandController.js";

const router = express.Router();

router.route("/")
.get()
.post()

router.route("/:id")
.put()
.delete()

export default router;
import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.route("/")
.get(userController.getUser)
.post(userController.createUser)

router.route("/:id")
.put(userController.updateUser)
.delete(userController.deleteUser)

export default router;
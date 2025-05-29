import express from "express"

import {login, register, logout, profile} from '../controllers/authController.js'
import {authRequired} from "../middelwares/validateToken.js"
import {validateSchema} from "../middelwares/validator.middleware.js"
import { registerSchema, loginSchema } from "../schema/auth.schema.js"

const router = express.Router();

router.route("/")

router.post("/register",validateSchema(registerSchema), register); 
router.post("/login",validateSchema(loginSchema), login);   

router.post("/logout", logout);   
router.get("/profile", authRequired, profile);   



export default router
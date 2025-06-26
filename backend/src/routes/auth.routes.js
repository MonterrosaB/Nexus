import express from "express";
import cors from "cors";

import {
  login,
  register,
  logout,
  profile,
  loginCustomers,
} from "../controllers/authController.js";
import { authRequired } from "../middelwares/validateToken.js";
import { validateSchema } from "../middelwares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schema/auth.schema.js";
import { requireRole } from "../middelwares/requireRole.js";

const router = express.Router();

router.route("/");

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get(
  "/profile",
  authRequired,
  requireRole(["admin", "empleado"]), // 🔒 solo empleados/admins
  profile
);

router.post("/loginCustomer", loginCustomers);
router.get("/profileCustomer", authRequired, requireRole(["cliente"]), profile);
export default router;

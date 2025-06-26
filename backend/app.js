import express from "express";
import cors from "cors";

import productRoutes from "./src/routes/product.js";
import orderRoutes from "./src/routes/order.js";
import categoryRoutes from "./src/routes/category.js";
import providerRoutes from "./src/routes/provider.js";
import userRoutes from "./src/routes/user.js";
import brandRoutes from "./src/routes/brand.js";
import cartProductsRoutes from "./src/routes/cartProduct.js";
import customerRoutes from "./src/routes/customer.js";
import wishList from "./src/routes/wishList.js";

import authroutes from "./src/routes/auth.routes.js";
import cookieParser from "cookie-parser";
import { authRequired } from "./src/middelwares/validateToken.js";

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // 🔥 MUY IMPORTANTE para que el navegador acepte cookies
  })
);

app.use(express.json());

app.use("/api", authroutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", authRequired, orderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/cartProducts", authRequired, cartProductsRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/wishList", authRequired, wishList);

export default app;

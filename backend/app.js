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

import authroutes from "./src/routes/auth.routes.js"
import cookieParser from "cookie-parser";
import {authRequired} from "./src/middelwares/validateToken.js"


const app = express();

app.use(cors({            
    origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(cookieParser())

app.use("/api",authroutes)

app.use("/api/products",authRequired, productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories",authRequired, categoryRoutes);
app.use("/api/providers",authRequired,providerRoutes);
app.use("/api/users",authRequired, userRoutes);
app.use("/api/brands",authRequired, brandRoutes); 
app.use("/api/cartProducts", cartProductsRoutes);
app.use("/api/customers", customerRoutes);

export default app;
import express from "express";

import productRoutes from "./src/routes/product.js";
import orderRoutes from "./src/routes/order.js";
import categoryRoutes from "./src/routes/category.js";
import providerRoutes from "./src/routes/provider.js";
import userRoutes from "./src/routes/user.js";
import brandRoutes from "./src/routes/brand.js";
import cartProductsRoutes from "./src/routes/cartProduct.js";
import customerRoutes from "./src/routes/customer.js";

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/cartProducts", cartProductsRoutes);
app.use("/api/customers", customerRoutes);

export default app;
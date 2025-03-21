import express from "express";
import productRoutes from "./src/routes/product.js";
import orderRoutes from "./src/routes/order.js";
import categoryRoutes from "./src/routes/category.js";
import providerRoutes from "./src/routes/provider.js";


const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/providers", providerRoutes);



export default app;
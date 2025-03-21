import express from "express";
import productRoutes from "./src/routes/product.js";

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/providers", providerRoutes);


app.use("/api/users", productUser);
app.use("/api/brands", productBrand);
app.use("/api/cartProducts", productCartProduct);
app.use("/api/customers", productCustomer);

export default app;
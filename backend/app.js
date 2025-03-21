import express from "express";
import productRoutes from "./src/routes/product.js";
import productUser from "./src/routes/user.js";
import productBrand from "./src/routes/brand.js";
import productCartProduct from "./src/routes/cartProduct.js";
import productCustomer from "./src/routes/customer.js";

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", productUser);
app.use("/api/brands", productBrand);
app.use("/api/cartProducts", productCartProduct);
app.use("/api/customers", productCustomer);

export default app;
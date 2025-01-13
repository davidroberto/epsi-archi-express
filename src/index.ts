import express from "express";
const app = express();

import productController from "./product/product.controller";
import orderController from "./order/order.controller";

app.use("/api/products", productController);
app.use("/api/orders", orderController);

app.listen("3010", () => {
  console.log("App started");
});

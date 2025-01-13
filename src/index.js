const express = require("express");
const app = express();

const productController = require("./product/product.controller");
const orderController = require("./order/order.controller");

app.use("/api/products", productController);
app.use("/api/orders", orderController);

app.listen("3010", () => {
  console.log("App started");
});

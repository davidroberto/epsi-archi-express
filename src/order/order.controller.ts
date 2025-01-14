import express from "express";
const router = express.Router();

import Order from "./domain/order.entity";

router.post("", (request, response) => {
  const customerId = request.body.customerId;
  const products = request.body.products;

  const orderCreated = new Order(customerId, products);

  // persister la commande

  response.status(201).json(orderCreated);
});

export default router;

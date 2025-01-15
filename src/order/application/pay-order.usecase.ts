import Order from "../domain/order.entity";
import OrderRepository from "../infrastructure/order.repository";

export class PayOrderUseCase {
  payOrder(orderId: number): Order {
    const orderRepository = new OrderRepository();

    const order = orderRepository.findById(orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    order.pay();

    orderRepository.update(order);

    return order;
  }
}

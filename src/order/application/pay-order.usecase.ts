import Order from "../domain/order.entity";
import { OrderContainer } from "../order.container";

export class PayOrderUseCase {
  payOrder(orderId: number): Order {
    const orderContainer = new OrderContainer();
    const orderRepository = orderContainer.getOrderRepository();

    const order = orderRepository.findById(orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    order.pay();

    orderRepository.update(order);

    return order;
  }
}

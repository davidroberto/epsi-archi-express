import Order from "../domain/order.entity";
import OrderRepository from "../infrastructure/order.repository";
import { OrderContainer } from "../order.container";

export class CreateOrderUseCase {
  createOrder(customerId: number, products: []): Order | { error: string } {
    const orderCreated = new Order(customerId, products);

    const orderContainer = new OrderContainer();
    const orderRepository = orderContainer.getOrderRepository();

    try {
      const orderPersisted = orderRepository.create(orderCreated);
      return orderPersisted;
    } catch (error: any) {
      return { error: error.message };
    }
  }
}

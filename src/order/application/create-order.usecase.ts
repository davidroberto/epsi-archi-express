import Order from "../domain/order.entity";
import { OrderContainer } from "../order.container";

export class CreateOrderUseCase {
  createOrder(customerId: number, products: []): Order | { error: string } {
    const orderCreated = new Order(customerId, products);

    const orderContainer = new OrderContainer();
    const orderRepository = orderContainer.getOrderRepository();

    try {
      const orderPersisted = orderRepository.create(orderCreated);

      console.log(orderPersisted);
      return orderPersisted;
    } catch (error: any) {
      return { error: error.message };
    }
  }
}

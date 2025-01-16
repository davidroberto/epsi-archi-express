import Order from "../domain/order.entity";
import OrderRepositoryInterface from "../domain/order.repository.interface";

export class CreateOrderUseCase {
  private orderRepository: OrderRepositoryInterface;

  constructor(orderRepository: OrderRepositoryInterface) {
    this.orderRepository = orderRepository;
  }

  createOrder(customerId: number, products: []): Order | { error: string } {
    const orderCreated = new Order(customerId, products);

    try {
      const orderPersisted = this.orderRepository.create(orderCreated);

      return orderPersisted;
    } catch (error: any) {
      return { error: error.message };
    }
  }
}

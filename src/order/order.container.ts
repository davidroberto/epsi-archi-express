import OrderRepository from "./infrastructure/order.repository";

export class OrderContainer {
  private orderRepository: OrderRepository;

  getOrderRepository(): OrderRepository {
    if (!this.orderRepository) {
      this.orderRepository = new OrderRepository();
    }
    return this.orderRepository;
  }
}

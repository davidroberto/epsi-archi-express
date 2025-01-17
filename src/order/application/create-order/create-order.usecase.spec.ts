import Order from "../../domain/order.entity";
import OrderRepositoryInterface from "../../domain/order.repository.interface";
import { CreateOrderUseCase } from "../create-order.usecase";

describe("En tant qu'utilisateur, je souhaite créer une commande", () => {
  it("Quand j'envoie un identifiant client et une liste de produits, alors une commande est créée", () => {
    const orderRepositoryFake = {
      create: (order: Order) => {
        return order;
      },
    } as unknown as OrderRepositoryInterface;

    const createOrderUseCase = new CreateOrderUseCase(orderRepositoryFake);

    const orderCreated = createOrderUseCase.createOrder(1, [{ id: 1, price: 10 }]) as Order;

    expect(orderCreated.total).toBe(10);
  });

  it("Quand j'envoie un identifiant client et une liste de produits, alors une commande est créée", () => {
    const orderRepositoryFake = {
      create: (order: Order) => {
        return order;
      },
    } as unknown as OrderRepositoryInterface;

    const createOrderUseCase = new CreateOrderUseCase(orderRepositoryFake);

    const orderCreated = createOrderUseCase.createOrder(1, [
      { id: 1, price: 10 },
      { id: 1, price: 15 },
    ]) as Order;

    expect(orderCreated.total).toBe(25);
  });

  it("Quand j'ajoute plus de deux produits, une erreur doit être renvoyer", () => {
    const orderRepositoryFake = {
      create: (order: Order) => {
        return order;
      },
    } as unknown as OrderRepositoryInterface;

    const createOrderUseCase = new CreateOrderUseCase(orderRepositoryFake);

    const orderCreated = createOrderUseCase.createOrder(1, [
      { id: 1, price: 10 },
      { id: 1, price: 15 },
      { id: 1, price: 15 },
    ]) as Order;

    expect(orderCreated).toThrowError("You can't add more than 2 products");
  });
});

export default class Order {
  private id: number;

  private createdAt: Date;

  private total: number;

  private customer: number;

  private products: [];

  private status: string;

  constructor(customerId: number, products: []) {
    if (!customerId) {
      throw new Error("customerId is required");
    }

    if (products.length > 2) {
      throw new Error("You can't add more than 2 products");
    }

    this.createdAt = new Date();
    this.customer = customerId;
    this.products = products;
    this.status = "cart";

    this.total = products.reduce((acc, product) => {
      return acc + 5;
    }, 0);
  }

  getId(): number {
    return this.id;
  }
}

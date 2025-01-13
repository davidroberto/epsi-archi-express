class Order {
  private id: string;

  private createdAt: Date;

  private total: number;

  private customer: string;

  private products: [];

  private status: string;

  constructor(customerId: string, products: []) {
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
      return acc + product.price;
    }, 0);
  }
}

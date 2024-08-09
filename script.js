class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    console.log(this.products);
  }

  calculateTotalValue() {
    return this.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
  logInventoryAfterDelay() {
    setTimeout(() => {
      const totalValue = this.calculateTotalValue();
      console.log(`Total Inventory Value: $${totalValue}`);
    }, 3000);
  }
}
console.log(product.price);

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
let product1 = new Product("biscuts", 20, 200);
let product2 = new Product("choclate", 10, 2000);
let product3 = new Product("Shampoo", 200, 40000);
let product4 = new Product("Candy", 45, 2900);
let product5 = new Product("Toy", 245, 1500);

let inventory = new Inventory();
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);
inventory.addProduct(product4);

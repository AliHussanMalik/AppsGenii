// Product class definition
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

// Inventory class definition
class Inventory {
  constructor() {
    this.products = [];
  }

  // Method to add a product to the inventory
  addProduct(product) {
    this.products.push(product);
  }

  // Method to calculate the total value of the inventory
  calculateTotalValue() {
    return this.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }

  // Method to log the total value of the inventory after a 3-second delay
  logInventoryAfterDelay() {
    setTimeout(() => {
      const totalValue = this.calculateTotalValue();
      console.log(`Total Inventory Value: $${totalValue}`);
    }, 3000);
  }
}

// Example usage:
let product1 = new Product("Biscuits", 20, 200);
let product2 = new Product("Chocolate", 10, 2000);
let product3 = new Product("Shampoo", 200, 40000);
let product4 = new Product("Candy", 45, 2900);
let product5 = new Product("Toy", 245, 1500);

let inventory = new Inventory();
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);
inventory.addProduct(product4);
inventory.addProduct(product5);

// Calculate total value and log after a 3-second delay
inventory.logInventoryAfterDelay();

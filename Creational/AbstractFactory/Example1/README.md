
// AbstractFactory.js
// Defines the interface for creating abstract product families
```
class AbstractFactory {
    createProductA() {
        throw new Error("createProductA() must be implemented."); // Abstract method, must be overridden
    }
    createProductB() {
        throw new Error("createProductB() must be implemented."); // Abstract method, must be overridden
    }
}
```
module.exports = AbstractFactory; // Export the class so it can be extended

// AbstractProductA.js
// Interface for ProductA variants
class AbstractProductA {
    // Abstract method for ProductA behavior
    usefulFunctionA() {
        throw new Error("usefulFunctionA() must be implemented.");
    }
}
module.exports = AbstractProductA; // Export the abstract product

// AbstractProductB.js
// Interface for ProductB variants
class AbstractProductB {
    // Abstract method for basic ProductB behavior
    usefulFunctionB() {
        throw new Error("usefulFunctionB() must be implemented.");
    }
    // Abstract method for interaction with ProductA
    anotherUsefulFunctionB(collaborator) {
        throw new Error("anotherUsefulFunctionB() must be implemented.");
    }
}
module.exports = AbstractProductB; // Export the abstract product

// ProductA1.js
const AbstractProductA = require('./AbstractProductA'); // Import abstract base class

// Concrete implementation of ProductA1
class ProductA1 extends AbstractProductA {
    // Implement the behavior specific to ProductA1
    usefulFunctionA() {
        return 'ProductA1: The result of the product A1.';
    }
}
module.exports = ProductA1; // Export the concrete product

// ProductA2.js
const AbstractProductA = require('./AbstractProductA'); // Import abstract base class

// Concrete implementation of ProductA2
class ProductA2 extends AbstractProductA {
    // Implement the behavior specific to ProductA2
    usefulFunctionA() {
        return 'ProductA2: The result of the product A2.';
    }
}
module.exports = ProductA2; // Export the concrete product

// ProductB1.js
const AbstractProductB = require('./AbstractProductB'); // Import abstract base class

// Concrete implementation of ProductB1
class ProductB1 extends AbstractProductB {
    // Implement the behavior specific to ProductB1
    usefulFunctionB() {
        return 'ProductB1: The result of the product B1.';
    }
    // Method that collaborates with ProductA
    anotherUsefulFunctionB(collaborator) {
        return `ProductB1: Collaborating with (${collaborator.usefulFunctionA()})`; // Delegates to ProductA's method
    }
}
module.exports = ProductB1; // Export the concrete product

// ProductB2.js
const AbstractProductB = require('./AbstractProductB'); // Import abstract base class

// Concrete implementation of ProductB2
class ProductB2 extends AbstractProductB {
    // Implement the behavior specific to ProductB2
    usefulFunctionB() {
        return 'ProductB2: The result of the product B2.';
    }
    // Method that collaborates with ProductA
    anotherUsefulFunctionB(collaborator) {
        return `ProductB2: Collaborating with (${collaborator.usefulFunctionA()})`; // Delegates to ProductA's method
    }
}
module.exports = ProductB2; // Export the concrete product

// ConcreteFactory1.js
const AbstractFactory = require('./AbstractFactory'); // Import abstract factory interface
const ProductA1 = require('./ProductA1'); // Import concrete product A1
const ProductB1 = require('./ProductB1'); // Import concrete product B1

// Concrete factory that creates products from family 1
class ConcreteFactory1 extends AbstractFactory {
    // Override to return ProductA1
    createProductA() {
        return new ProductA1();
    }
    // Override to return ProductB1
    createProductB() {
        return new ProductB1();
    }
}
module.exports = ConcreteFactory1; // Export the concrete factory

// ConcreteFactory2.js
const AbstractFactory = require('./AbstractFactory'); // Import abstract factory interface
const ProductA2 = require('./ProductA2'); // Import concrete product A2
const ProductB2 = require('./ProductB2'); // Import concrete product B2

// Concrete factory that creates products from family 2
class ConcreteFactory2 extends AbstractFactory {
    // Override to return ProductA2
    createProductA() {
        return new ProductA2();
    }
    // Override to return ProductB2
    createProductB() {
        return new ProductB2();
    }
}
module.exports = ConcreteFactory2; // Export the concrete factory

// Client.js
// Client uses abstract interfaces for factories and products
class Client {
    constructor(factory) {
        this.productA = factory.createProductA(); // Create product A using factory
        this.productB = factory.createProductB(); // Create product B using factory
    }

    run() {
        console.log(this.productB.usefulFunctionB()); // Execute behavior of ProductB
        console.log(this.productB.anotherUsefulFunctionB(this.productA)); // Collaborate with ProductA
    }
}
module.exports = Client; // Export the client

// index.js
const ConcreteFactory1 = require('./ConcreteFactory1'); // Import first concrete factory
const ConcreteFactory2 = require('./ConcreteFactory2'); // Import second concrete factory
const Client = require('./Client'); // Import the client class

// Run client code with the first family of products
console.log('Client: Testing client code with the first factory type...');
const client1 = new Client(new ConcreteFactory1());
client1.run(); // Execute client operations

// Run client code with the second family of products
console.log('\nClient: Testing the same client code with the second factory type...');
const client2 = new Client(new ConcreteFactory2());
client2.run(); // Execute client operations


# 🏭 Abstract Factory Pattern in JavaScript (GoF, Pages 84–85)

This project demonstrates the **Abstract Factory** design pattern using class names and structure from pages **84–85** of *Design Patterns: Elements of Reusable Object-Oriented Software* (Gang of Four).

It creates families of related products (`ProductA` and `ProductB`) using an abstract factory interface, ensuring that the client remains decoupled from the concrete product implementations.

---

## 📁 Project Structure (Creation Order)

```

AbstractFactory.js
AbstractProductA.js
AbstractProductB.js
ProductA1.js
ProductA2.js
ProductB1.js
ProductB2.js
ConcreteFactory1.js
ConcreteFactory2.js
Client.js
index.js

````

---

## 🔧 Abstract Factory Classes

### `AbstractFactory.js`

```javascript
class AbstractFactory {
    createProductA() {
        throw new Error("createProductA() must be implemented.");
    }

    createProductB() {
        throw new Error("createProductB() must be implemented.");
    }
}
module.exports = AbstractFactory;
````

### `AbstractProductA.js`

```javascript
class AbstractProductA {
    usefulFunctionA() {
        throw new Error("usefulFunctionA() must be implemented.");
    }
}
module.exports = AbstractProductA;
```

### `AbstractProductB.js`

```javascript
class AbstractProductB {
    usefulFunctionB() {
        throw new Error("usefulFunctionB() must be implemented.");
    }

    anotherUsefulFunctionB(collaborator) {
        throw new Error("anotherUsefulFunctionB() must be implemented.");
    }
}
module.exports = AbstractProductB;
```

---

## 🧱 Concrete Products

### `ProductA1.js`

```javascript
const AbstractProductA = require('./AbstractProductA');

class ProductA1 extends AbstractProductA {
    usefulFunctionA() {
        return 'ProductA1: The result of the product A1.';
    }
}
module.exports = ProductA1;
```

### `ProductA2.js`

```javascript
const AbstractProductA = require('./AbstractProductA');

class ProductA2 extends AbstractProductA {
    usefulFunctionA() {
        return 'ProductA2: The result of the product A2.';
    }
}
module.exports = ProductA2;
```

### `ProductB1.js`

```javascript
const AbstractProductB = require('./AbstractProductB');

class ProductB1 extends AbstractProductB {
    usefulFunctionB() {
        return 'ProductB1: The result of the product B1.';
    }

    anotherUsefulFunctionB(collaborator) {
        return `ProductB1: Collaborating with (${collaborator.usefulFunctionA()})`;
    }
}
module.exports = ProductB1;
```

### `ProductB2.js`

```javascript
const AbstractProductB = require('./AbstractProductB');

class ProductB2 extends AbstractProductB {
    usefulFunctionB() {
        return 'ProductB2: The result of the product B2.';
    }

    anotherUsefulFunctionB(collaborator) {
        return `ProductB2: Collaborating with (${collaborator.usefulFunctionA()})`;
    }
}
module.exports = ProductB2;
```

---

## 🏗️ Concrete Factories

### `ConcreteFactory1.js`

```javascript
const AbstractFactory = require('./AbstractFactory');
const ProductA1 = require('./ProductA1');
const ProductB1 = require('./ProductB1');

class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
        return new ProductA1();
    }

    createProductB() {
        return new ProductB1();
    }
}
module.exports = ConcreteFactory1;
```

### `ConcreteFactory2.js`

```javascript
const AbstractFactory = require('./AbstractFactory');
const ProductA2 = require('./ProductA2');
const ProductB2 = require('./ProductB2');

class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
        return new ProductA2();
    }

    createProductB() {
        return new ProductB2();
    }
}
module.exports = ConcreteFactory2;
```

---

## 👨‍💻 Client

### `Client.js`

```javascript
class Client {
    constructor(factory) {
        this.productA = factory.createProductA();
        this.productB = factory.createProductB();
    }

    run() {
        console.log(this.productB.usefulFunctionB());
        console.log(this.productB.anotherUsefulFunctionB(this.productA));
    }
}
module.exports = Client;
```

---

## 🚀 Demo Runner

### `index.js`

```javascript
const ConcreteFactory1 = require('./ConcreteFactory1');
const ConcreteFactory2 = require('./ConcreteFactory2');
const Client = require('./Client');

console.log('Client: Testing client code with the first factory type...');
const client1 = new Client(new ConcreteFactory1());
client1.run();

console.log('\nClient: Testing the same client code with the second factory type...');
const client2 = new Client(new ConcreteFactory2());
client2.run();
```

---

## 🧪 Sample Output

```bash
Client: Testing client code with the first factory type...
ProductB1: The result of the product B1.
ProductB1: Collaborating with (ProductA1: The result of the product A1.)

Client: Testing the same client code with the second factory type...
ProductB2: The result of the product B2.
ProductB2: Collaborating with (ProductA2: The result of the product A2.)
```

---

## 📚 References

* *Design Patterns: Elements of Reusable Object-Oriented Software* — GoF
* Pages **84–85** for the Abstract Factory class diagram and example

---

## 🧠 Summary Table

| Role               | JS Class                     | Description                                    |
| ------------------ | ---------------------------- | ---------------------------------------------- |
| AbstractFactory    | `AbstractFactory`            | Interface for creating products                |
| ConcreteFactory    | `ConcreteFactory1/2`         | Creates specific product families              |
| AbstractProductA/B | `AbstractProductA/B`         | Declares interface for product types           |
| ConcreteProductA/B | `ProductA1/2`, `ProductB1/2` | Implements product-specific behavior           |
| Client             | `Client`                     | Uses factory to operate with abstract products |

---

## ✅ To Run

```bash
node index.js
```

You must run this in a directory containing all the files listed above.


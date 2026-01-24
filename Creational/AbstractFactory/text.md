## 🏭 What Is the Abstract Factory Pattern?

### 🎯 **In simple terms:**

> The **Abstract Factory** pattern helps you create groups of related objects **without knowing the exact classes** that will be used.

Think of it like this:
Imagine you're building a **theme system** for an app — it could use a **"Light Theme"** or a **"Dark Theme"**.
Each theme has its own **Button**, **TextBox**, and **Checkbox**.

The Abstract Factory pattern gives you a **factory for each theme** that knows how to create all the UI parts **that match**.

You don’t care **how** those components are created — you just ask the factory to give them to you.

---

## 🧱 Why Use It?

* You want to create families of related objects (e.g., matching buttons and inputs).
* You want to **enforce consistency** across object groups (like all Light Theme components working together).
* You want to avoid writing `if` or `switch` all over your code just to choose between versions.

---

## 🧪 A Real-World Analogy

Imagine a **furniture factory**.

* You can order a full set of **Victorian-style** furniture: 🪑 chair, 🛏️ bed, and 🛋️ sofa.
* Or a full set of **Modern-style** furniture: 🪑 chair, 🛏️ bed, and 🛋️ sofa.

You don’t build the chair yourself — you tell the **factory**:

> “Give me a Victorian chair.”
> “Give me a Modern bed.”

Each style has its **own factory**. And each factory knows how to build its **own version** of each piece.


## 🧠 Summary

| Concept              | Explanation                                                           |
| -------------------- | --------------------------------------------------------------------- |
| **Abstract Factory** | A factory that creates other related factories (not objects directly) |
| **Purpose**          | To produce related objects that should be used together               |
| **Benefit**          | Keeps object creation consistent and clean                            |
| **Client code**      | Doesn’t care about the exact classes, just uses the

UML/ORM
# 🌟 Abstract Factory — Participants (for JavaScript Students)

## **AbstractFactory**

* Defines functions for creating a family of related objects.
* Only describes method names, not real object creation.
* Helps ConcreteFactory classes follow the same structure.

## **ConcreteFactory**

* Implements the creation functions from AbstractFactory.
* Returns real JavaScript objects for one product family.
* Ensures its created objects are compatible together.

## **AbstractProduct**

* Describes the required behavior of a specific product type.
* Acts like an interface JavaScript developers follow.
* Contains no actual working code inside.

## **ConcreteProduct**

* Real JavaScript objects created by a ConcreteFactory.
* Implements all behavior defined by its AbstractProduct.
* Matches the product family of its factory.

## **Client**

* Works only with AbstractFactory and AbstractProduct types.
* Never depends on ConcreteProduct classes directly.
* Can switch product families by changing factories.

---


This project demonstrates the **Abstract Factory** design pattern, following the class structure and naming conventions from pages **84–85** of the GoF book *Design Patterns: Elements of Reusable Object-Oriented Software*.

Each product family consists of related products (A and B). The client uses the abstract factory and product interfaces, remaining completely **decoupled from concrete implementations**.

---

## 📁 File Structure (Creation Order)

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

## 🧱 Abstract Factory & Products

### `AbstractFactory.js`

```javascript
// Abstract class declaring creation methods for abstract product families
class AbstractFactory {
    // Method to create a product of type A
    createProductA() {
        throw new Error("createProductA() must be implemented."); // Forces subclasses to override
    }

    // Method to create a product of type B
    createProductB() {
        throw new Error("createProductB() must be implemented."); // Forces subclasses to override
    }
}
module.exports = AbstractFactory;
````

---

### `AbstractProductA.js`

```javascript
// Abstract base class for product family A
class AbstractProductA {
    // Abstract method that all ProductA variants must implement
    usefulFunctionA() {
        throw new Error("usefulFunctionA() must be implemented.");
    }
}
module.exports = AbstractProductA;
```

---

### `AbstractProductB.js`

```javascript
// Abstract base class for product family B
class AbstractProductB {
    // Abstract method that must be implemented by ProductB variants
    usefulFunctionB() {
        throw new Error("usefulFunctionB() must be implemented.");
    }

    // Another abstract method that collaborates with ProductA
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

// Concrete implementation of AbstractProductA
class ProductA1 extends AbstractProductA {
    usefulFunctionA() {
        return 'ProductA1: The result of the product A1.'; // Return string to simulate behavior
    }
}
module.exports = ProductA1;
```

---

### `ProductA2.js`

```javascript
const ProductA2: The result of the product A2.' = require('./AbstractProductA');

// Concrete implementation of AbstractProductA
class ProductA2 extends AbstractProductA {
    usefulFunctionA() {
        return 'ProductA2: The result of the product A2.'; // Return string to simulate behavior
    }
}
module.exports = ProductA2;
```

---

### `ProductB1.js`

```javascript
const AbstractProductB = require('./AbstractProductB');

// Concrete implementation of AbstractProductB
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

---

### `ProductB2.js`

```javascript
const AbstractProductB = require('./AbstractProductB');

// Concrete implementation of AbstractProductB
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

// ConcreteFactory1 creates ProductA1 and ProductB1
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

---

### `ConcreteFactory2.js`

```javascript
const AbstractFactory = require('./AbstractFactory');
const ProductA2 = require('./ProductA2');
const ProductB2 = require('./ProductB2');

// ConcreteFactory2 creates ProductA2 and ProductB2
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
// Client works with products only via their abstract interfaces
class Client {
    constructor(factory) {
        this.productA = factory.createProductA(); // Store instance of ProductA
        this.productB = factory.createProductB(); // Store instance of ProductB
    }

    run() {
        console.log(this.productB.usefulFunctionB()); // Use ProductB independently
        console.log(this.productB.anotherUsefulFunctionB(this.productA)); // Let ProductB collaborate with ProductA
    }
}
module.exports = Client;
```

---

## 🚀 index.js (Runner)

### `index.js`

```javascript
const ConcreteFactory1 = require('./ConcreteFactory1');
const ConcreteFactory2 = require('./ConcreteFactory2');
const Client = require('./Client');

// Demonstrate behavior using ConcreteFactory1
console.log('Client: Testing client code with the first factory type...');
const client1 = new Client(new ConcreteFactory1());
client1.run();

// Demonstrate behavior using ConcreteFactory2
console.log('\nClient: Testing the same client code with the second factory type...');
const client2 = new Client(new ConcreteFactory2());
client2.run();
```

---

## 🧪 Expected Output

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

* *Design Patterns: Elements of Reusable Object-Oriented Software*, GoF
* Pages 84–85 — Abstract Factory Pattern

---

## ✅ To Run

```bash
node index.js
```

Ensure all files are in the same directory or adjust module paths accordingly.

Strengths

1. **Consistent Families**: Ensures related objects work together properly by producing them from the same “factory family.”
2. **Flexible Creation**: Makes it easy to swap entire sets of products without changing the code that uses them.
3. **Organized Code**: Encourages structured, modular thinking that keeps complex projects clear and easier to maintain.

Weaknesses

1. **Many Classes**: Can overwhelm beginners because you need multiple factory and product classes for even simple examples.
2. **Hard Setup**: Initial code looks bulky and abstract, which can confuse students expecting faster visible results.
3. **Abstract Thinking**: Requires comfort with interfaces and polymorphism, which can feel too advanced for new coders.

Opportunities

1. **Cross-Platform Skills**: Perfect to demonstrate how apps adapt to web, mobile, or game environments with matching object families.
2. **Design Practice**: Builds strong understanding of abstraction and architecture—core ideas for future software engineering success.
3. **Team Projects**: Helps students learn how large teams share consistent code structures across multiple modules.

Threats

1. **Over-Engineering**: Risk of using factories where a simple constructor would do, wasting time and clarity.
2. **Learning Fatigue**: Too many abstract layers can frustrate beginners and discourage deeper exploration of design patterns.
3. **Integration Conflicts**: Mixing with other creational patterns (like Builder or Prototype) can cause confusion about which to use when.

<p>Video</p>









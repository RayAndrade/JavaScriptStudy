Here's a complete, **book-accurate** implementation of the **Factory Method** pattern in JavaScript, based on the UML diagram from *Design Patterns: Elements of Reusable Object-Oriented Software* (GoF), page 104.

---

### 📁 Directory Structure

```
FactoryPattern/
│
├── index.js
├── Creator.js
├── ConcreteCreator.js
├── Product.js
└── ConcreteProduct.js
```

---

### 📄 Product.js

```javascript
// Product.js
// Abstract product class defining the interface

export class Product {
    // An abstract method to be implemented by concrete products
    use() {
        throw new Error("use() must be implemented by subclass");
    }
}
```

---

### 📄 ConcreteProduct.js

```javascript
// ConcreteProduct.js
// Implements the Product interface

import { Product } from './Product.js';

export class ConcreteProduct extends Product {
    constructor() {
        super(); // call to the parent constructor
    }

    // Implements the abstract method from Product
    use() {
        console.log("Using the ConcreteProduct.");
    }
}
```

---

### 📄 Creator.js

```javascript
// Creator.js
// Declares the factoryMethod and a method that uses it

import { Product } from './Product.js';

export class Creator {
    // Abstract method to be overridden by ConcreteCreator
    factoryMethod() {
        throw new Error("factoryMethod() must be implemented by subclass");
    }

    // Calls the factory method and uses the returned product
    someOperation() {
        const product = this.factoryMethod(); // Calls overridden factory method
        product.use(); // Calls Product interface method
    }
}
```

---

### 📄 ConcreteCreator.js

```javascript
// ConcreteCreator.js
// Overrides the factory method to return an instance of a ConcreteProduct

import { Creator } from './Creator.js';
import { ConcreteProduct } from './ConcreteProduct.js';

export class ConcreteCreator extends Creator {
    // Factory method implementation that returns a ConcreteProduct
    factoryMethod() {
        return new ConcreteProduct();
    }
}
```

---

### 📄 index.js (Demo)

```javascript
// index.js
// Demo to show Factory Method Pattern

import { ConcreteCreator } from './ConcreteCreator.js';

// Instantiate a ConcreteCreator
const creator = new ConcreteCreator();

// Call operation that internally uses the factory method to create a product
creator.someOperation();
```

---

### ✅ Explanation of Output

When you run `index.js`, you will see:

```bash
Using the ConcreteProduct.
```

#### 📌 Why?

* `ConcreteCreator` calls its overridden `factoryMethod()` which returns a `ConcreteProduct`.
* `someOperation()` uses this product, triggering its `use()` method.

---

### 📚 Summary

| Class             | Role                                       |
| ----------------- | ------------------------------------------ |
| `Product`         | Interface for products                     |
| `ConcreteProduct` | Implements `Product`                       |
| `Creator`         | Abstract class that defines factory method |
| `ConcreteCreator` | Implements the factory method              |

This demo shows how a class delegates object creation to its subclasses, promoting **loose coupling** and **extensibility**, key goals of the Factory Method pattern.

Would you like me to wrap this up in a `README.md` or zip structure for students?


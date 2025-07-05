Let’s explore the **Template Method Pattern**, another behavioral pattern from the GoF book on pages 325–334, with its UML on page 327.

✅ GoF participants:

* **AbstractClass** (defines the skeleton algorithm and abstract primitive operations)
* **ConcreteClass** (implements the primitive operations to carry out the steps)
* **Client** (runs the algorithm by using the AbstractClass interface)

---

**As requested**, I will:
✅ describe each class *outside* the code block
✅ put code inside triple-backtick fenced blocks with line-by-line comments
✅ place each class in its own `.js` module
✅ add a working `index.js` demo
✅ in a GitHub-friendly style for WebStorm on Linux

---

# 🧩 Class-by-Class Explanation

---

## 🧩 `AbstractClass.js`

**Purpose**
Defines the **skeleton** of an algorithm, with some steps implemented and some left to subclasses to override.

```javascript
// AbstractClass.js

// AbstractClass defines the template method and steps
class AbstractClass {
    // the template method
    templateMethod() {
        this.baseOperation1();
        this.requiredOperation1();
        this.baseOperation2();
        this.requiredOperation2();
        this.hook(); // optional step
    }

    baseOperation1() {
        console.log("AbstractClass: performing baseOperation1 (common)");
    }

    baseOperation2() {
        console.log("AbstractClass: performing baseOperation2 (common)");
    }

    requiredOperation1() {
        throw new Error("requiredOperation1() must be implemented by subclass");
    }

    requiredOperation2() {
        throw new Error("requiredOperation2() must be implemented by subclass");
    }

    // hook is optional
    hook() {
        // default: do nothing
    }
}

module.exports = AbstractClass;
```

---

## 🧩 `ConcreteClass1.js`

**Purpose**
Implements the primitive operations required by the abstract class, customizing the template.

```javascript
// ConcreteClass1.js

const AbstractClass = require('./AbstractClass');

// ConcreteClass1 implements required operations
class ConcreteClass1 extends AbstractClass {
    requiredOperation1() {
        console.log("ConcreteClass1: requiredOperation1 implementation");
    }

    requiredOperation2() {
        console.log("ConcreteClass1: requiredOperation2 implementation");
    }

    hook() {
        console.log("ConcreteClass1: optional hook step overridden");
    }
}

module.exports = ConcreteClass1;
```

---

## 🧩 `ConcreteClass2.js`

**Purpose**
Another subclass with its own implementation.

```javascript
// ConcreteClass2.js

const AbstractClass = require('./AbstractClass');

// ConcreteClass2 provides different required operations
class ConcreteClass2 extends AbstractClass {
    requiredOperation1() {
        console.log("ConcreteClass2: requiredOperation1 implementation");
    }

    requiredOperation2() {
        console.log("ConcreteClass2: requiredOperation2 implementation");
    }

    // inherits the default hook (does nothing)
}

module.exports = ConcreteClass2;
```

---

## 👤 `Client.js`

**Purpose**
Runs the template method on each concrete class, demonstrating their variations.

```javascript
// Client.js

// Client triggers the template methods
class Client {
    static run() {
        const ConcreteClass1 = require('./ConcreteClass1');
        const ConcreteClass2 = require('./ConcreteClass2');

        console.log("--- running ConcreteClass1 ---");
        const c1 = new ConcreteClass1();
        c1.templateMethod();

        console.log("\n--- running ConcreteClass2 ---");
        const c2 = new ConcreteClass2();
        c2.templateMethod();
    }
}

module.exports = Client;
```

---

## 🚀 `index.js`

**Purpose**
Runs the demonstration.

```javascript
// index.js

const Client = require('./Client');

// run the Template Method pattern demo
Client.run();
```

---

# ✅ Expected Output

```bash
--- running ConcreteClass1 ---
AbstractClass: performing baseOperation1 (common)
ConcreteClass1: requiredOperation1 implementation
AbstractClass: performing baseOperation2 (common)
ConcreteClass1: requiredOperation2 implementation
ConcreteClass1: optional hook step overridden

--- running ConcreteClass2 ---
AbstractClass: performing baseOperation1 (common)
ConcreteClass2: requiredOperation1 implementation
AbstractClass: performing baseOperation2 (common)
ConcreteClass2: requiredOperation2 implementation
```

---

# 📚 References

* *Design Patterns: Elements of Reusable Object-Oriented Software* (Gamma et al)
* Template Method Pattern, pages 325–334
* UML page 327
* Participants:

  * AbstractClass
  * ConcreteClass
  * Client



# 🧠 Teaching Notes

✅ Emphasize how the **template** fixes the algorithm's structure
✅ Allow students to practice overriding hooks
✅ Try adding more optional steps to illustrate flexibility

---

If you’d like, I can help build a **real-world** template (like document generation) — just say the word! 🚀


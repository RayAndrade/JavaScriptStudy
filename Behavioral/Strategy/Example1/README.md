Let’s dig into the **Strategy Pattern**, another behavioral pattern described in the GoF book on pages 315–323, with the UML on page 317.

✅ GoF participants:

* **Strategy** (interface for algorithms)
* **ConcreteStrategy** (each specific algorithm)
* **Context** (uses a Strategy to delegate work)
* **Client** (configures the Context with a strategy)

---

**As requested**, I will:
✅ describe each class *outside* the code block
✅ put the code inside triple-backtick fenced blocks with detailed line-by-line comments
✅ put each class in its own `.js` module
✅ include an `index.js` to demo
✅ structure it in a GitHub-friendly style for WebStorm on Linux

---

# 🧩 Class-by-Class Explanation

---

## 🧩 `Strategy.js`

**Purpose**
Declares the interface for a family of algorithms. All concrete strategies implement this method.

```javascript
// Strategy.js

// Strategy interface declares the algorithm's contract
class Strategy {
    execute(a, b) {
        throw new Error("execute() must be implemented by subclasses");
    }
}

module.exports = Strategy;
```

---

## 🧩 `ConcreteStrategyAdd.js`

**Purpose**
Implements an addition algorithm.

```javascript
// ConcreteStrategyAdd.js

const Strategy = require('./Strategy');

// ConcreteStrategyAdd implements addition
class ConcreteStrategyAdd extends Strategy {
    execute(a, b) {
        return a + b; // add
    }
}

module.exports = ConcreteStrategyAdd;
```

---

## 🧩 `ConcreteStrategySubtract.js`

**Purpose**
Implements a subtraction algorithm.

```javascript
// ConcreteStrategySubtract.js

const Strategy = require('./Strategy');

// ConcreteStrategySubtract implements subtraction
class ConcreteStrategySubtract extends Strategy {
    execute(a, b) {
        return a - b; // subtract
    }
}

module.exports = ConcreteStrategySubtract;
```

---

## 🧩 `ConcreteStrategyMultiply.js`

**Purpose**
Implements a multiplication algorithm.

```javascript
// ConcreteStrategyMultiply.js

const Strategy = require('./Strategy');

// ConcreteStrategyMultiply implements multiplication
class ConcreteStrategyMultiply extends Strategy {
    execute(a, b) {
        return a * b; // multiply
    }
}

module.exports = ConcreteStrategyMultiply;
```

---

## 🧩 `Context.js`

**Purpose**
Maintains a reference to the current strategy and delegates calls to it.

```javascript
// Context.js

// Context uses a Strategy to perform the algorithm
class Context {
    constructor(strategy) {
        this.strategy = strategy; // the chosen strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy; // allow changing strategy at runtime
    }

    executeStrategy(a, b) {
        return this.strategy.execute(a, b); // delegate
    }
}

module.exports = Context;
```

---

## 👤 `Client.js`

**Purpose**
Configures the context with a strategy and performs calculations.

```javascript
// Client.js

// Client demonstrates choosing different strategies
class Client {
    static run() {
        const Context = require('./Context');
        const ConcreteStrategyAdd = require('./ConcreteStrategyAdd');
        const ConcreteStrategySubtract = require('./ConcreteStrategySubtract');
        const ConcreteStrategyMultiply = require('./ConcreteStrategyMultiply');

        const context = new Context(new ConcreteStrategyAdd());

        // try addition
        console.log(`10 + 5 = ${context.executeStrategy(10, 5)}`);

        // change to subtraction
        context.setStrategy(new ConcreteStrategySubtract());
        console.log(`10 - 5 = ${context.executeStrategy(10, 5)}`);

        // change to multiplication
        context.setStrategy(new ConcreteStrategyMultiply());
        console.log(`10 * 5 = ${context.executeStrategy(10, 5)}`);
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

// run the Strategy pattern demo
Client.run();
```

---

# ✅ Expected Output

```bash
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
```

---

# 📚 References

* *Design Patterns: Elements of Reusable Object-Oriented Software* (Gamma et al)
* Strategy Pattern, pages 315–323
* UML page 317
* Participants:

  * Strategy
  * ConcreteStrategy
  * Context
  * Client



# 🧠 Teaching Notes

✅ Emphasize that Strategy **encapsulates** algorithms
✅ Makes it easy to add new algorithms without changing Context
✅ Extend with more strategies (like division or power) for practice

---

If you’d like, I can expand this into a **real-world** example (like sorting algorithms) — just say the word! 🚀


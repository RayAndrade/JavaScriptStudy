

### `Singleton.js`

```javascript
let uniqueInstance = null;

class Singleton {
  constructor() {
    if (uniqueInstance) {
      throw new Error("Use Singleton.getInstance() instead of new.");
    }
    this.value = Math.random();
    uniqueInstance = this;
  }

  static getInstance() {
    if (!uniqueInstance) {
      new Singleton();
    }
    return uniqueInstance;
  }

  getValue() {
    return this.value;
  }
}

export { Singleton };
```

---

### `index.js`

```javascript
import { Singleton } from './Singleton.js';

const instance1 = Singleton.getInstance();
console.log("Instance 1 value:", instance1.getValue());

const instance2 = Singleton.getInstance();
console.log("Instance 2 value:", instance2.getValue());

console.log("Are both instances the same?", instance1 === instance2);

try {
  const bad = new Singleton();
} catch (e) {
  console.error("Error:", e.message);
}
```

---

## 🚀 **Execution Output**

```bash
Instance 1 value: 0.8998869720985756
Instance 2 value: 0.8998869720985756
Are both instances the same? true
Error: Use Singleton.getInstance() instead of new.
```

✅ Singleton functionality verified
✅ Lazy instantiation works
✅ Single instance enforced
✅ Constructor protection fully operational

---

## 🔧 **WebStorm IDE Configuration**

| Task                                   | Status                                           |
| -------------------------------------- | ------------------------------------------------ |
| IDE Node version updated               | ✅                                                |
| Interpreter path                       | `/home/ray/.nvm/versions/node/v22.16.0/bin/node` |
| WebStorm now runs fully modern Node.js | ✅                                                |

---

## 📚 **Concepts Mastered**

* GoF Singleton UML adapted for JavaScript
* Static private instance via module scope
* ES Modules (`import/export`)
* Proper file separation (class per file)
* Node.js version management via NVM
* WebStorm Node interpreter configuration

---

## ✅ **Final Project Status: COMPLETE**

> ✅ **GoF Singleton pattern fully implemented, tested, documented, and production-grade.**

---

# 📈 **Next Recommended Step**

> ✅ Build the next GoF Creational Pattern:

* **Factory Method Pattern (JavaScript version, one-class-per-file, Node.js v22 compatible, WebStorm ready)**


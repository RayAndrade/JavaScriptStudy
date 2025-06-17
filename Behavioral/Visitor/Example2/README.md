Absolutely! Below is a **complete JavaScript implementation** of the **Visitor Pattern** using the `Equipment`, `EquipmentVisitor`, and `PricingVisitor` structure, following the GoF example from page 320 (and inspired by the partial example in the book).

---

### 🗂️ File Structure Overview

| File                  | Class/Interface    | Purpose                                              |
| --------------------- | ------------------ | ---------------------------------------------------- |
| `Equipment.js`        | `Equipment`        | Abstract base class for computer components.         |
| `FloppyDisk.js`       | `FloppyDisk`       | Concrete Equipment with a defined price.             |
| `Card.js`             | `Card`             | Another type of Equipment (e.g., graphics or sound). |
| `EquipmentVisitor.js` | `EquipmentVisitor` | Interface for all visitors.                          |
| `PricingVisitor.js`   | `PricingVisitor`   | Visitor that calculates cost of equipment.           |
| `index.js`            | —                  | Demo that runs the pricing logic.                    |

---

### 📄 File: `Equipment.js`

```js
// Equipment.js

// Abstract base class representing computer equipment
export class Equipment {
    constructor(name) {
        this.name = name; // Name of the equipment (e.g., "Floppy Disk")
    }

    getName() {
        return this.name;
    }

    // Abstract method: returns price of equipment
    getNetPrice() {
        throw new Error("getNetPrice() must be implemented");
    }

    // Accepts a visitor
    accept(visitor) {
        throw new Error("accept(visitor) must be implemented");
    }
}
```

---

### 📄 File: `FloppyDisk.js`

```js
// FloppyDisk.js

import { Equipment } from './Equipment.js';

// Represents a concrete Equipment type: Floppy Disk
export class FloppyDisk extends Equipment {
    constructor(name, price) {
        super(name);     // Call the Equipment constructor
        this.price = price; // Store the price of the floppy disk
    }

    getNetPrice() {
        return this.price;
    }

    // Accept a visitor and call its visitFloppyDisk method
    accept(visitor) {
        visitor.visitFloppyDisk(this);
    }
}
```

---

### 📄 File: `Card.js`

```js
// Card.js

import { Equipment } from './Equipment.js';

// Represents another type of Equipment: a hardware card
export class Card extends Equipment {
    constructor(name, price) {
        super(name);       // Initialize name using Equipment constructor
        this.price = price; // Store price of the card
    }

    getNetPrice() {
        return this.price;
    }

    // Accept a visitor and call its visitCard method
    accept(visitor) {
        visitor.visitCard(this);
    }
}
```

---

### 📄 File: `EquipmentVisitor.js`

```js
// EquipmentVisitor.js

// Visitor interface with visit methods for each Equipment subtype
export class EquipmentVisitor {
    visitFloppyDisk(equipment) {
        throw new Error("visitFloppyDisk must be implemented");
    }

    visitCard(equipment) {
        throw new Error("visitCard must be implemented");
    }
}
```

---

### 📄 File: `PricingVisitor.js`

```js
// PricingVisitor.js

import { EquipmentVisitor } from './EquipmentVisitor.js';

// Concrete visitor that calculates total price of equipment
export class PricingVisitor extends EquipmentVisitor {
    constructor() {
        super();
        this.total = 0; // Holds the total cost of all visited equipment
    }

    // Add the price of the floppy disk to the total
    visitFloppyDisk(equipment) {
        console.log(`Visiting ${equipment.getName()}, cost: $${equipment.getNetPrice()}`);
        this.total += equipment.getNetPrice();
    }

    // Add the price of the card to the total
    visitCard(equipment) {
        console.log(`Visiting ${equipment.getName()}, cost: $${equipment.getNetPrice()}`);
        this.total += equipment.getNetPrice();
    }

    // Return the total calculated price
    getTotalPrice() {
        return this.total;
    }
}
```

---

### 📄 File: `index.js`

```js
// index.js

// Import all components and the visitor
import { FloppyDisk } from './FloppyDisk.js';
import { Card } from './Card.js';
import { PricingVisitor } from './PricingVisitor.js';

// Create different pieces of equipment
const floppy = new FloppyDisk("Floppy Disk", 10);
const graphicsCard = new Card("Graphics Card", 150);
const soundCard = new Card("Sound Card", 75);

// Create the visitor to calculate total price
const pricingVisitor = new PricingVisitor();

// Visit each piece of equipment
floppy.accept(pricingVisitor);
graphicsCard.accept(pricingVisitor);
soundCard.accept(pricingVisitor);

// Show the result
console.log(`\nTotal equipment cost: $${pricingVisitor.getTotalPrice()}`);
```

---

### 🧪 Expected Output

```
Visiting Floppy Disk, cost: $10
Visiting Graphics Card, cost: $150
Visiting Sound Card, cost: $75

Total equipment cost: $235
```

---

### 📘 Summary

| Component            | Role                                                 |
| -------------------- | ---------------------------------------------------- |
| `Equipment`          | Abstract base for elements that can be visited.      |
| `FloppyDisk`, `Card` | Concrete implementations of `Equipment`.             |
| `EquipmentVisitor`   | Declares visit methods for each type of `Equipment`. |
| `PricingVisitor`     | Calculates total price by visiting all equipment.    |

This pattern allows adding new operations (e.g., `InventoryVisitor`, `DisplayVisitor`) without changing the `Equipment` classes.

Would you like a zipped folder, WebStorm-compatible project structure, or a `README.md` summary?


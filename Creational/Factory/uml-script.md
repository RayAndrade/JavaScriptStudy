Here is **Creational Pattern — Factory Method** rewritten for **JavaScript students**, using your rules:

* **Exactly 3 lines per Participant**
* **Each line ≤ 15 words**
* **Keep original GoF class names**
* **Junior-college level, JavaScript-friendly**

---

# 🌟 Factory Method — Participants (for JavaScript Students)

## **Product**

* Defines the interface all concrete products must follow.
* Describes behavior expected from any Product.
* Contains no real working code itself.

## **ConcreteProduct**

* Actual JavaScript object created by a ConcreteCreator.
* Implements all behavior defined in Product.
* Represents one specific Product variation.

## **Creator**

* Declares the Factory Method for creating Products.
* Provides default logic using Product objects.
* Lets subclasses decide which ConcreteProduct to return.

## **ConcreteCreator**

* Overrides the Factory Method to create a specific Concrete Product.
* Controls which Product class gets instantiated.
* Keeps Product creation flexible for the Client.



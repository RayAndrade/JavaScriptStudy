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

Ready for the next one? Builder? Factory Method? Prototype?


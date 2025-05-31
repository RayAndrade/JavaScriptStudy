# Inheritance in JavaScript  
## *Pro JavaScript Design Patterns* — Summary (pp. 41–65)

---

## Introduction

This chapter focuses on how JavaScript handles inheritance, which differs from classical inheritance models found in languages like Java or C++. JavaScript uses prototypal inheritance, and understanding it is crucial to applying design patterns effectively in JavaScript.

---

## The Purpose of Inheritance

- Promotes **code reuse** by sharing behaviors between objects.
- Supports **polymorphism**, enabling different objects to be used interchangeably.
- Helps implement **design patterns** that rely on hierarchical relationships.
- Models **"is-a"** relationships effectively.
- In JavaScript, inheritance happens between **objects**, not classes.

---

## The Prototype Chain

- Every object has an internal link to another object called its **prototype**.
- Property lookups follow the **prototype chain** upwards until a match is found or the end is reached.
- This mechanism enables behavior sharing across objects.

---

## Constructor Functions and Prototypes

- Constructor functions simulate classes by using the `new` keyword.
- A constructor's `prototype` property defines shared methods.
- Instance-specific properties are defined inside the constructor function.
- Prototype methods are shared across all instances.

---

## Problems with Naive Inheritance

- **Shared References**: Reference-type properties (like arrays or objects) defined on the prototype are shared among all instances.
- **Overriding Properties**: Must override shared properties carefully to prevent cross-instance interference.
- **Encapsulation Limitations**: No true private properties; closures are needed to simulate privacy.

---

## Alternative Inheritance Techniques

### 1. Constructor Stealing (Borrowing Constructors)

- Calls the parent constructor within the child constructor using `call()` or `apply()`.
- Solves shared reference problems.
- Instance properties are not shared.
- Does not inherit prototype methods automatically.

### 2. Combination Inheritance

- Combines prototype chaining and constructor stealing.
- Instance properties are assigned via constructor stealing.
- Shared methods are inherited through prototype chaining.
- A common pre-ES6 technique.

### 3. Prototypal Inheritance (Object Cloning)

- Creates a shallow copy of an existing object (e.g., `Object.create()`).
- Embraces JavaScript's native inheritance model.
- Simplifies inheritance without constructors.

### 4. Parasitic Inheritance

- Builds on prototypal inheritance.
- Adds additional properties/methods to the cloned object.
- Flexible but may obscure inheritance structure.

### 5. Parasitic Combination Inheritance

- Avoids redundant calls to parent constructors.
- Efficient and minimizes performance cost.
- Prototype is assigned directly; constructor is called only once.
- Considered one of the most efficient patterns before ES6.

---

## Best Practices

- **Favor composition over inheritance** where practical.
- Use inheritance only for true "is-a" relationships.
- Avoid placing mutable reference-type properties on prototypes.
- Use closures for private data when necessary.
- Understand and manage prototype chains carefully to avoid unexpected behavior.

---

## Conclusion

JavaScript's prototypal inheritance offers flexibility and power but requires understanding and discipline. Correct inheritance models enable clean design pattern implementations and maintainable code.

---



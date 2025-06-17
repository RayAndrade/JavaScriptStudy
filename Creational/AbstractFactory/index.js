// index.js
// Purpose: Demo entry point — executes the Factory Method in action

import ConcreteCreator from './ConcreteCreator.js';

// Create an instance of the concrete creator
const creator = new ConcreteCreator();

// Run the business logic that uses the factory method internally
const result = creator.someOperation();

// Output the result to the console
console.log(result);
// Expected output: "Creator: Working with Result from ConcreteProduct"

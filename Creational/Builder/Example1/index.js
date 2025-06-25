// index.js
const ConcreteBuilder = require('./ConcreteBuilder');
const Director = require('./Director');

// Create builder and director
const builder = new ConcreteBuilder();
const director = new Director();

// Director builds the product using the builder
director.construct(builder);

// Get the final product and show its parts
const product = builder.getResult();
product.show();  // → Product parts: PartA, PartB
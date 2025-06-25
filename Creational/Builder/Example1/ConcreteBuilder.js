// ConcreteBuilder.js
const Builder = require('./Builder');
const Product = require('./Product');

class ConcreteBuilder extends Builder {
    constructor() {
        super();
        this.product = new Product();  // Initialize new Product
    }

    buildPartA() {
        this.product.add("PartA");     // Add Part A to product
    }

    buildPartB() {
        this.product.add("PartB");     // Add Part B to product
    }

    getResult() {
        return this.product;           // Return the full product
    }
}
module.exports = ConcreteBuilder;
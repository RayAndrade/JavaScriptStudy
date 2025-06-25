// Product.js
class Product {
    constructor() {
        this.parts = [];               // Initialize parts list
    }

    add(part) {
        this.parts.push(part);         // Add a part to the list
    }

    show() {
        console.log("Product parts: " + this.parts.join(", "));
    }
}
module.exports = Product;
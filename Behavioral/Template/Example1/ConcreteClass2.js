// ConcreteClass2.js

const AbstractClass = require('./AbstractClass');

// ConcreteClass2 provides different required operations
class ConcreteClass2 extends AbstractClass {
    requiredOperation1() {
        console.log("ConcreteClass2: requiredOperation1 implementation");
    }

    requiredOperation2() {
        console.log("ConcreteClass2: requiredOperation2 implementation");
    }

    // inherits the default hook (does nothing)
}

module.exports = ConcreteClass2;

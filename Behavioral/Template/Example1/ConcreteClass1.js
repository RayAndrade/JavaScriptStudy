// ConcreteClass1.js

const AbstractClass = require('./AbstractClass');

// ConcreteClass1 implements required operations
class ConcreteClass1 extends AbstractClass {
    requiredOperation1() {
        console.log("ConcreteClass1: requiredOperation1 implementation");
    }

    requiredOperation2() {
        console.log("ConcreteClass1: requiredOperation2 implementation");
    }

    hook() {
        console.log("ConcreteClass1: optional hook step overridden");
    }
}

module.exports = ConcreteClass1;

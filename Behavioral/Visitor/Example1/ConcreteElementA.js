// ConcreteElementA.js

const Element = require('./Element');

// ConcreteElementA is a visitable element
class ConcreteElementA extends Element {
    constructor(value) {
        super();
        this.value = value; // state unique to this element
    }

    accept(visitor) {
        visitor.visitConcreteElementA(this); // double-dispatch
    }
}

module.exports = ConcreteElementA;
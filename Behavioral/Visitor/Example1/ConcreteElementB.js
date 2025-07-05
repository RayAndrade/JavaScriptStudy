// ConcreteElementB.js

const Element = require('./Element');

// ConcreteElementB is a visitable element
class ConcreteElementB extends Element {
    constructor(name) {
        super();
        this.name = name; // state unique to this element
    }

    accept(visitor) {
        visitor.visitConcreteElementB(this); // double-dispatch
    }
}

module.exports = ConcreteElementB;

const Element = require('./Element');

class ConcreteElementA extends Element {
    constructor(value) {
        super();
        this.value = value;
    }
    accept(visitor) {
        visitor.visitConcreteElementA(this);
    }
}
module.exports = ConcreteElementA;
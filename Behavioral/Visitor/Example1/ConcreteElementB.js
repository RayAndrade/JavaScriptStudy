
const Element = require('./Element');

class ConcreteElementB extends Element {
    constructor(name) {
        super();
        this.name = name;
    }
    accept(visitor) {
        visitor.visitConcreteElementB(this);
    }
}
module.exports = ConcreteElementB;
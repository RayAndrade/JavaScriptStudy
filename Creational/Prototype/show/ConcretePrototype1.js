const Prototype = require('./Prototype');

class ConcretePrototype1 extends Prototype {
    constructor(name) {
        super();
        this.name = name;
    }
    clone() {
        return new ConcretePrototype1(this.name);
    }
    toString() {
        return `ConcretePrototype1 with name: ${this.name}`;
    }
}
module.exports = ConcretePrototype1;
const Aggregate = require('./Aggregate');
const ConcreteIterator = require('./ConcreteIterator');

class ConcreteAggregate extends Aggregate {
    constructor() {
        super();
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get(index) {
        return this.items[index];
    }
    count() {
        return this.items.length;
    }
    createIterator() {
        return new ConcreteIterator(this); // return an iterator
    }
}
module.exports = ConcreteAggregate;
// ConcreteAggregate.js

const Aggregate = require('./Aggregate');
const ConcreteIterator = require('./ConcreteIterator');

// ConcreteAggregate holds the collection
class ConcreteAggregate extends Aggregate {
    constructor() {
        super();
        this.items = []; // store collection items
    }

    add(item) {
        this.items.push(item); // add item to collection
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

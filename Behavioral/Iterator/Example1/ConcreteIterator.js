// ConcreteIterator.js

const Iterator = require('./Iterator');

// ConcreteIterator traverses over elements of a ConcreteAggregate
class ConcreteIterator extends Iterator {
    constructor(aggregate) {
        super();
        this.aggregate = aggregate;   // holds reference to aggregate
        this.index = 0;               // start at the beginning
    }

    first() {
        this.index = 0;               // reset index to first element
        return this.aggregate.get(this.index);
    }

    next() {
        this.index++;
        if (!this.isDone()) {
            return this.aggregate.get(this.index);
        }
        return null;
    }

    isDone() {
        return this.index >= this.aggregate.count();
    }

    currentItem() {
        if (!this.isDone()) {
            return this.aggregate.get(this.index);
        }
        return null;
    }
}

module.exports = ConcreteIterator;

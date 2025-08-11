
const Iterator = require('./Iterator');

class ConcreteIterator extends Iterator {
    constructor(aggregate) {
        super();
        this.aggregate = aggregate;
        this.index = 0;
    }
    first() {
        this.index = 0;
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
        return null; }
}
module.exports = ConcreteIterator;
// Client.js

// Client uses the iterator
class Client {
    static run() {
        const ConcreteAggregate = require('./ConcreteAggregate');
        const aggregate = new ConcreteAggregate();

        // populate aggregate
        aggregate.add("Apple");
        aggregate.add("Banana");
        aggregate.add("Cherry");
        aggregate.add("Date");

        // get iterator
        const iterator = aggregate.createIterator();

        // traverse the aggregate
        for (let item = iterator.first(); !iterator.isDone(); item = iterator.next()) {
            console.log(`Client sees: ${item}`);
        }
    }
}

module.exports = Client;

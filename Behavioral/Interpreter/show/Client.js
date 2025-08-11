
class Client {
    static run() {
        const ConcreteAggregate = require('./ConcreteAggregate');
        const aggregate = new ConcreteAggregate();

        aggregate.add("Apple");
        aggregate.add("Banana");
        aggregate.add("Cherry");
        aggregate.add("Date");

        const iterator = aggregate.createIterator();

        for (let item = iterator.first(); !iterator.isDone(); item = iterator.next()) {
            console.log(`Client sees: ${item}`);
        }
    }
}
module.exports = Client;
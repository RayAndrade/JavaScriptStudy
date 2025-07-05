// Client.js

// Client sets up object structure and triggers visiting
class Client {
    static run() {
        const ObjectStructure = require('./ObjectStructure');
        const ConcreteElementA = require('./ConcreteElementA');
        const ConcreteElementB = require('./ConcreteElementB');
        const ConcreteVisitor = require('./ConcreteVisitor');

        const structure = new ObjectStructure();

        // add elements
        structure.attach(new ConcreteElementA(100));
        structure.attach(new ConcreteElementB("Element B"));

        // create visitor
        const visitor = new ConcreteVisitor();

        // apply visitor to all elements
        structure.accept(visitor);
    }
}

module.exports = Client;
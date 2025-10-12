
class Client {
    static run() {
        const ObjectStructure = require('./ObjectStructure');
        const ConcreteElementA = require('./ConcreteElementA');
        const ConcreteElementB = require('./ConcreteElementB');
        const ConcreteVisitor = require('./ConcreteVisitor');

        const structure = new ObjectStructure();

        structure.attach(new ConcreteElementA(100));
        structure.attach(new ConcreteElementB("Element B"));

        const visitor = new ConcreteVisitor();

        structure.accept(visitor);
    }
}
module.exports = Client;
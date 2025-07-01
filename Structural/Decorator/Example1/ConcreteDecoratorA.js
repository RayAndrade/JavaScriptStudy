const Decorator = require('./Decorator');

class ConcreteDecoratorA extends Decorator {
    operation() {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}
module.exports = ConcreteDecoratorA;
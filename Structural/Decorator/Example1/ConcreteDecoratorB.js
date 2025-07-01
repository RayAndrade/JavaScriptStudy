const Decorator = require('./Decorator');

class ConcreteDecoratorB extends Decorator {
    operation() {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}
module.exports = ConcreteDecoratorB;
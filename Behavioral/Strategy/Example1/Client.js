// Client.js

// Client demonstrates choosing different strategies
class Client {
    static run() {
        const Context = require('./Context');
        const ConcreteStrategyAdd = require('./ConcreteStrategyAdd');
        const ConcreteStrategySubtract = require('./ConcreteStrategySubtract');
        const ConcreteStrategyMultiply = require('./ConcreteStrategyMultiply');

        const context = new Context(new ConcreteStrategyAdd());

        // try addition
        console.log(`10 + 5 = ${context.executeStrategy(10, 5)}`);

        // change to subtraction
        context.setStrategy(new ConcreteStrategySubtract());
        console.log(`10 - 5 = ${context.executeStrategy(10, 5)}`);

        // change to multiplication
        context.setStrategy(new ConcreteStrategyMultiply());
        console.log(`10 * 5 = ${context.executeStrategy(10, 5)}`);
    }
}

module.exports = Client;

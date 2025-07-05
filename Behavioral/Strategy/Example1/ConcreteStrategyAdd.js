// ConcreteStrategyAdd.js

const Strategy = require('./Strategy');

// ConcreteStrategyAdd implements addition
class ConcreteStrategyAdd extends Strategy {
    execute(a, b) {
        return a + b; // add
    }
}

module.exports = ConcreteStrategyAdd;

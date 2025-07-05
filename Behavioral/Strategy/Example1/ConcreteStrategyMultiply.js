// ConcreteStrategyMultiply.js

const Strategy = require('./Strategy');

// ConcreteStrategyMultiply implements multiplication
class ConcreteStrategyMultiply extends Strategy {
    execute(a, b) {
        return a * b; // multiply
    }
}

module.exports = ConcreteStrategyMultiply;

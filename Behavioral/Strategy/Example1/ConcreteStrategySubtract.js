// ConcreteStrategySubtract.js

const Strategy = require('./Strategy');

// ConcreteStrategySubtract implements subtraction
class ConcreteStrategySubtract extends Strategy {
    execute(a, b) {
        return a - b; // subtract
    }
}

module.exports = ConcreteStrategySubtract;

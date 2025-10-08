
const Strategy = require('./Strategy');

class ConcreteStrategyMultiply extends Strategy {
    execute(a, b) {
        return a * b; // multiply
    }
}
module.exports = ConcreteStrategyMultiply;
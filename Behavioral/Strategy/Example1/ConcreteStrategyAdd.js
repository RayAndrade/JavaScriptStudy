
const Strategy = require('./Strategy');

class ConcreteStrategyAdd extends Strategy {
    execute(a, b) {
        return a + b;
    }
}
module.exports = ConcreteStrategyAdd;
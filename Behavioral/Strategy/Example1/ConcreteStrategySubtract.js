
const Strategy = require('./Strategy');

class ConcreteStrategySubtract extends Strategy {
    execute(a, b) {
        return a - b;
    }
}
module.exports = ConcreteStrategySubtract;
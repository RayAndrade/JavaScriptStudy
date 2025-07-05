// Context.js

// Context uses a Strategy to perform the algorithm
class Context {
    constructor(strategy) {
        this.strategy = strategy; // the chosen strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy; // allow changing strategy at runtime
    }

    executeStrategy(a, b) {
        return this.strategy.execute(a, b); // delegate
    }
}

module.exports = Context;

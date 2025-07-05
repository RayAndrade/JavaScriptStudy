// Strategy.js

// Strategy interface declares the algorithm's contract
class Strategy {
    execute(a, b) {
        throw new Error("execute() must be implemented by subclasses");
    }
}

module.exports = Strategy;

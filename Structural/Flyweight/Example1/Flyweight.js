// Flyweight.js

// Flyweight defines an interface for flyweight objects
class Flyweight {
    operation(extrinsicState) {
        throw new Error("operation() must be implemented.");
    }
}

module.exports = Flyweight;

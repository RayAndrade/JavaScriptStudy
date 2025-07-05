// Aggregate.js

// Aggregate defines the interface for creating an iterator
class Aggregate {
    createIterator() {
        throw new Error("createIterator() must be implemented by subclasses");
    }
}

module.exports = Aggregate;

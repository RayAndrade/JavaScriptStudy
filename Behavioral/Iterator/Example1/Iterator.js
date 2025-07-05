// Iterator.js

// Iterator defines the interface for traversal
class Iterator {
    first() {
        throw new Error("first() must be implemented by subclasses");
    }
    next() {
        throw new Error("next() must be implemented by subclasses");
    }
    isDone() {
        throw new Error("isDone() must be implemented by subclasses");
    }
    currentItem() {
        throw new Error("currentItem() must be implemented by subclasses");
    }
}

module.exports = Iterator;

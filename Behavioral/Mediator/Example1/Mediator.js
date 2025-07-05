// Mediator.js

// Mediator defines the interface for coordinating colleagues
class Mediator {
    send(message, colleague) {
        throw new Error("send() must be implemented by subclasses");
    }
}

module.exports = Mediator;

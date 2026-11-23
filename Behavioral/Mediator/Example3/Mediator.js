class Mediator {
    Notify(sender, message) {
        throw new Error("A concrete mediator must implement Notify().");
    }
}

module.exports = Mediator;
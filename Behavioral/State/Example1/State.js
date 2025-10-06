
class State {
    handle(context) {
        throw new Error("handle() must be implemented by subclasses");
    }
}
module.exports = State;

class Element {
    accept(visitor) {
        throw new Error("accept() must be implemented by subclass");
    }
}
module.exports = Element;
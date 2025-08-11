
class Aggregate {
    createIterator() {
        throw new Error("createIterator() must be implemented by subclasses");
    }
}
module.exports = Aggregate;
class Component {
    operation() {
        throw new Error("operation() must be implemented by subclasses");
    }
}
module.exports = Component;
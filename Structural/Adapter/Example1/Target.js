class Target {
    request() {
        throw new Error("request() must be implemented by subclasses");
    }
}
module.exports = Target;
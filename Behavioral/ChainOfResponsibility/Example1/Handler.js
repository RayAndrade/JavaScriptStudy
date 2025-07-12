class Handler {
    constructor() {
        this.successor = null; // next handler in the chain
    }
    setSuccessor(successor) {
        this.successor = successor;
    }
    handleRequest(request) {
        throw new Error("handleRequest() must be implemented by subclasses.");
    }
}
module.exports = Handler;
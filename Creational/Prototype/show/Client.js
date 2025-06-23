class Client {
    constructor(prototype) {
        this.prototype = prototype;
    }
    makeCopy() {
        return this.prototype.clone();
    }
}
module.exports = Client;
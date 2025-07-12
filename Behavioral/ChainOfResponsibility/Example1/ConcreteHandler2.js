
const Handler = require('./Handler');

class ConcreteHandler2 extends Handler {
    handleRequest(request) {
        if (request >= 10 && request < 20) {
            console.log(`ConcreteHandler2 handled request ${request}`);
        } else if (this.successor) {
            console.log(`ConcreteHandler2 forwards ${request} to successor`);
            this.successor.handleRequest(request);
        }
    }
}
module.exports = ConcreteHandler2;
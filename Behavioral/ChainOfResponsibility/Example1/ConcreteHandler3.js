const Handler = require('./Handler');

class ConcreteHandler3 extends Handler {
    handleRequest(request) {
        if (request >= 20 && request < 30) {
            console.log(`ConcreteHandler3 handled request ${request}`);
        } else {
            console.log(`ConcreteHandler3: no handler for ${request}`);
        }
    }
}
module.exports = ConcreteHandler3;
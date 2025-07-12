
class Client {
    static run() {
        const ConcreteHandler1 = require('./ConcreteHandler1');
        const ConcreteHandler2 = require('./ConcreteHandler2');
        const ConcreteHandler3 = require('./ConcreteHandler3');

        const h1 = new ConcreteHandler1();
        const h2 = new ConcreteHandler2();
        const h3 = new ConcreteHandler3();

        h1.setSuccessor(h2);
        h2.setSuccessor(h3);

        const requests = [2, 5, 14, 22, 30];

        requests.forEach(request => {
            console.log(`Client: sending request ${request}`);
            h1.handleRequest(request);
        });
    }
}
module.exports = Client;
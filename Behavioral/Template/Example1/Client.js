// Client.js

// Client triggers the template methods
class Client {
    static run() {
        const ConcreteClass1 = require('./ConcreteClass1');
        const ConcreteClass2 = require('./ConcreteClass2');

        console.log("--- running ConcreteClass1 ---");
        const c1 = new ConcreteClass1();
        c1.templateMethod();

        console.log("\n--- running ConcreteClass2 ---");
        const c2 = new ConcreteClass2();
        c2.templateMethod();
    }
}

module.exports = Client;

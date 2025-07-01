// Client.js

const UnsharedConcreteFlyweight = require('./UnsharedConcreteFlyweight');

// Client uses FlyweightFactory to manage flyweights
class Client {
    static run(factory) {
        // reuse a flyweight
        const flyweight1 = factory.getFlyweight("shared");
        flyweight1.operation("context1");

        // reuse again
        const flyweight2 = factory.getFlyweight("shared");
        flyweight2.operation("context2");

        // show it is reused
        console.log(`Same flyweight? ${flyweight1 === flyweight2}`);

        // use an unshared flyweight
        const unshared = new UnsharedConcreteFlyweight("unique");
        unshared.operation("context3");
    }
}

module.exports = Client;

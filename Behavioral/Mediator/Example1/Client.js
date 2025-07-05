// Client.js

// Client sets up the mediator and the colleagues
class Client {
    static run() {
        const ConcreteMediator = require('./ConcreteMediator');
        const ConcreteColleague1 = require('./ConcreteColleague1');
        const ConcreteColleague2 = require('./ConcreteColleague2');

        // create mediator
        const mediator = new ConcreteMediator();

        // create colleagues
        const colleague1 = new ConcreteColleague1(mediator);
        const colleague2 = new ConcreteColleague2(mediator);

        // register colleagues with the mediator
        mediator.setColleague1(colleague1);
        mediator.setColleague2(colleague2);

        // colleagues communicate through the mediator
        colleague1.send("How are you?");
        colleague2.send("I'm good, thanks!");
    }
}

module.exports = Client;

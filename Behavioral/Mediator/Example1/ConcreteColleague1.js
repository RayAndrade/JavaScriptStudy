// ConcreteColleague1.js

const Colleague = require('./Colleague');

// ConcreteColleague1 communicates through the mediator
class ConcreteColleague1 extends Colleague {
    send(message) {
        console.log(`ConcreteColleague1 sends: ${message}`);
        this.mediator.send(message, this); // delegate to mediator
    }

    notify(message) {
        console.log(`ConcreteColleague1 receives: ${message}`);
    }
}

module.exports = ConcreteColleague1;

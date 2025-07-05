// ConcreteColleague2.js

const Colleague = require('./Colleague');

// ConcreteColleague2 communicates through the mediator
class ConcreteColleague2 extends Colleague {
    send(message) {
        console.log(`ConcreteColleague2 sends: ${message}`);
        this.mediator.send(message, this); // delegate to mediator
    }

    notify(message) {
        console.log(`ConcreteColleague2 receives: ${message}`);
    }
}

module.exports = ConcreteColleague2;

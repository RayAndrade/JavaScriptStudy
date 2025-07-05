// ConcreteMediator.js

const Mediator = require('./Mediator');

// ConcreteMediator: coordinates colleagues' communication
class ConcreteMediator extends Mediator {
    constructor() {
        super();
        this.colleague1 = null; // store reference to colleague1
        this.colleague2 = null; // store reference to colleague2
    }

    setColleague1(colleague) {
        this.colleague1 = colleague;
    }

    setColleague2(colleague) {
        this.colleague2 = colleague;
    }

    send(message, sender) {
        // check who sent the message
        if (sender === this.colleague1) {
            // colleague1 sends to colleague2
            this.colleague2.notify(message);
        } else {
            // colleague2 sends to colleague1
            this.colleague1.notify(message);
        }
    }
}

module.exports = ConcreteMediator;

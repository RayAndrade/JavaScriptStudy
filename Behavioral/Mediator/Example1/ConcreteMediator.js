
const Mediator = require('./Mediator');

class ConcreteMediator extends Mediator {
    constructor() {
        super();
        this.colleague1 = null;
        this.colleague2 = null;
    }
    setColleague1(colleague) {
        this.colleague1 = colleague;
    }
    setColleague2(colleague) {
        this.colleague2 = colleague;
    }
    send(message, sender) {
             if (sender === this.colleague1) {
            this.colleague2.notify(message);
        } else {
            this.colleague1.notify(message);
        }
    }
}

module.exports = ConcreteMediator;
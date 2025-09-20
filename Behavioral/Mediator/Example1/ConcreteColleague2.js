
const Colleague = require('./Colleague');

class ConcreteColleague2 extends Colleague {
    send(message) {
        console.log(`ConcreteColleague2 sends: ${message}`);
        this.mediator.send(message, this);
    }
    notify(message) {
        console.log(`ConcreteColleague2 receives: ${message}`);
    }
}

module.exports = ConcreteColleague2;

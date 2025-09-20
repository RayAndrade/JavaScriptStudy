
const Colleague = require('./Colleague');

class ConcreteColleague1 extends Colleague {
    send(message) {
        console.log(`ConcreteColleague1 sends: ${message}`);
        this.mediator.send(message, this);
    }
    notify(message) {
        console.log(`ConcreteColleague1 receives: ${message}`);
    }
}
module.exports = ConcreteColleague1;
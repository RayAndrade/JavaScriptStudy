const Colleague = require("./Colleague");

class ConcreteColleague1 extends Colleague {
    Send(message) {
        console.log(`ConcreteColleague1 sends: ${message}`);
        this._mediator.Notify(this, message);
    }

    Receive(message) {
        console.log(`ConcreteColleague1 receives: ${message}`);
    }
}

module.exports = ConcreteColleague1;
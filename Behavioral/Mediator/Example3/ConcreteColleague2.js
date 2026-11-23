const Colleague = require("./Colleague");

class ConcreteColleague2 extends Colleague {
    Send(message) {
        console.log(`ConcreteColleague2 sends: ${message}`);
        this._mediator.Notify(this, message);
    }

    Receive(message) {
        console.log(`ConcreteColleague2 receives: ${message}`);
    }
}

module.exports = ConcreteColleague2;
const Mediator = require("./Mediator");

class ConcreteMediator extends Mediator {
    SetColleagues(colleague1, colleague2) {
        this._colleague1 = colleague1;
        this._colleague2 = colleague2;
    }

    Notify(sender, message) {
        if (sender === this._colleague1) {
            this._colleague2.Receive(message);
        } else if (sender === this._colleague2) {
            this._colleague1.Receive(message);
        }
    }
}

module.exports = ConcreteMediator;
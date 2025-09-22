
class Client {
    static run() {
        const Originator = require('./Originator');
        const Caretaker = require('./Caretaker');

        const originator = new Originator();
        const caretaker = new Caretaker();

        originator.setState("State A");
        caretaker.addMemento(originator.save());

        originator.setState("State B");
        caretaker.addMemento(originator.save());

        originator.setState("State C");

        originator.restore(caretaker.getMemento(0));
        originator.restore(caretaker.getMemento(1));
    }
}
module.exports = Client;
// Client.js

// Client sets up the subject and observers
class Client {
    static run() {
        const ConcreteSubject = require('./ConcreteSubject');
        const ConcreteObserver = require('./ConcreteObserver');

        // create the subject
        const subject = new ConcreteSubject();

        // create two observers
        const observer1 = new ConcreteObserver("Observer1", subject);
        const observer2 = new ConcreteObserver("Observer2", subject);

        // register observers
        subject.attach(observer1);
        subject.attach(observer2);

        // change state
        subject.setState("State A");
        subject.setState("State B");
    }
}

module.exports = Client;

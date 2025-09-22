

class Client {
    static run() {
        const ConcreteSubject = require('./ConcreteSubject');
        const ConcreteObserver = require('./ConcreteObserver');

        const subject = new ConcreteSubject();

        const observer1 = new ConcreteObserver("Observer1", subject);
        const observer2 = new ConcreteObserver("Observer2", subject);

        subject.attach(observer1);
        subject.attach(observer2);

        subject.setState("State A");
        subject.setState("State B");
    }
}

module.exports = Client;
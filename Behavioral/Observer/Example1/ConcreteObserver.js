// ConcreteObserver.js

const Observer = require('./Observer');

// ConcreteObserver reacts to subject's state changes
class ConcreteObserver extends Observer {
    constructor(name, subject) {
        super();
        this.name = name;         // observer's own name
        this.subject = subject;   // reference to subject
    }

    update() {
        console.log(
            `${this.name} observes new state: ${this.subject.getState()}`
        );
    }
}

module.exports = ConcreteObserver;

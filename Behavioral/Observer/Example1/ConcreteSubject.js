// ConcreteSubject.js

const Subject = require('./Subject');

// ConcreteSubject holds its own state and notifies observers
class ConcreteSubject extends Subject {
    constructor() {
        super();
        this.state = null; // subject state
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state; // update internal state
        console.log(`ConcreteSubject: state changed to ${state}`);
        this.notify(); // notify observers
    }
}

module.exports = ConcreteSubject;

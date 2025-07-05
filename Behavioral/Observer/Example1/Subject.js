// Subject.js

// Subject defines methods to attach, detach, and notify observers
class Subject {
    constructor() {
        this.observers = []; // observers that subscribe to updates
    }

    attach(observer) {
        this.observers.push(observer); // register an observer
    }

    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1); // remove an observer
        }
    }

    notify() {
        // call update on all registered observers
        this.observers.forEach(observer => observer.update());
    }
}

module.exports = Subject;

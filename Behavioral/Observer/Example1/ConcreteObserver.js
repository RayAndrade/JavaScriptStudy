
const Observer = require('./Observer');

class ConcreteObserver extends Observer {
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject;
    }
    update() {
        console.log(
            `${this.name} observes new state: ${this.subject.getState()}`
        );
    }
}
module.exports = ConcreteObserver;
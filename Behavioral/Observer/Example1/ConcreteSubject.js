
const Subject = require('./Subject');

class ConcreteSubject extends Subject {
    constructor() {
        super();
        this.state = null;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        console.log(`ConcreteSubject: state changed to ${state}`);
        this.notify();
    }
}
module.exports = ConcreteSubject;
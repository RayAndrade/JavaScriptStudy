
const Memento = require('./Memento');

class Originator {
    constructor() {
        this.state = "";
    }
    setState(state) {
        this.state = state;
        console.log(`Originator: setting state to "${state}"`);
    }
    getState() {
        return this.state;
    }
    save() {
        console.log(`Originator: saving to memento`);
        return new Memento(this.state);
    }
    restore(memento) {
        this.state = memento.getState();
        console.log(`Originator: state restored to "${this.state}"`);
    }
}
module.exports = Originator;
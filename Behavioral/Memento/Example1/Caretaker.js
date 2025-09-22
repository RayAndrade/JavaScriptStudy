
class Caretaker {
    constructor() {
        this.mementos = [];
    }
    addMemento(memento) {
        this.mementos.push(memento);
    }
    getMemento(index) {
        return this.mementos[index]; // retrieve a memento by index
    }
}
module.exports = Caretaker;
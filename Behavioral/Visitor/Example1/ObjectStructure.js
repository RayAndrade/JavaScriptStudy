
class ObjectStructure {
    constructor() {
        this.elements = [];
    }
    attach(element) {
        this.elements.push(element);
    }
    detach(element) {
        const index = this.elements.indexOf(element);
        if (index !== -1) {
            this.elements.splice(index, 1);
        }
    }
    accept(visitor) {

        this.elements.forEach(element => element.accept(visitor));
    }
}
module.exports = ObjectStructure;
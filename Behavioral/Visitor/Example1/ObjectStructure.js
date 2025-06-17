export class ObjectStructure {
    constructor() {
        this.elements = [];
    }
    attach(element) {
        this.elements.push(element); // Add element to list
    }
    detach(element) {
        const index = this.elements.indexOf(element);
        if (index > -1) {
            this.elements.splice(index, 1);
        }
    }
    accept(visitor) {
        for (const element of this.elements) {
            element.accept(visitor);
        }
    }
}
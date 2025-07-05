// ObjectStructure.js

// ObjectStructure manages visitable elements
class ObjectStructure {
    constructor() {
        this.elements = []; // hold elements
    }

    attach(element) {
        this.elements.push(element); // add element to collection
    }

    detach(element) {
        const index = this.elements.indexOf(element);
        if (index !== -1) {
            this.elements.splice(index, 1); // remove element
        }
    }

    accept(visitor) {
        // iterate and apply visitor to each
        this.elements.forEach(element => element.accept(visitor));
    }
}

module.exports = ObjectStructure;
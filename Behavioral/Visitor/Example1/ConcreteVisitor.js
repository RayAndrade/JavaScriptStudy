// ConcreteVisitor.js

const Visitor = require('./Visitor');

// ConcreteVisitor implements visit logic for each element type
class ConcreteVisitor extends Visitor {
    visitConcreteElementA(element) {
        console.log(`ConcreteVisitor: processing ConcreteElementA with value=${element.value}`);
    }

    visitConcreteElementB(element) {
        console.log(`ConcreteVisitor: processing ConcreteElementB with name=${element.name}`);
    }
}

module.exports = ConcreteVisitor;
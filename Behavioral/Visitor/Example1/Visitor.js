// Visitor.js

// Visitor interface declares visit methods for each ConcreteElement
class Visitor {
    visitConcreteElementA(element) {
        throw new Error("visitConcreteElementA() must be implemented");
    }

    visitConcreteElementB(element) {
        throw new Error("visitConcreteElementB() must be implemented");
    }
}

module.exports = Visitor;
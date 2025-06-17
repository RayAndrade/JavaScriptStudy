
export class Visitor {
    visitConcreteElementA(element) {
        throw new Error('visitConcreteElementA must be implemented');
    }
    visitConcreteElementB(element) {
        throw new Error('visitConcreteElementB must be implemented');
    }
}
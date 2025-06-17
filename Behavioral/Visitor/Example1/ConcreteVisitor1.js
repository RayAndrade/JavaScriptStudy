import { Visitor } from './Visitor.js';

export class ConcreteVisitor1 extends Visitor {
    visitConcreteElementA(element) {
        console.log(`ConcreteVisitor1 visiting A: ${element.operationA()}`);
    }
    visitConcreteElementB(element) {
        console.log(`ConcreteVisitor1 visiting B: ${element.operationB()}`);
    }
}
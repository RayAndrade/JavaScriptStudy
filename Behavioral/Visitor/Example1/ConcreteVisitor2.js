import { Visitor } from './Visitor.js';

export class ConcreteVisitor2 extends Visitor {
    visitConcreteElementA(element) {
        console.log(`ConcreteVisitor2 visiting A in uppercase: ${element.operationA().toUpperCase()}`);
    }
    visitConcreteElementB(element) {
        console.log(`ConcreteVisitor2 visiting B reversed: ${element.operationB().split('').reverse().join('')}`);
    }
}
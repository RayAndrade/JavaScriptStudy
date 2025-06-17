import { Element } from './Element.js';

export class ConcreteElementA extends Element {
    accept(visitor) {
        visitor.visitConcreteElementA(this);
    }
    operationA() {
        return 'ElementA says hello';
    }
}
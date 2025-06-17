import { Element } from './Element.js';

export class ConcreteElementB extends Element {
    accept(visitor) {
        visitor.visitConcreteElementB(this);
    }
    operationB() {
        return 'ElementB sends regards';
    }
}
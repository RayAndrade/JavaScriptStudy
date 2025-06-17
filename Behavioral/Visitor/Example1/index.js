import { ConcreteElementA } from './ConcreteElementA.js';
import { ConcreteElementB } from './ConcreteElementB.js';
import { ConcreteVisitor1 } from './ConcreteVisitor1.js';
import { ConcreteVisitor2 } from './ConcreteVisitor2.js';
import { ObjectStructure } from './ObjectStructure.js';

const elementA = new ConcreteElementA();
const elementB = new ConcreteElementB();

const objectStructure = new ObjectStructure();
objectStructure.attach(elementA);
objectStructure.attach(elementB);

const visitor1 = new ConcreteVisitor1();
const visitor2 = new ConcreteVisitor2();

console.log('Using ConcreteVisitor1:');
objectStructure.accept(visitor1);

console.log('\nUsing ConcreteVisitor2:');
objectStructure.accept(visitor2);
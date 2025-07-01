const ConcreteComponent = require('./ConcreteComponent');
const ConcreteDecoratorA = require('./ConcreteDecoratorA');
const ConcreteDecoratorB = require('./ConcreteDecoratorB');
const Client = require('./Client');

const simple = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(simple);
const decoratorB = new ConcreteDecoratorB(decoratorA);

Client.execute(simple);
Client.execute(decoratorA);
Client.execute(decoratorB);
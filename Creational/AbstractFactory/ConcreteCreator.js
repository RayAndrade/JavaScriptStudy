import Creator from './Creator.js';
import ConcreteProduct from './ConcreteProduct.js';

class ConcreteCreator extends Creator {
    factoryMethod() {
        return new ConcreteProduct();
    }
}
export default ConcreteCreator;
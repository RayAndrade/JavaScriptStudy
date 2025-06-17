import Product from './Product.js';
class ConcreteProduct extends Product {
    operation() {
        return "Result from ConcreteProduct";
    }
}
export default ConcreteProduct;
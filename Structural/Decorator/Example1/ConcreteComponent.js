const Component = require('./Component');

class ConcreteComponent extends Component {
    operation() {
        return "ConcreteComponent";
    }
}
module.exports = ConcreteComponent;
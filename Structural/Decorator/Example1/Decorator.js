const Component = require('./Component');

class Decorator extends Component {
    constructor(component) {
        super();
        this.component = component;
    }
    operation() {
        return this.component.operation();
    }
}
module.exports = Decorator;
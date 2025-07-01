// UnsharedConcreteFlyweight.js

const Flyweight = require('./Flyweight');

// UnsharedConcreteFlyweight is a flyweight that is not shared
class UnsharedConcreteFlyweight extends Flyweight {
    constructor(state) {
        super();
        this.state = state; // unique, not shared
    }

    operation(extrinsicState) {
        console.log(
            `UnsharedConcreteFlyweight: state=${this.state}, extrinsic=${extrinsicState}`
        );
    }
}

module.exports = UnsharedConcreteFlyweight;

// ConcreteFlyweight.js

const Flyweight = require('./Flyweight');

// ConcreteFlyweight implements Flyweight and stores intrinsic state
class ConcreteFlyweight extends Flyweight {
    constructor(sharedState) {
        super();
        this.sharedState = sharedState; // intrinsic state shared by many
    }

    operation(extrinsicState) {
        // use both intrinsic and extrinsic state
        console.log(
            `ConcreteFlyweight: shared=${this.sharedState}, extrinsic=${extrinsicState}`
        );
    }
}

module.exports = ConcreteFlyweight;

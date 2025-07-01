// FlyweightFactory.js

const ConcreteFlyweight = require('./ConcreteFlyweight');

// FlyweightFactory creates and reuses flyweights
class FlyweightFactory {
    constructor() {
        this.flyweights = {}; // holds existing flyweights
    }

    // get existing or create new flyweight for shared state
    getFlyweight(sharedState) {
        if (!this.flyweights[sharedState]) {
            this.flyweights[sharedState] = new ConcreteFlyweight(sharedState);
        }
        return this.flyweights[sharedState];
    }

    // just for visualization
    listFlyweights() {
        console.log(
            `FlyweightFactory: I have ${Object.keys(this.flyweights).length} flyweights`
        );
    }
}

module.exports = FlyweightFactory;

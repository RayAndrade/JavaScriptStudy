
class Context {
    constructor(state) {
        this.state = state;
    }
    setState(state) {
        this.state = state;
        console.log(`Context: changed state to ${state.constructor.name}`);
    }
    request() {
        this.state.handle(this); // delegate to the current state's handle
    }
}
module.exports = Context;